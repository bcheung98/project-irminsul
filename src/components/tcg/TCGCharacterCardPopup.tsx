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

    const matches_sm_up = useMediaQuery(theme.breakpoints.up("sm"))
    const matches_lg_up = useMediaQuery(theme.breakpoints.up("lg"))

    const dispatch = useDispatch()

    const { name, element, arkhe, weapon, factions, hp, talents, splash } = props.char

    const [open, setOpen] = React.useState(false)
    const [tag, setTag] = React.useState("")
    const handleClickOpen = (event: React.BaseSyntheticEvent) => {
        setTag(event.target.className.split("-")[1])
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const skillIcon = {
        width: matches_sm_up ? "48px" : "32px",
        height: matches_sm_up ? "48px" : "32px",
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
            <Box sx={{ position: "relative", ml: "10px" }}>
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
                            width: matches_sm_up ? "80px" : "48px",
                            height: matches_sm_up ? "98px" : "58px",
                            backgroundImage: `url(${process.env.REACT_APP_URL}/tcg/icons/hp.png)`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "100%",
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: `${theme.font.genshin.family}`,
                                fontSize: matches_sm_up ? "40px" : "24px",
                                lineHeight: matches_sm_up ? "98px" : "58px",
                                color: `white`,
                                textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                                userSelect: "none"
                            }}>
                            {hp}
                        </Typography>
                    </Box>
                </Box>
                <img
                    src={`${process.env.REACT_APP_URL}/tcg/character_cards/${name.split(" ").join("_")}.png`}
                    alt={name}
                    style={{
                        width: matches_sm_up ? "256px" : "128px",
                        border: `2px solid ${theme.border.color}`,
                        borderRadius: matches_sm_up ? "28px" : "18px",
                    }}
                    onError={ErrorLoadingImage}
                />
            </Box>
        )
    }

    function CardInfo() {

        let card_name
        if (props.char.displayName) { card_name = props.char.displayName }
        else if (props.char.fullname) { card_name = props.char.fullname }
        else { card_name = name }

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
                    <CustomTooltip title={element} arrow placement="top">
                        <img
                            src={(`${process.env.REACT_APP_URL}/elements/${element}.png`)} alt={element}
                            style={{
                                marginRight: "15px",
                                width: matches_sm_up ? "56px" : "32px"
                            }}
                            onError={ErrorLoadingImage}
                        />
                    </CustomTooltip>
                    <Typography
                        sx={{
                            fontFamily: `${theme.font.genshin.family}`,
                            fontSize: matches_sm_up ? "32px" : "20px",
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
                {
                    Object.keys(talents).map((key, index) =>
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
                                            <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: { xs: "12px", sm: "14px" }, color: "#ffe7b9" }} variant="body2">
                                                {FormatTCGTalentKey(key)}
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                                <TCGDiceCost cost={talents[key].cost} display="flex" size={matches_sm_up ? "56px" : "36px"} />
                            </Box>
                            <Typography sx={{ color: `${theme.text.colorAlt}`, fontSize: { xs: "14px", sm: "16px" } }}>
                                {parse(talents[key].description, options)}
                            </Typography>
                            {index !== Object.keys(talents).length - 1 && <hr style={{ border: `0.5px solid ${theme.border.color}`, marginTop: "15px", marginBottom: "15px" }} />}
                        </Box>
                    )
                }
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
                            props.inDeck === false ?
                                <Button variant="contained" sx={{ height: { xs: "24px", sm: "32px" }, px: 1, mb: "20px" }} onClick={() => dispatch(addCharacterCard(props.char))}>
                                    <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: { xs: "11.5px", sm: "13px" } }}>Add to Deck</Typography>
                                </Button>
                                :
                                <Button variant="contained" sx={{ height: { xs: "24px", sm: "32px" }, px: 1, mb: "20px", backgroundColor: `#d32f2f` }} onClick={() => dispatch(removeCharacterCard(props.char))}>
                                    <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: { xs: "11.5px", sm: "13px" } }}>Remove from Deck</Typography>
                                </Button>
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
                p: "15px",
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
                    <TCGKeywordPopup keywords={props.char.keywords} name={keywordName} image={keywordImage} type={keywordType} description={keywordDescription} handleClose={handleClose} />
                </Dialog>
            }
        </Box>
    )

}

const mapStateToProps = (state: RootState) => ({
    deck: state.deck,
    keywords: state.cards.cards[2]
})

export default connect(mapStateToProps)(TCGCharacterCardPopup)