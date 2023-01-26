import * as React from "react";
import { Typography, Box } from "@mui/material";

const TCGDiceCost = (props) => {

    let cost = []
    if (props.cost !== undefined) {
        cost = props.cost.split(" ");
    }

    return (
        <Box
            sx={{
                display: "flex",
                position: "relative"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    position: "absolute",
                    right: "5px",
                    bottom: "20px"
                }}
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
                                <img src={`${process.env.REACT_APP_URL}/tcg/icons/${dice.slice(-1)}.png`} alt={dice.slice(-1)} key={index}
                                    style={{
                                        width: "48px"
                                    }}
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