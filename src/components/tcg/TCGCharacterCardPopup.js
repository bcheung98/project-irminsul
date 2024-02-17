import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux";
import parse from "html-react-parser";
import { Box } from "@mui/system";
import { Typography, CardHeader, Avatar, Button, Dialog, Chip } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomTooltip } from "../../helpers/CustomTooltip";
import { ElementalBorderColor } from "../../helpers/ElementalColors";
import TCGDiceCost from "./TCGDiceCost";
import { FormatTCGTalentKey } from "../../helpers/FormatTCGTalentKey";
import { Keywords } from "./TCGKeywords";
import TCGKeywordPopup from "./TCGKeywordPopup";
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage";

const TCGCharacterCardPopup = (props) => {

    const theme = useTheme();

    let { name, element, weapon, nation, hp, talents, splash } = props.char;

    const [open, setOpen] = React.useState(false);
    const [tag, setTag] = React.useState("");
    const handleClickOpen = (e) => {
        setTag(e.target.className.split("-")[1]);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

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
    let keywordDescription;
    if (Keywords[tag]) {
        keywordName = Keywords[tag].name;
        keywordType = Keywords[tag].type;
        keywordDescription = Keywords[tag].description;
    }
    else if (props.char.keywords && tag !== "") {
        let currentKeyword = props.char.keywords.find(kw => kw.tag === tag);
        keywordName = currentKeyword.name;
        keywordType = currentKeyword.type;
        keywordDescription = currentKeyword.description;
    }

    return (
        <Box
            sx={{
                width: "80vw",
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
                            mt: "5px",
                        }}
                    >
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
                                        fontFamily: "Genshin, sans-serif",
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        color: `${theme.text.color}`,
                                        textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                                    }}>
                                    {hp}
                                </Typography>
                            </Box>
                        </Box>
                        <img src={`${process.env.REACT_APP_URL}/tcg/character_cards/Card_${name.split(" ").join("_")}.png`} alt={name}
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
                <Grid xs={9}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            mb: "10px",
                        }}
                    >
                        <CustomTooltip title={element} arrow placement="top">
                            <img src={(`${process.env.REACT_APP_URL}/elements/Element_${element}.png`)} alt={element} onError={ErrorLoadingImage} style={{ marginRight: "10px", width: "64px", height: "64px" }} />
                        </CustomTooltip>
                        <Typography sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }} variant="h4">
                            {props.char.fullname ? props.char.fullname : name}
                        </Typography>
                    </Box>
                    <Box sx={{ mb: "10px" }}>
                        <Chip
                            avatar={<Avatar variant="square" src={`${process.env.REACT_APP_URL}/tcg/icons/weapons/${weapon}.png`} alt={weapon} />}
                            label={
                                <Typography sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }} variant="subtitle1">
                                    {weapon}
                                </Typography>
                            }
                            sx={{ px: "5px", mr: "10px", backgroundColor: "rgb(69, 84, 103)" }}
                        />
                        <Chip
                            avatar={<Avatar variant="square" src={`${process.env.REACT_APP_URL}/tcg/icons/factions/${nation}.png`} alt={nation} />}
                            label={
                                <Typography sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }} variant="subtitle1">
                                    {nation}
                                </Typography>
                            }
                            sx={{ px: "5px", mr: "10px", backgroundColor: "rgb(69, 84, 103)" }}
                        />
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
                                                    <Avatar alt={`name.split(" ").join("_").toLowerCase()}_${key}`} src={(`${process.env.REACT_APP_URL}/tcg/character_talent_icons/attack_${weapon.split(" ").join("_").toLowerCase()}.png`)} style={ElementalBorderColor(element)}
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
                                                    <Typography sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }} variant="h6">
                                                        {talents[key].name}
                                                    </Typography>
                                                    <Typography sx={{ fontFamily: "Genshin, sans-serif", color: "rgb(211, 188, 142)" }} variant="body2">
                                                        {FormatTCGTalentKey(key)}
                                                    </Typography>
                                                </React.Fragment>
                                            }
                                        />
                                        <TCGDiceCost cost={talents[key].cost} type={"popup"} />
                                        <Typography variant="body1" sx={{ ml: "20px", mb: "10px", color: `${theme.text.colorAlt}`, }}>
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
                                    <Button variant="contained" sx={{ my: "20px" }} onClick={() => props.addCharCardToDeck(props.char)}>
                                        <Typography variant="body1" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}`, }}>Add to Deck</Typography>
                                    </Button>
                                    :
                                    <Button variant="contained" color="error" sx={{ my: "20px" }} onClick={() => props.removeCharCardToDeck(props.char)}>
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
                            <TCGKeywordPopup keywords={props.char.keywords} name={keywordName} type={keywordType} description={keywordDescription} />
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
        addCharCardToDeck: (card) => dispatch({ type: "ADD_CHAR_CARD", card }),
        removeCharCardToDeck: (card) => dispatch({ type: "REMOVE_CHAR_CARD", card })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TCGCharacterCardPopup);