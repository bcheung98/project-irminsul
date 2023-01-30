import * as React from "react";
import { connect } from "react-redux";
import parse from "html-react-parser";
import { Box } from "@mui/system";
import { Typography, CardHeader, Avatar, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { MaterialTooltip } from "../../helpers/MaterialTooltip";
import { ElementalBorderColor } from "../../helpers/ElementalColors";
import TCGDiceCost from "./TCGDiceCost";
import { FormatTCGTalentKey } from "../../helpers/FormatTCGTalentKey";

const TCGCharacterCardPopup = (props) => {

    let { name, element, weapon, nation, hp, talents } = props.char;

    return (
        <Box
            sx={{
                width: "75vw",
                p: "15px",
                backgroundColor: "rgb(0, 30, 60)",
                border: "2px solid rgb(30, 73, 118)",
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
                        <MaterialTooltip title={element} arrow placement="top">
                            <img src={(`${process.env.REACT_APP_URL}/elements/Element_${element}.png`)} alt={element} />
                        </MaterialTooltip>
                    }
                    title={
                        <Typography sx={{ fontFamily: "Genshin, sans-serif", color: "white" }} variant="h4">
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
                    <Typography sx={{ fontFamily: "Genshin, sans-serif", color: "white" }} variant="subtitle1">
                        {weapon}
                    </Typography>
                    <Typography sx={{ fontFamily: "Genshin, sans-serif", color: "white" }} variant="subtitle1">
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
                                        color: "white",
                                        textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                                    }}>
                                    {hp}
                                </Typography>
                            </Box>
                        </Box>
                        <img src={`${process.env.REACT_APP_URL}/tcg/character_cards/${name.split(" ").join("_")}_Character_Card.png`} alt={name} style={{ width: "250px" }} />
                    </Box>
                    {
                        props.inDeck === false ?
                            <Button variant="contained" sx={{ m: "20px" }} onClick={() => props.addCharCardToDeck(props.char)}>
                                <Typography variant="body1" sx={{ fontFamily: "Genshin, sans-serif", color: "white", }}>Add to Deck</Typography>
                            </Button>
                            :
                            <Button variant="contained" sx={{ m: "20px" }} onClick={() => props.removeCharCardToDeck(props.char)}>
                                <Typography variant="body1" sx={{ fontFamily: "Genshin, sans-serif", color: "white", }}>Remove from Deck</Typography>
                            </Button>
                    }
                </Box>
                <Grid xs={9}>
                    <Box
                        sx={{
                            backgroundColor: "rgb(9, 24, 39)",
                            border: "1px solid rgb(30, 73, 118)",
                            borderRadius: "5px",
                            color: "white",
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
                                                            border: "2px solid rgb(30, 73, 118)",
                                                        }} />
                                                    :
                                                    <Avatar alt={`name.split(" ").join("_").toLowerCase()}_${key}`} src={(`${process.env.REACT_APP_URL}/tcg/character_talent_icons/${name.split(" ").join("_").toLowerCase()}_${key}.png`)} style={ElementalBorderColor(element)}
                                                        sx={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            width: "48px",
                                                            height: "48px",
                                                            border: "2px solid rgb(30, 73, 118)",
                                                        }} />
                                            }
                                            title={
                                                <React.Fragment>
                                                    <Typography sx={{ fontFamily: "Genshin, sans-serif", color: "white" }} variant="h6">
                                                        {talents[key].name}
                                                    </Typography>
                                                    <Typography sx={{ fontFamily: "Genshin, sans-serif", color: "white" }} variant="body2">
                                                        <i>{FormatTCGTalentKey(key).toUpperCase()}</i>
                                                    </Typography>
                                                </React.Fragment>
                                            }
                                        />
                                        <TCGDiceCost cost={talents[key].cost} type={"popup"} />
                                        <Typography variant="body1" sx={{ ml: "20px" }}>
                                            {parse(talents[key].description)}
                                        </Typography>
                                        < hr style={{ border: ".5px solid rgb(30, 73, 118)", marginTop: "15px" }} />
                                    </Box>
                                )
                            })
                        }
                    </Box>
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