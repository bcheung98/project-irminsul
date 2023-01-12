import * as React from "react";
import { Typography } from "@mui/material";

const CharacterBrowser = () => {
    return (
        <div>
            <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                    display: { xs: "none", md: "flex" },
                    fontFamily: "Genshin",
                    color: "white",
                    textDecoration: "none",
                    textAlign: "center",
                }}
            >
                Coming soon
            </Typography>
        </div>
    )
}

export default CharacterBrowser;