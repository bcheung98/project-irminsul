import * as React from "react"
import { connect, useDispatch } from "react-redux"
import parse, { Element, domToReact, HTMLReactParserOptions } from "html-react-parser"

// Component imports
import TCGDiceCost from "./TCGDiceCost"
import TCGKeywordPopup from "./TCGKeywordPopup"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { Box, Typography, CardHeader, Avatar, Button, Dialog, Chip } from "@mui/material"
import Grid from "@mui/material/Grid2"

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

    const ChipStyle = {
        px: "5px",
        mr: "10px",
        mb: "10px",
        backgroundColor: "rgb(69, 84, 103)"
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
    let keywordType
    let keywordDescription
    if (Keywords[tag]) {
        keywordName = Keywords[tag].name
        keywordType = Keywords[tag].type
        keywordDescription = Keywords[tag].description
    }
    else if (props.keywords && tag !== "") {
        let currentKeyword = props.keywords.find((kw: TCGKeywordsData) => kw.tag === tag)
        try {
            keywordName = currentKeyword.name
            keywordType = currentKeyword.type
            keywordDescription = currentKeyword.description
        }
        catch {
            keywordName = ""
            keywordType = ""
            keywordDescription = ""
        }
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
            <Avatar alt={`name.split(" ").join("_").toLowerCase()}_${key}`} src={src} style={ElementalBorderColor(element)}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "48px",
                    height: "48px",
                    border: `2px solid ${theme.border.color}`,
                }}
            >
                <img src={`${process.env.REACT_APP_URL}/Unknown.png`} alt="Unknown" style={{ width: "48px", backgroundColor: `${theme.paper.backgroundColor}` }} />
            </Avatar>
        )

    }

    return (
        <Box
            sx={{
                width: "70vw",
                p: "15px",
                backgroundColor: "rgb(0, 30, 60)",
                border: `2px solid ${theme.border.color}`,
                borderRadius: "5px",
            }}
        >
            <Grid container spacing={2} sx={{ mt: "10px" }}>
                <Grid size="auto">
                    <Box
                        sx={{
                            position: "relative",
                            mx: "25px",
                            mt: "5px",
                        }}
                    >
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
                                    position: "relative",
                                    textAlign: "center",
                                }}
                            >
                                <img src={`${process.env.REACT_APP_URL}/tcg/icons/hp.png`} alt={hp} style={{ width: "80px" }} />
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontFamily: `${theme.font.genshin.family}`,
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
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
                                width: "250px",
                                border: `2px solid ${theme.border.color}`,
                                borderRadius: "28px",
                            }}
                            onError={ErrorLoadingImage}
                        />
                        {/* Card Splash Text */}
                        <React.Fragment>
                            {
                                splash !== undefined &&
                                <Box
                                    sx={{
                                        maxWidth: "250px",
                                        maxHeight: "250px",
                                        overflowY: "auto",
                                        pr: "10px",
                                        my: "20px"
                                    }}
                                >
                                    <Typography variant="body2" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}` }}>
                                        <i>{parse(splash.description)}</i>
                                    </Typography>
                                </Box>
                            }
                        </React.Fragment>
                    </Box>
                </Grid>
                <Grid size="grow">
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            mb: "10px",
                        }}
                    >
                        <CustomTooltip title={element} arrow placement="top">
                            <img src={(`${process.env.REACT_APP_URL}/elements/${element}.png`)} alt={element} onError={ErrorLoadingImage} style={{ marginRight: "15px", width: "64px", height: "64px" }} />
                        </CustomTooltip>
                        <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}` }} variant="h4">
                            {props.char.displayName && props.char.displayName}
                            {props.char.fullName && props.char.fullName}
                            {!props.char.displayName && !props.char.fullName && name}
                        </Typography>
                    </Box>
                    <Box>
                        <Chip
                            avatar={<Avatar variant="square" src={`${process.env.REACT_APP_URL}/tcg/icons/weapons/${weapon.split(" ").join("_")}.png`} alt={weapon} />}
                            label={
                                <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}` }} variant="body2">
                                    {weapon}
                                </Typography>
                            }
                            sx={ChipStyle}
                        />
                        {
                            factions.map((faction: string, index: number) => {
                                return (
                                    <Chip
                                        key={index}
                                        avatar={
                                            <Avatar variant="square" src={`${process.env.REACT_APP_URL}/tcg/icons/factions/${faction.split(" ").join("_")}.png`} alt={faction}>
                                                <img src={`${process.env.REACT_APP_URL}/Unknown.png`} alt="Unknown" style={{ width: "24px", backgroundColor: "rgb(69, 84, 103)" }} />
                                            </Avatar>
                                        }
                                        label={
                                            <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}` }} variant="body2">
                                                {faction}
                                            </Typography>
                                        }
                                        sx={ChipStyle}
                                    />
                                )
                            })
                        }
                        {
                            arkhe &&
                            <Chip
                                avatar={
                                    <Avatar variant="square" src={`${process.env.REACT_APP_URL}/tcg/icons/factions/${arkhe}.png`} alt={arkhe}>
                                        <img src={`${process.env.REACT_APP_URL}/Unknown.png`} alt="Unknown" style={{ width: "24px", backgroundColor: "rgb(69, 84, 103)" }} />
                                    </Avatar>
                                }
                                label={
                                    <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}` }} variant="body2">
                                        Arkhe: {arkhe}
                                    </Typography>
                                }
                                sx={ChipStyle}
                            />
                        }
                    </Box>
                    <Box
                        sx={{
                            backgroundColor: `${theme.paper.backgroundColor}`,
                            border: `1px solid ${theme.border.color}`,
                            borderRadius: "5px",
                            color: `${theme.text.color}`,
                            maxHeight: "60vh",
                            overflowY: "auto",
                        }}
                    >
                        {
                            Object.keys(talents).map((key, index) => {
                                return (
                                    <Box key={key} sx={{ px: "10px" }}>
                                        <CardHeader
                                            sx={{
                                                display: "flex",
                                                alignItems: "center"
                                            }}
                                            avatar={
                                                key === "attack" ?
                                                    GetAttackIcon(key, weapon, element, talents)
                                                    :
                                                    <Avatar alt={`name.split(" ").join("_").toLowerCase()}_${key}`} src={(`${process.env.REACT_APP_URL}/tcg/character_talent_icons/${name.split(" ").join("_").toLowerCase()}_${key}.png`)} style={ElementalBorderColor(element)}
                                                        sx={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            width: "48px",
                                                            height: "48px",
                                                            border: `2px solid ${theme.border.color}`,
                                                        }}>
                                                        <img src={`${process.env.REACT_APP_URL}/Unknown.png`} alt="Unknown" style={{ width: "48px", backgroundColor: `${theme.paper.backgroundColor}` }} />
                                                    </Avatar>
                                            }
                                            title={
                                                <React.Fragment>
                                                    <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}` }} variant="h6">
                                                        {talents[key].name}
                                                    </Typography>
                                                    <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, color: "#ffe7b9" }} variant="body2">
                                                        {FormatTCGTalentKey(key)}
                                                    </Typography>
                                                </React.Fragment>
                                            }
                                        />
                                        <TCGDiceCost cost={talents[key].cost} type={"popup"} />
                                        <Typography variant="body1" sx={{ ml: "20px", mr: "15px", mb: "10px", color: `${theme.text.colorAlt}`, }}>
                                            {parse(talents[key].description, options)}
                                        </Typography>
                                        {index !== Object.keys(talents).length - 1 && <hr style={{ border: `0.5px solid ${theme.border.color}`, marginBottom: "0px" }} />}
                                    </Box>
                                )
                            })
                        }
                    </Box>
                    {
                        props.preview === false &&
                        <React.Fragment>
                            {
                                props.inDeck === false ?
                                    <Button variant="contained" sx={{ my: "20px" }} onClick={() => dispatch(addCharacterCard(props.char))}>
                                        <Typography variant="body1" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}`, }}>Add to Deck</Typography>
                                    </Button>
                                    :
                                    <Button variant="contained" color="error" sx={{ my: "20px" }} onClick={() => dispatch(removeCharacterCard(props.char))}>
                                        <Typography variant="body1" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}`, }}>Remove from Deck</Typography>
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
                            <TCGKeywordPopup keywords={props.char.keywords} name={keywordName} type={keywordType} description={keywordDescription} />
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