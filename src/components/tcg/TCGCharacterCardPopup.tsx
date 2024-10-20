import * as React from "react"
import { connect, useDispatch } from "react-redux"
import parse, { Element, domToReact, HTMLReactParserOptions } from "html-react-parser"

// Component imports
import TCGDiceCost from "./TCGDiceCost"
import TCGKeywordPopup from "./TCGKeywordPopup"

// MUI imports
import { useTheme, useMediaQuery, Box, Typography, CardHeader, Avatar, Button, Dialog, Chip, AppBar, IconButton } from "@mui/material"
import Grid from "@mui/material/Grid2"
import CloseIcon from "@mui/icons-material/Close"

// Helper imports
import { addCharacterCard, removeCharacterCard } from "../../redux/reducers/DeckReducer"
import { CustomTooltip } from "../_custom/CustomTooltip"
import { ElementalBorderColor } from "../../helpers/ElementalColors"
import { FormatTCGTalentKey } from "../../helpers/FormatTCGTalentKey"
import { Keywords } from "./TCGKeywords"
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage"

// Type imports
import { RootState } from "../../redux/store"
import { TCGCardData } from "../../types/tcg/TCGData"
import { TCGKeywordsData } from "../../types/tcg/TCGKeywordsData"

function TCGCharacterCardPopup(props: any) {

    const theme = useTheme()

    const matches = useMediaQuery(theme.breakpoints.up("sm"))

    const dispatch = useDispatch()

    let { name, element, arkhe, weapon, factions, hp, talents, splash } = props.char

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

    const skillIcon = {
        width: matches ? "48px" : "32px",
        height: matches ? "48px" : "32px",
        border: `2px solid ${theme.border.color}`,
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
    let keywordDescription
    if (Keywords[tag]) {
        keywordName = Keywords[tag].name
        keywordImage = Keywords[tag].image
        keywordType = Keywords[tag].type
        keywordDescription = Keywords[tag].description
    }
    else if (props.keywords && tag !== "") {
        let currentKeyword = props.keywords.find((kw: TCGKeywordsData) => kw.tag === tag)
        try {
            keywordName = currentKeyword.name
            keywordImage = currentKeyword.image
            keywordType = currentKeyword.type
            keywordDescription = currentKeyword.description
        }
        catch {
            keywordName = ""
            keywordImage = null
            keywordType = ""
            keywordDescription = ""
        }
    }

    function CardImage() {
        return (
            <Box sx={{ position: "relative" }}>
                {/* HP Icon */}
                <Box
                    sx={{
                        position: "absolute",
                        top: "-20px",
                        left: "-20px",
                    }}
                >
                    <Box
                        sx={{
                            border: "2px solid transparent", // This actually centers the number
                            textAlign: "center",
                            width: matches ? "80px" : "48px",
                            height: matches ? "98px" : "58px",
                            backgroundImage: `url(${process.env.REACT_APP_URL}/tcg/icons/hp.png)`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "100%",
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: `${theme.font.genshin.family}`,
                                fontSize: matches ? "40px" : "24px",
                                lineHeight: matches ? "98px" : "58px",
                                color: `white`,
                                textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                                userSelect: "none"
                            }}>
                            {hp}
                        </Typography>
                    </Box>
                </Box>
                {/* Card Image */}
                <img src={`${process.env.REACT_APP_URL}/tcg/character_cards/${name.split(" ").join("_")}.png`} alt={name}
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

        let card_name
        if (props.char.displayName) { card_name = props.char.displayName }
        else if (props.char.fullname) { card_name = props.char.fullname }
        else { card_name = name }

        return (
            <React.Fragment>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: "10px",
                    }}
                >
                    <CustomTooltip title={element} arrow placement="top">
                        <img
                            src={(`${process.env.REACT_APP_URL}/elements/${element}.png`)} alt={element}
                            style={{
                                marginRight: "15px",
                                width: matches ? "56px" : "32px"
                            }}
                            onError={ErrorLoadingImage}
                        />
                    </CustomTooltip>
                    <Typography
                        sx={{
                            fontFamily: `${theme.font.genshin.family}`,
                            fontSize: matches ? "32px" : "20px",
                            color: `${theme.text.color}`
                        }}
                    >
                        {card_name}
                    </Typography>
                </Box>
                <Box>
                    <Chip
                        avatar={<img src={`${process.env.REACT_APP_URL}/tcg/icons/weapons/${weapon.split(" ").join("_")}.png`} alt={weapon} style={chipImage} onError={ErrorLoadingImage} />}
                        label={
                            <Typography sx={chipText}>
                                {weapon}
                            </Typography>
                        }
                        sx={chipStyle}
                    />
                    {
                        factions.map((faction: string, index: number) => {
                            return (
                                <Chip
                                    key={index}
                                    avatar={<img src={`${process.env.REACT_APP_URL}/tcg/icons/factions/${faction.split(" ").join("_")}.png`} alt={faction} style={chipImage} onError={ErrorLoadingImage} />}
                                    label={
                                        <Typography sx={chipText}>
                                            {faction}
                                        </Typography>
                                    }
                                    sx={chipStyle}
                                />
                            )
                        })
                    }
                    {
                        arkhe &&
                        <Chip
                            avatar={<img src={`${process.env.REACT_APP_URL}/tcg/icons/factions/${arkhe}.png`} alt={arkhe} style={chipImage} onError={ErrorLoadingImage} />}
                            label={
                                <Typography sx={chipText}>
                                    Arkhe: {arkhe}
                                </Typography>
                            }
                            sx={chipStyle}
                        />
                    }
                </Box>
            </React.Fragment>
        )
    }

    function GetAttackIcon(key: string, weapon: string, element: string, talents: TCGCardData["talents"]) {

        let src = `${process.env.REACT_APP_URL}/tcg/character_talent_icons/attack_${weapon.split(" ").join("_").toLowerCase()}.png`
        if (weapon === "Other Weapons") {
            if (talents.attack.description.includes("Physical DMG")) {
                src = `${process.env.REACT_APP_URL}/tcg/character_talent_icons/attack_other_weapons.png`
            }
            else {
                src = `${process.env.REACT_APP_URL}/tcg/character_talent_icons/attack_catalyst.png`
            }
        }
        return (
            <Avatar alt={`name.split(" ").join("_").toLowerCase()}_${key}`} src={src} style={ElementalBorderColor(element)} sx={skillIcon}>
                <img src={`${process.env.REACT_APP_URL}/Unknown.png`} alt="Unknown" style={{ width: "48px", backgroundColor: `${theme.paper.backgroundColor}` }} />
            </Avatar>
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
                {
                    Object.keys(talents).map((key, index) => {
                        return (
                            <Box key={key}>
                                <Box sx={{ mb: "15px", display: "flex", justifyContent: "space-between" }}>
                                    <CardHeader
                                        sx={{ p: 0 }}
                                        avatar={
                                            key === "attack" ?
                                                GetAttackIcon(key, weapon, element, talents)
                                                :
                                                <Avatar alt={`name.split(" ").join("_").toLowerCase()}_${key}`} src={(`${process.env.REACT_APP_URL}/tcg/character_talent_icons/${name.split(" ").join("_").toLowerCase()}_${key}.png`)} style={ElementalBorderColor(element)} sx={skillIcon}>
                                                    <img src={`${process.env.REACT_APP_URL}/Unknown.png`} alt="Unknown" style={{ width: "48px", backgroundColor: `${theme.paper.backgroundColor}` }} />
                                                </Avatar>
                                        }
                                        title={
                                            <React.Fragment>
                                                <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: { xs: "16px", sm: "20px" }, color: `${theme.text.color}` }}>
                                                    {talents[key].name}
                                                </Typography>
                                                <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: { xs: "14px", sm: "16px" }, color: "#ffe7b9" }} variant="body2">
                                                    {FormatTCGTalentKey(key)}
                                                </Typography>
                                            </React.Fragment>
                                        }
                                    />
                                    <TCGDiceCost cost={talents[key].cost} display="flex" size={matches ? "56px" : "36px"} />
                                </Box>
                                <Typography sx={{ color: `${theme.text.colorAlt}`, fontSize: { xs: "14px", sm: "16px" } }}>
                                    {parse(talents[key].description, options)}
                                </Typography>
                                {index !== Object.keys(talents).length - 1 && <hr style={{ border: `0.5px solid ${theme.border.color}`, marginTop: "15px", marginBottom: "15px" }} />}
                            </Box>
                        )
                    })
                }
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
                            borderBottom: `1px solid ${theme.border.color}`,
                            px: 2,
                            py: 1
                        }}
                    >
                        <Box sx={{ display: "flex", justifyContent: !props.preview ? "space-between" : "right", alignItems: "center" }}>
                            <Box sx={{ display: !props.preview ? "block" : "none" }}>
                                {
                                    props.inDeck === false ?
                                        <Button variant="contained" sx={{ height: "24px", px: 1 }} onClick={() => dispatch(addCharacterCard(props.char))}>
                                            <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: "11.5px" }}>Add to Deck</Typography>
                                        </Button>
                                        :
                                        <Button variant="contained" color="error" sx={{ height: "24px", px: 1 }} onClick={() => dispatch(removeCharacterCard(props.char))}>
                                            <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: "11.5px" }}>Remove from Deck</Typography>
                                        </Button>
                                }
                            </Box>
                            <IconButton onClick={props.handleClose}>
                                <CloseIcon sx={{ color: `white` }} />
                            </IconButton>
                        </Box>
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
                                props.inDeck === false ?
                                    <Button variant="contained" sx={{ my: "20px" }} onClick={() => dispatch(addCharacterCard(props.char))}>
                                        <Typography variant="body2" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `white`, }}>Add to Deck</Typography>
                                    </Button>
                                    :
                                    <Button variant="contained" color="error" sx={{ my: "20px" }} onClick={() => dispatch(removeCharacterCard(props.char))}>
                                        <Typography variant="body2" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `white`, }}>Remove from Deck</Typography>
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
                            <TCGKeywordPopup keywords={props.char.keywords} name={keywordName} image={keywordImage} type={keywordType} description={keywordDescription} handleClose={handleClose} />
                        </Dialog>
                    }
                </Grid>
            </Grid>
        </Box>
    )

}

const mapStateToProps = (state: RootState) => ({
    deck: state.deck,
    keywords: state.cards.cards[2]
})

export default connect(mapStateToProps)(TCGCharacterCardPopup)