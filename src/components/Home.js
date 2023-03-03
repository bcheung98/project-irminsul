import * as React from "react";
import "../App.css";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import FarmableToday from "./FarmableToday";
import VersionHighlights from "./VersionHighlights";

const Home = () => {
    return (
        <React.Fragment>
            <Box>
                <Box
                    sx={{
                        backgroundColor: "rgba(0, 30, 60, .8)",
                        border: "1px solid rgb(30, 73, 118)",
                        borderRadius: "5px",
                        display: "block",
                        margin: "auto",
                        mt: "20px",
                        width: "70%",
                        p: "20px",
                        textAlign: "center",
                        color: "white",
                    }}
                >
                    <Typography variant="h3" component="p" sx={{ fontFamily: "Genshin, sans-serif" }}>Welcome to PROJECT IRMINSUL</Typography>
                </Box>
                <FarmableToday />
                <VersionHighlights />
            </Box>
        </React.Fragment>
    )
}

export default Home;