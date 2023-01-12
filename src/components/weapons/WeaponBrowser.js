import * as React from "react";
import { Typography } from "@mui/material";

const WeaponBrowser = () => {
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
                WEAPONS
            </Typography>
        </div>
    )
}

export default WeaponBrowser;