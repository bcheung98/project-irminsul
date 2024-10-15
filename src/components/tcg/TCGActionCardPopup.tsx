import * as React from "react"
import { connect, useDispatch } from "react-redux"
import parse, { Element, domToReact, HTMLReactParserOptions } from "html-react-parser"

// Component imports
import TCGDiceCost from "./TCGDiceCost"
import TCGKeywordPopup from "./TCGKeywordPopup"

// MUI imports
import { useTheme, useMediaQuery, Box, Typography, Button, Dialog, Chip, AppBar, IconButton } from "@mui/material"
import Grid from "@mui/material/Grid2"
import CloseIcon from "@mui/icons-material/Close"

// Helper imports
import { addActionCard, removeActionCard } from "../../redux/reducers/DeckReducer"
import { Keywords } from "./TCGKeywords"
import { FormatTCGTalentKey } from "../../helpers/FormatTCGTalentKey"
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage"

// Type imports
import { RootState } from "../../redux/store"
import { TCGKeywordsData } from "../../types/tcg/TCGKeywordsData"
import { TCGCardData } from "../../types/tcg/TCGData"

function TCGActionCardPopup(props: any) {

    const theme = useTheme()

    const matches = useMediaQuery(theme.breakpoints.up("sm"))

    const dispatch = useDispatch()

    let { name, type, subType, weaponType, cost, description, splash } = props.card

    const [open, setOpen] = React.useState(false)
    const [tag, setTag] = React.useState("")
    const handleClickOpen = (event: React.BaseSyntheticEvent) => {
        setTag(event.target.className.split("-")[1])
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const chipStyle = {
        px: "5px",
        mr: "10px",
        mb: "10px",
        height: { xs: "24px", md: "32px" },
        backgroundColor: "rgb(69, 84, 103)"
    }

    const chipImage = {
        width: matches ? "24px" : "18px",
        height: matches ? "24px" : "18px"
    }

    const chipText = {
        fontFamily: `${theme.font.genshin.family}`,
        fontSize: matches ? "14px" : "11.5px",
        color: `white`
    }

    // The following code block transforms certain keywords into underlined elements
    // When clicked on, these elements will open up a dialog box showing info about the corresponding keyword
    const options: HTMLReactParserOptions = {
        replace: domNode => {
            const typedDomNode = domNode as Element
            if (!typedDomNode.attribs) {
                return
            }
            if (typedDomNode.attribs.class !== undefined && typedDomNode.attribs.class.split("-")[0].startsWith("tooltip")) {
                let dataTag = typedDomNode.attribs.class.split("-")[1]
                return React.createElement(
                    "u",
                    {
                        className: `${typedDomNode.attribs.class.split("-")[0]}-${dataTag}`,
                        style: { cursor: "pointer" },
                        onClick: (event: React.BaseSyntheticEvent) => { handleClickOpen(event) }
                    },
                    domToReact(typedDomNode.children, options)
                )
            }
        }
    }

    let keywordName
    let keywordImage
    let keywordType
    let keywordCost
    let keywordDescription
    if (tag.startsWith("_")) {
        let skill = props.characters.cards.find((card: TCGCardData) => tag.split("_")[1].toLowerCase() === card.name.toLowerCase()).talents[tag.split("_")[2]]
        keywordName = skill.name
        keywordType = FormatTCGTalentKey(tag.split("_")[2])
        keywordDescription = skill.description
    }
    else if (Keywords[tag]) {
        keywordName = Keywords[tag].name
        keywordImage = Keywords[tag].image
        keywordType = Keywords[tag].type
        keywordCost = Keywords[tag].cost
        keywordDescription = Keywords[tag].description
    }
    else if (props.keywords && tag !== "") {
        let currentKeyword = props.keywords.find((kw: TCGKeywordsData) => kw.tag === tag)
        try {
            keywordName = currentKeyword.name
            keywordImage = currentKeyword.image && currentKeyword.image
            keywordType = currentKeyword.type
            keywordCost = currentKeyword.cost
            keywordDescription = currentKeyword.description
        }
        catch {
            keywordName = ""
            keywordImage = null
            keywordType = ""
            keywordCost = ""
            keywordDescription = ""
        }
    }

    function CardImage() {
        return (
            <Box sx={{ position: "relative" }}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "-20px",
                        left: "-25px"
                    }}
                >
                    <TCGDiceCost cost={cost} size={matches ? "96px" : "56px"} />
                </Box>
                {/* Card Image */}
                <img src={`${process.env.REACT_APP_URL}/tcg/action_cards/${name.split(" ").join("_")}.png`} alt={name}
                    style={{
                        width: matches ? "250px" : "150px",
                        border: `2px solid ${theme.border.color}`,
                        borderRadius: matches ? "28px" : "18px",
                    }}
                    onError={ErrorLoadingImage}
                />
            </Box>
        )
    }

    function CardName() {
        return (
            <React.Fragment>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: "10px",
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: `${theme.font.genshin.family}`,
                            fontSize: matches ? "40px" : "20px",
                            color: `${theme.text.color}`
                        }}
                    >
                        {props.card.displayName ? props.card.displayName : name}
                    </Typography>
                </Box>
                <Box>
                    <Chip
                        label={
                            <Typography sx={chipText}>
                                {type} Card
                            </Typography>
                        }
                        sx={chipStyle}
                    />
                    {
                        subType &&
                        <Chip
                            avatar={<img src={`${process.env.REACT_APP_URL}/tcg/icons/subtypes/${subType.split(" ").join("_")}.png`} alt={subType} style={chipImage} onError={ErrorLoadingImage} />}
                            label={
                                <Typography sx={chipText} variant="body2">
                                    {subType}
                                </Typography>
                            }
                            sx={chipStyle}
                        />
                    }
                    {
                        props.card.combatAction &&
                        <Chip
                            avatar={<img src={`${process.env.REACT_APP_URL}/tcg/icons/subtypes/Combat_Action.png`} alt="Combat Action" style={chipImage} onError={ErrorLoadingImage} />}
                            label={
                                <Typography sx={chipText} variant="body2">
                                    Combat Action
                                </Typography>
                            }
                            sx={chipStyle}
                        />
                    }
                    {
                        weaponType &&
                        <Chip
                            avatar={<img src={`${process.env.REACT_APP_URL}/tcg/icons/weapons/${weaponType}.png`} alt={weaponType} style={chipImage} onError={ErrorLoadingImage} />}
                            label={
                                <Typography sx={chipText} variant="body2">
                                    {weaponType}
                                </Typography>
                            }
                            sx={chipStyle}
                        />
                    }
                </Box>
            </React.Fragment>
        )
    }

    function SplashText() {
        return (
            <React.Fragment>
                {
                    splash !== undefined &&
                    <Box
                        sx={{
                            maxWidth: { xs: "auto", lg: "250px" },
                            maxHeight: "250px",
                            overflowY: "auto",
                            pr: "10px",
                            ml: { xs: "20px", sm: "40px", lg: 0 },
                            mr: "-20px",
                            my: { xs: 0, lg: "20px" }
                        }}
                    >
                        <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: matches ? "14px" : "11px", color: `${theme.text.color}` }}>
                            <i>{parse(splash.description)}</i>
                        </Typography>
                    </Box>
                }
            </React.Fragment>
        )
    }

    function CardSkill() {
        return (
            <Box
                sx={{
                    backgroundColor: `${theme.paper.backgroundColor}`,
                    border: `1px solid ${theme.border.color}`,
                    borderRadius: "5px",
                    color: `${theme.text.color}`,
                    overflowY: "auto",
                    p: 2.5
                }}
            >
                <Typography sx={{ color: `${theme.text.colorAlt}`, fontSize: { xs: "14px", sm: "16px" } }}>
                    {parse(description, options)}
                </Typography>
            </Box>
        )
    }

    return (
        <Box
            sx={{
                width: { xs: "100%", md: "70vw" },
                minHeight: { xs: "100vh", sm: "70vh" },
                overflowY: "auto",
                backgroundColor: `${theme.materialImage.backgroundColor}`,
                border: { xs: "none", sm: `2px solid ${theme.border.color}` },
                borderRadius: { xs: "0px", sm: "5px" },
            }}
        >
            {
                !matches &&
                <React.Fragment>
                    <AppBar position="sticky"
                        sx={{
                            backgroundColor: `${theme.appbar.backgroundColor}`,
                            borderTop: `2px solid ${theme.border.color}`,
                            borderBottom: `1px solid ${theme.border.color}`,
                            px: 2,
                            py: 1
                        }}
                    >
                        {
                            props.preview === false &&
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Grid container spacing={2}>
                                    {
                                        props.count < 2 &&
                                        <Button variant="contained" sx={{ height: "24px", px: 1 }} onClick={() => dispatch(addActionCard(props.card))}>
                                            <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: "11.5px" }}>Add to Deck</Typography>
                                        </Button>
                                    }
                                    {
                                        props.inDeck === true &&
                                        <Button variant="contained" color="error" sx={{ height: "24px", px: 1 }} onClick={() => dispatch(removeActionCard(props.card))}>
                                            <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: "11.5px" }}>Remove from Deck</Typography>
                                        </Button>
                                    }
                                </Grid>
                                <IconButton onClick={props.handleClose}>
                                    <CloseIcon sx={{ color: `white` }} />
                                </IconButton>
                            </Box>
                        }
                    </AppBar>
                    <Box sx={{ px: "15px", pt: "10px" }}>
                        <CardName />
                    </Box>
                </React.Fragment>
            }
            <Grid container spacing={2} sx={{ mt: "10px", p: "15px" }}>
                <Grid size={{ xs: 12, lg: "auto" }} sx={{ mx: "25px", mt: "5px" }}>
                    <Box sx={{ display: { xs: "flex", lg: "block" } }}>
                        {/* Card Image */}
                        <CardImage />
                        {/* Card Splash Text */}
                        <SplashText />
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: "grow" }}>
                    {matches && <CardName />}
                    <CardSkill />
                    {
                        matches && props.preview === false &&
                        <React.Fragment>
                            {
                                props.count < 2 &&
                                <Button variant="contained" sx={{ mr: "10px", my: "20px" }} onClick={() => dispatch(addActionCard(props.card))}>
                                    <Typography variant="body2" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}`, }}>Add to Deck</Typography>
                                </Button>
                            }
                            {
                                props.inDeck === true &&
                                <Button variant="contained" color="error" sx={{ my: "20px" }} onClick={() => dispatch(removeActionCard(props.card))}>
                                    <Typography variant="body2" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}`, }}>Remove from Deck</Typography>
                                </Button>
                            }
                        </React.Fragment>
                    }
                    {
                        keywordName && keywordDescription &&
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            maxWidth={false}
                        >
                            <TCGKeywordPopup keywords={props.card.keywords} name={keywordName} image={keywordImage} type={keywordType} cost={keywordCost} description={keywordDescription} />
                        </Dialog>
                    }
                </Grid>
            </Grid>
        </Box>
    )

}

const mapStateToProps = (state: RootState) => ({
    deck: state.deck,
    characters: state.cards.cards[0],
    keywords: state.cards.cards[2]
})

export default connect(mapStateToProps)(TCGActionCardPopup)