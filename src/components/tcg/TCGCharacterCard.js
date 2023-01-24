import * as React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const TCGCharacterCard = (props) => {

    let { name, hp, talents } = props.char

    // Generates an array of numbers
    const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));

    return (
        <Box sx={{ mb: "20px" }}>
            <Box
                sx={{
                    width: "150",
                    ml: "30px",
                    mb: "45px",
                    position: "relative"
                }}
            >
                {/* HP Icon */}
                <Box
                    sx={{
                        position: "absolute",
                        top: "-15px",
                        left: "-15px"
                    }}
                >
                    <Box
                        sx={{
                            position: "relative",
                            textAlign: "center"
                        }}
                    >
                        <img src={`${process.env.REACT_APP_URL}/tcg/icons/hp.png`} alt={hp} style={{ width: "40px" }} />
                        <Typography
                            variant="h6"
                            sx={{
                                fontFamily: "Genshin, sans-serif",
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                color: "white",
                                textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
                            }}>
                            {hp}
                        </Typography>
                    </Box>
                </Box>
                {/* Energy Icons */}
                <Box
                    sx={{
                        position: "absolute",
                        top: "10px",
                        right: "-18px"
                    }}
                >
                    {
                        range(1, talents.burst.energy, 1).map(index => (
                            <Box>
                                <img key={index} src={`${process.env.REACT_APP_URL}/tcg/icons/Energy_Card.png`} alt="Energy" style={{ width: "40px", marginBottom: "-15px" }} />
                            </Box>
                        ))
                    }
                </Box>
                <img src={`${process.env.REACT_APP_URL}/tcg/character_cards/${name.split(" ").join("_")}_Character_Card.png`} alt={name} style={{ width: "150px" }} />
                {/* Card Name */}
                <Box sx={{ position: "absolute" }}>
                    <Typography
                        sx={{
                            fontFamily: "Genshin, sans-serif",
                            color: "white",
                        }}
                        variant="body1">
                        {name}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default TCGCharacterCard;