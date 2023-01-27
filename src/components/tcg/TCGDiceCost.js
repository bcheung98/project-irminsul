import * as React from "react";
import { Typography, Box } from "@mui/material";

const TCGDiceCost = (props) => {

    let cost = []
    if (props.cost !== undefined) {
        cost = props.cost.split(" ");
    }

    const position = (type) => {
        if (type === "card") {
            return {
                position: "absolute",
                top: "5px",
                left: "-10px"
            }
        }
        else {
            return {
                display: "flex",
                position: "absolute",
                right: "5px",
                bottom: "20px"
            }
        }
    }

    const size = (type) => {
        if (type === "card") {
            return {
                width: "56px"
            }
        }
        else {
            return {
                width: "48px"
            }
        }
    }

    return (
        <Box
            sx={{
                display: "flex",
                position: "relative"
            }}
        >
            <Box
                sx={position(props.type)}
            >
                {
                    cost.map((dice, index) => {
                        return (
                            <Box
                                sx={{
                                    position: "relative",
                                    textAlign: "center"
                                }}
                            >
                                <img src={`${process.env.REACT_APP_URL}/tcg/icons/${dice.slice(-1)}.png`} alt={dice.slice(-1)} key={index} style={size(props.type)}
                                />
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontFamily: "Genshin, sans-serif",
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        color: "white",
                                        textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
                                    }}>
                                    {dice.slice(0, -1)}
                                </Typography>
                            </Box>
                        )
                    })
                }
            </Box>
        </Box>
    )
}

export default TCGDiceCost;