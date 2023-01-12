import * as React from "react";
import { AppBar, Box, Toolbar, Typography, Container, Button, Tooltip } from "@mui/material";

const pages = ["characters", "weapons"];

const Nav = () => {

    return (
        <AppBar position="static" sx={{
            backgroundColor: "rgb(0, 30, 60)",
            borderBottom: "1px solid rgb(30, 73, 118)"
        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/project-irminsul"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "Genshin, monospace",
                            letterSpacing: ".3rem",
                            color: "white",
                            textDecoration: "none",
                        }}
                    >
                        PROJECT IRMINSUL
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        {pages.map((page) => (
                            <Button
                                href={`/project-irminsul/${page}`}
                                key={page}
                                sx={{ mx: 3, my: 2, color: "white", display: "block", fontFamily: "Genshin" }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Nav;