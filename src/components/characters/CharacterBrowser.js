import * as React from "react";
import { Typography } from "@mui/material";

const CharacterBrowser = () => {
    return (
        <div>
             <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "Genshin",
                            letterSpacing: ".3rem",
                            color: "white",
                            textDecoration: "none",
                        }}
                    >
                        CHARACTERS
                    </Typography>
        </div>
    )
}

export default CharacterBrowser;