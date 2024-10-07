import * as React from "react"
import { connect, useDispatch } from "react-redux"
import parse, { Element, domToReact, HTMLReactParserOptions } from "html-react-parser"

// Component imports
import TCGDiceCost from "./TCGDiceCost"
import TCGKeywordPopup from "./TCGKeywordPopup"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { Box, Typography, Button, Dialog, Chip, Avatar } from "@mui/material"
import Grid from "@mui/material/Grid2"

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
    let keywordCost
    let keywordDescription
    if (tag.startsWith("_")) {
        let skill = props.characters.cards.find((card: TCGCardData) => tag.split("_")[1].toLowerCase() === card.name.toLowerCase()).talents[tag.split("_")[2]]
        keywordName = skill.name
        keywordType = FormatTCGTalentKey(tag.split("_")[2])
        keywordCost = skill.cost
        keywordDescription = skill.description
    }
    else if (Keywords[tag]) {
        keywordName = Keywords[tag].name
        keywordType = Keywords[tag].type
        keywordCost = Keywords[tag].cost
        keywordDescription = Keywords[tag].description
    }
    else if (props.keywords && tag !== "") {
        let currentKeyword = props.keywords.find((kw: TCGKeywordsData) => kw.tag === tag)
        try {
            keywordName = currentKeyword.name
            keywordType = currentKeyword.type
            keywordCost = currentKeyword.cost
            keywordDescription = currentKeyword.description
        }
        catch {
            keywordName = ""
            keywordType = ""
            keywordCost = ""
            keywordDescription = ""
        }
    }

    return (
        <Box
            sx={{
                width: "70vw",
                p: "15px",
                backgroundColor: `${theme.table.body.backgroundColor}`,
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
                        <Box
                            sx={{
                                position: "absolute",
                                top: "-15px",
                                left: "-15px"
                            }}
                        >
                            <TCGDiceCost cost={cost} type={"card-large"} />
                        </Box>
                        <img src={`${process.env.REACT_APP_URL}/tcg/action_cards/${name.split(" ").join("_")}.png`} alt={name}
                            style={{
                                width: "250px",
                                border: `2px solid ${theme.border.color}`,
                                borderRadius: "28px",
                            }}
                            onError={ErrorLoadingImage}
                        />
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
                        <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}` }} variant="h4">
                            {props.card.displayName ? props.card.displayName : name}
                        </Typography>
                    </Box>
                    <Box>
                        <Chip
                            label={
                                <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}` }} variant="body2">
                                    {type} Card
                                </Typography>
                            }
                            sx={ChipStyle}
                        />
                        {
                            subType &&
                            <Chip
                                avatar={
                                    <Avatar variant="square" src={`${process.env.REACT_APP_URL}/tcg/icons/subtypes/${subType.split(" ").join("_")}.png`} alt={subType}>
                                        <img src={`${process.env.REACT_APP_URL}/Unknown.png`} alt="Unknown" style={{ width: "24px", backgroundColor: "rgb(69, 84, 103)" }} />
                                    </Avatar>
                                }
                                label={
                                    <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}` }} variant="body2">
                                        {subType}
                                    </Typography>
                                }
                                sx={ChipStyle}
                            />
                        }
                        {
                            props.card.combatAction &&
                            <Chip
                                avatar={
                                    <Avatar variant="square" src={`${process.env.REACT_APP_URL}/tcg/icons/subtypes/Combat_Action.png`} alt="Combat Action">
                                        <img src={`${process.env.REACT_APP_URL}/Unknown.png`} alt="Unknown" style={{ width: "24px", backgroundColor: "rgb(69, 84, 103)" }} />
                                    </Avatar>
                                }
                                label={
                                    <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}` }} variant="body2">
                                        Combat Action
                                    </Typography>
                                }
                                sx={ChipStyle}
                            />
                        }
                        {
                            weaponType &&
                            <Chip
                                avatar={
                                    <Avatar variant="square" src={`${process.env.REACT_APP_URL}/tcg/icons/weapons/${weaponType}.png`} alt={weaponType}>
                                        <img src={`${process.env.REACT_APP_URL}/Unknown.png`} alt="Unknown" style={{ width: "24px", backgroundColor: "rgb(69, 84, 103)" }} />
                                    </Avatar>
                                }
                                label={
                                    <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}` }} variant="body2">
                                        {weaponType}
                                    </Typography>
                                }
                                sx={ChipStyle}
                            />
                        }
                    </Box>
                    <Box
                        sx={{
                            backgroundColor: `${theme.paper.backgroundColor}`,
                            border: `2px solid ${theme.border.color}`,
                            borderRadius: "5px",
                            color: `${theme.text.color}`,
                            maxHeight: "60vh",
                            overflowY: "auto",
                            p: "15px",
                        }}
                    >
                        <Typography variant="body1" sx={{ ml: "20px", mr: "15px", color: `${theme.text.colorAlt}` }}>
                            {parse(description, options)}
                        </Typography>
                    </Box>
                    {
                        props.preview === false &&
                        <React.Fragment>
                            {
                                props.count < 2 &&
                                <Button variant="contained" sx={{ mr: "10px", my: "20px" }} onClick={() => dispatch(addActionCard(props.card))}>
                                    <Typography variant="body1" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}`, }}>Add to Deck</Typography>
                                </Button>
                            }
                            {
                                props.inDeck === true &&
                                <Button variant="contained" color="error" sx={{ my: "20px" }} onClick={() => dispatch(removeActionCard(props.card))}>
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
                            <TCGKeywordPopup keywords={props.card.keywords} name={keywordName} type={keywordType} cost={keywordCost} description={keywordDescription} />
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