import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux";
import parse from "html-react-parser";
import { Box } from "@mui/system";
import { Typography, Button, Dialog, Chip, Avatar } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import TCGDiceCost from "./TCGDiceCost";
import { Keywords } from "./TCGKeywords";
import TCGKeywordPopup from "./TCGKeywordPopup";
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage";

const TCGActionCardPopup = (props) => {

    const theme = useTheme();

    let { name, type, subType, weaponType, cost, description, splash } = props.card;

    const [open, setOpen] = React.useState(false);
    const [tag, setTag] = React.useState("");
    const handleClickOpen = (e) => {
        setTag(e.target.className.split("-")[1]);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const ChipStyle = {
        px: "5px",
        mr: "10px",
        mb: "10px",
        backgroundColor: "rgb(69, 84, 103)"
    }

    // The following code block transforms certain keywords into underlined elements
    // When clicked on, these elements will open up a dialog box showing info about the corresponding keyword
    const { domToReact } = parse;
    const options = {
        replace: ({ attribs, children }) => {
            if (!attribs) {
                return;
            }
            if (attribs.class !== undefined && attribs.class.split("-")[0].startsWith("tooltip")) {
                let dataTag = attribs.class.split("-")[1]
                return React.createElement(
                    "u",
                    {
                        className: `${attribs.class.split("-")[0]}-${dataTag}`,
                        style: { cursor: "pointer" },
                        onClick: (e) => { handleClickOpen(e) }
                    },
                    domToReact(children, options)
                )
            }
        }
    }

    let keywordName;
    let keywordType;
    let keywordCost;
    let keywordDescription;
    if (Keywords[tag]) {
        keywordName = Keywords[tag].name;
        keywordType = Keywords[tag].type;
        keywordCost = Keywords[tag].cost;
        keywordDescription = Keywords[tag].description;
    }
    else if (props.card.keywords && tag !== "") {
        let currentKeyword = props.card.keywords.find(kw => kw.tag === tag);
        keywordName = currentKeyword.name;
        keywordType = currentKeyword.type;
        keywordCost = currentKeyword.cost;
        keywordDescription = currentKeyword.description;
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
            <Grid container sx={{ mt: "10px" }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column"
                    }}
                >
                    <Box
                        sx={{
                            position: "relative",
                            mx: "25px",
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
                        <img src={`${process.env.REACT_APP_URL}/tcg/action_cards/Card_${name.split(" ").join("_")}.png`} alt={name}
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
                                <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>
                                    <i>{parse(splash.description)}</i>
                                </Typography>
                            </Box>
                        }
                    </Box>
                </Box>
                <Grid xs>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            mb: "10px",
                        }}
                    >
                        <Typography sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }} variant="h4">
                            {props.card.displayName ? props.card.displayName : name}
                        </Typography>
                    </Box>
                    <Box>
                        <Chip
                            label={
                                <Typography sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }} variant="body2">
                                    {type} Card
                                </Typography>
                            }
                            sx={ChipStyle}
                        />
                        {
                            subType &&
                            <Chip
                                avatar={
                                    <Avatar variant="square" src={`${process.env.REACT_APP_URL}/tcg/icons/subtypes/${subType}.png`} alt={subType}>
                                        <img src={`${process.env.REACT_APP_URL}/Unknown.png`} alt="Unknown" style={{ width: "24px", backgroundColor: "rgb(69, 84, 103)" }} />
                                    </Avatar>
                                }
                                label={
                                    <Typography sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }} variant="body2">
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
                                    <Avatar variant="square" src={`${process.env.REACT_APP_URL}/tcg/icons/subtypes/Combat Action.png`} alt="Combat Action">
                                        <img src={`${process.env.REACT_APP_URL}/Unknown.png`} alt="Unknown" style={{ width: "24px", backgroundColor: "rgb(69, 84, 103)" }} />
                                    </Avatar>
                                }
                                label={
                                    <Typography sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }} variant="body2">
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
                                    <Typography sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }} variant="body2">
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
                                <Button variant="contained" sx={{ mr: "10px", my: "20px" }} onClick={() => props.addActionCardToDeck(props.card)}>
                                    <Typography variant="body1" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}`, }}>Add to Deck</Typography>
                                </Button>
                            }
                            {
                                props.inDeck === true &&
                                <Button variant="contained" color="error" sx={{ my: "20px" }} onClick={() => props.removeActionCardToDeck(props.card)}>
                                    <Typography variant="body1" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}`, }}>Remove from Deck</Typography>
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

const mapStateToProps = (state) => {
    return {
        deck: state.deck
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addActionCardToDeck: (card) => dispatch({ type: "ADD_ACTION_CARD", card }),
        removeActionCardToDeck: (card) => dispatch({ type: "REMOVE_ACTION_CARD", card })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TCGActionCardPopup);