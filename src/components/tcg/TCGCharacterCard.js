import * as React from "react";
import { Box } from "@mui/system";
import { Typography, Card, CardMedia, CardContent } from "@mui/material";

const TCGCharacterCard = (props) => {

    let { name, element, weapon, nation, hp } = props.char

    return (
        <React.Fragment>
            <Box sx={{ width: "200px" }}>
                <img src={`${process.env.REACT_APP_URL}/tcg/character_cards/${name}_Character_Card.png`} alt={name} style={{ width: "200px" }} />
                <Typography
                    sx={{
                        fontFamily: "Genshin, sans-serif",
                        color: "white",
                        textAlign: "center"
                    }} variant="h6">
                    {name}
                </Typography>
            </Box>
        </React.Fragment>
    )
}

export default TCGCharacterCard;