import * as React from "react";
import parse from "html-react-parser";
import { Box } from "@mui/system";
import { Typography, CardHeader, Avatar } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import TCGDiceCost from "./TCGDiceCost";

const TCGActionCardPopup = (props) => {

    let { name, type, subType, cost, description } = props.card;

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
                    title={
                        <Typography sx={{ fontFamily: "Genshin, sans-serif", color: "white" }} variant="h4">
                            {name}
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
                        {type}
                    </Typography>
                    <Typography sx={{ fontFamily: "Genshin, sans-serif", color: "white" }} variant="subtitle1">
                        {subType}
                    </Typography>
                </Box>
            </Box>
            <Grid container sx={{ mt: "10px" }}>
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
                    <img src={`${process.env.REACT_APP_URL}/tcg/action_cards/${name.split(" ").join("_")}_${type}_Card.png`} alt={name} style={{ width: "250px" }} />
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
                            p: "15px",
                        }}
                    >
                        <Typography variant="body1" sx={{ ml: "20px" }}>
                            {parse(description)}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default TCGActionCardPopup;