import * as React from "react";
import { Box } from "@mui/system";
import { Typography, Dialog } from "@mui/material";
import TCGDiceCost from "./TCGDiceCost";

const TCGActionCard = (props) => {

    let { name, type, cost } = props.card;

    return (
        <Box sx={{ mb: "20px" }}>
            <Box
                sx={{
                    width: "150",
                    ml: "30px",
                    mb: "45px",
                    position: "relative",
                    cursor: "pointer"
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
                    <TCGDiceCost cost={cost} type={"card"} />
                </Box>
                <img src={`${process.env.REACT_APP_URL}/tcg/action_cards/${name.split(" ").join("_")}_${type}_Card.png`} alt={name} style={{ width: "150px" }} />
                {/* Card Name */}
                <Box sx={{ position: "absolute" }}>
                    <Typography
                        sx={{
                            fontFamily: "Genshin, sans-serif",
                            color: "white",
                        }}
                        variant="body2">
                        {name}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default TCGActionCard;