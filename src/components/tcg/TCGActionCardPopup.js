import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux";
import parse from "html-react-parser";
import { Box } from "@mui/system";
import { Typography, CardHeader, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import TCGDiceCost from "./TCGDiceCost";
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage";

const TCGActionCardPopup = (props) => {

    const theme = useTheme();

    let { name, type, subType, cost, description, splash } = props.card;

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
                    title={
                        <Typography sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }} variant="h4">
                            {props.card.displayName ? props.card.displayName : name}
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
                        {type}
                    </Typography>
                    <Typography sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }} variant="subtitle1">
                        {subType}
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
                            border: `2px solid ${theme.border.color}`,
                            borderRadius: "5px",
                            color: `${theme.text.color}`,
                            maxHeight: "60vh",
                            overflowY: "auto",
                            p: "15px",
                        }}
                    >
                        <Typography variant="body1" sx={{ ml: "20px", color: `${theme.text.colorAlt}` }}>
                            {parse(description)}
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
                                <Button variant="contained" color="secondary" sx={{ my: "20px" }} onClick={() => props.removeActionCardToDeck(props.card)}>
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
        addActionCardToDeck: (card) => dispatch({ type: "ADD_ACTION_CARD", card }),
        removeActionCardToDeck: (card) => dispatch({ type: "REMOVE_ACTION_CARD", card })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TCGActionCardPopup);