import * as React from "react"
import { connect, useDispatch } from "react-redux"
import parse, { Element, domToReact, HTMLReactParserOptions } from "html-react-parser"

// Component imports
import TCGDiceCost from "./TCGDiceCost"
import TCGKeywordPopup from "./TCGKeywordPopup"

// MUI imports
import { useTheme, useMediaQuery, Box, Typography, Button, Dialog, Chip, IconButton } from "@mui/material"
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

    const matches_sm_up = useMediaQuery(theme.breakpoints.up("sm"))
    const matches_lg_up = useMediaQuery(theme.breakpoints.up("lg"))

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
                    <TCGDiceCost cost={cost} size={matches_sm_up ? "96px" : "56px"} />
                </Box>
                {/* Card Image */}
                <img src={`${process.env.REACT_APP_URL}/tcg/action_cards/${name.split(" ").join("_")}.png`} alt={name}
                    style={{
                        width: matches_sm_up ? "250px" : "150px",
                        border: `2px solid ${theme.border.color}`,
                        borderRadius: matches_sm_up ? "28px" : "18px",
                    }}
                    onError={ErrorLoadingImage}
                />
            </Box>
        )
    }

    function CardInfo() {

        const chipStyle = {
            px: "5px",
            mr: "10px",
            mb: "10px",
            height: { xs: "24px", sm: "32px" },
            backgroundColor: "rgb(69, 84, 103)"
        }

        const chipImage = {
            width: matches_sm_up ? "24px" : "18px",
            height: matches_sm_up ? "24px" : "18px"
        }

        const chipText = {
            fontFamily: `${theme.font.genshin.family}`,
            fontSize: matches_sm_up ? "14px" : "11.5px",
            color: `white`
        }

        return (
            <React.Fragment>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: "10px",
                        mr: "25px"
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: `${theme.font.genshin.family}`,
                            fontSize: matches_sm_up ? "32px" : "20px",
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
                            maxWidth: { xs: "auto", lg: "256px" },
                            maxHeight: { xs: "200px", sm: "400px", lg: "300px" },
                            overflowY: "auto",
                            px: "10px",
                            mt: { xs: 0, lg: "15px" },
                            mx: { sm: "15px", lg: 0 }
                        }}
                    >
                        <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: matches_sm_up ? "14px" : "11px", color: `${theme.text.color}` }}>
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
                    p: 2.5,
                    mb: "15px"
                }}
            >
                <Typography sx={{ color: `${theme.text.colorAlt}`, fontSize: { xs: "14px", sm: "16px" } }}>
                    {parse(description, options)}
                </Typography>
            </Box>
        )
    }

    function AddToDeck() {

        return (
            <React.Fragment>
                {
                    !props.preview &&
                    <React.Fragment>
                        {
                            props.count < 2 &&
                            <Box>
                                <Button variant="contained" sx={{ height: { xs: "24px", sm: "32px" }, px: 1, mb: "10px" }} onClick={() => dispatch(addActionCard(props.card))}>
                                    <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: { xs: "11.5px", sm: "13px" } }}>Add to Deck</Typography>
                                </Button>
                            </Box>
                        }
                        {
                            props.inDeck === true &&
                            <Box>
                                <Button variant="contained" sx={{ height: { xs: "24px", sm: "32px" }, px: 1, mb: "20px", backgroundColor: `#d32f2f` }} onClick={() => dispatch(removeActionCard(props.card))}>
                                    <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: { xs: "11.5px", sm: "13px" } }}>Remove from Deck</Typography>
                                </Button>
                            </Box>
                        }
                    </React.Fragment>
                }
            </React.Fragment>
        )

    }

    return (
        <Box
            sx={{
                position: "relative",
                width: { xs: "100%", md: "70vw" },
                minHeight: { xs: "100vh", sm: "70vh" },
                p: "25px",
                overflowY: "auto",
                backgroundColor: `${theme.materialImage.backgroundColor}`,
                border: { xs: "none", sm: `2px solid ${theme.border.color}` },
                borderRadius: { xs: "0px", sm: "5px" },
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    right: "0px",
                    top: "5px",
                }}
            >
                <IconButton onClick={props.handleClose}>
                    <CloseIcon fontSize={matches_sm_up ? "large" : "medium"} sx={{ color: `white` }} />
                </IconButton>
            </Box>
            {
                matches_lg_up ?
                    <Grid container spacing={2}>
                        <Grid size="auto">
                            <Box sx={{ mt: "10px" }}>
                                <CardImage />
                                <SplashText />
                            </Box>
                        </Grid>
                        <Grid size="grow">
                            <CardInfo />
                            <CardSkill />
                            <AddToDeck />
                        </Grid>
                    </Grid>
                    :
                    <React.Fragment>
                        <CardInfo />
                        <Box sx={{ display: "flex", my: "15px" }}>
                            <CardImage />
                            <SplashText />
                        </Box>
                        <AddToDeck />
                        <CardSkill />
                    </React.Fragment>
            }
            {
                keywordName && keywordDescription &&
                <Dialog
                    open={open}
                    onClose={handleClose}
                    maxWidth={false}
                >
                    <TCGKeywordPopup keywords={props.card.keywords} name={keywordName} image={keywordImage} type={keywordType} cost={keywordCost} description={keywordDescription} handleClose={handleClose} />
                </Dialog>
            }
        </Box>
    )

}

const mapStateToProps = (state: RootState) => ({
    deck: state.deck,
    characters: state.cards.cards[0],
    keywords: state.cards.cards[2]
})

export default connect(mapStateToProps)(TCGActionCardPopup)