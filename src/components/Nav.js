import * as React from "react";
import { AppBar, Box, Toolbar, Typography, Container, Button, Avatar, CardHeader } from "@mui/material";

const Nav = () => {

    return (
        <AppBar position="static" sx={{
            backgroundColor: "rgb(0, 30, 60)",
            borderBottom: "1px solid rgb(30, 73, 118)"
        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <CardHeader
                        avatar={
                            <Avatar src={require("../assets/icons/Sumeru.png")} alt="PROJECT IRMINSUL" sx={{ height: "64px", width: "64px" }} />
                        }
                        title={
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
                        }
                    />
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        <Button
                            href={`/project-irminsul/characters`}
                            key={"characters"}
                        >
                            <CardHeader
                                avatar={
                                    <Avatar src={require("../assets/icons/Aether.png")} alt="CHARACTERS" sx={{ height: "32px", width: "32px" }} />
                                }
                                title={
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontFamily: "Genshin, monospace",
                                            color: "white",
                                            textDecoration: "none",
                                        }}
                                    >
                                        CHARACTERS
                                    </Typography>
                                }
                            />
                        </Button>
                        <Button
                            href={`/project-irminsul/weapons`}
                            key={"weapons"}
                        >
                            <CardHeader
                                avatar={
                                    <Avatar src={require("../assets/icons/Weapons.png")} alt="WEAPONS" sx={{ height: "48px", width: "48px" }} />
                                }
                                title={
                                    <Typography
                                        variant="body1"
                                        noWrap  
                                        sx={{
                                            fontFamily: "Genshin, monospace",
                                            color: "white",
                                            textDecoration: "none",
                                        }}
                                    >
                                        WEAPONS
                                    </Typography>
                                }
                            />
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Nav;