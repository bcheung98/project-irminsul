import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux";
import parse from "html-react-parser";
import { Box } from "@mui/system";
import { Typography, CardHeader, Avatar, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomTooltip } from "../../helpers/CustomTooltip";
import { ElementalBorderColor } from "../../helpers/ElementalColors";
import TCGDiceCost from "./TCGDiceCost";
import { FormatTCGTalentKey } from "../../helpers/FormatTCGTalentKey";
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage";

const TCGCharacterCardPopup = (props) => {

    const theme = useTheme();

    let { name, element, weapon, nation, hp, talents, splash } = props.char;

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
            <Box
                sx={{
                    display: "flex",
                    position: "relative",
                    mb: "20px",
                }}
            >
                <CardHeader
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                    avatar={
                        <CustomTooltip title={element} arrow placement="top">
                            <img src={(`${process.env.REACT_APP_URL}/elements/Element_${element}.png`)} alt={element} onError={ErrorLoadingImage} />
                        </CustomTooltip>
                    }
                    title={
                        <Typography sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }} variant="h4">
                            {props.char.fullname ? props.char.fullname : name}
                        </Typography>
                    }
                />
                <Box
                    sx={{
                        position: "absolute",
                        right: "30px",
                        top: "20px",
                    }}
                >
                    <Typography sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }} variant="subtitle1">
                        {weapon}
                    </Typography>
                    <Typography sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }} variant="subtitle1">
                        {nation}
                    </Typography>
                </Box>
            </Box>
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
                        <img src={`${process.env.REACT_APP_URL}/tcg/character_cards/${name.split(" ").join("_")}_Character_Card.png`} alt={name}
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
                            backgroundColor: `${theme.paper.backgroundColor}`,
                            border: `1px solid ${theme.border.color}`,
                            borderRadius: "5px",
                            color: `${theme.text.color}`,
                            maxHeight: "60vh",
                            overflowY: "auto",
                        }}
                    >
                        {
                            Object.keys(talents).map(key => {
                                return (
                                    <Box key={key} sx={{ p: "10px" }}>
                                        <CardHeader
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                mt: "-10px",
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
                                                    <Typography sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }} variant="body2">
                                                        <i>{FormatTCGTalentKey(key).toUpperCase()}</i>
                                                    </Typography>
                                                </React.Fragment>
                                            }
                                        />
                                        <TCGDiceCost cost={talents[key].cost} type={"popup"} />
                                        <Typography variant="body1" sx={{ ml: "20px" }}>
                                            {parse(talents[key].description)}
                                        </Typography>
                                        < hr style={{ border: `0.5px solid ${theme.border.color}`, marginTop: "15px" }} />
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
                                    <Button variant="contained" sx={{ my: "20px" }} onClick={() => props.removeCharCardToDeck(props.char)}>
                                        <Typography variant="body1" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}`, }}>Remove from Deck</Typography>
                                    </Button>
                            }
                        </React.Fragment>
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