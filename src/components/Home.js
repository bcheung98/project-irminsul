import * as React from "react";
import "../App.css";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Home = () => {
    return (
        <Box className="landing-page">
            <Box className="landing-page-text">
                <Typography variant="h2" component="p" sx={{ fontFamily: "Genshin, sans-serif" }}>Welcome to <br />PROJECT IRMINSUL</Typography>
            </Box>
        </Box>
    )
}

export default Home;