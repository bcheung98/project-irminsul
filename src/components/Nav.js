import * as React from "react";
import { AppBar, Box, Toolbar, Typography, Container, ButtonBase, Avatar, CardHeader } from "@mui/material";

const Nav = () => {
    return (
        <AppBar position="static" sx={{
            backgroundColor: "rgb(0, 30, 60)",
            borderBottom: "1px solid rgb(30, 73, 118)"
        }}>
            <Container maxWidth="xl" sx={{ margin: 0 }}>
                <Toolbar disableGutters>
                    <ButtonBase
                        disableRipple
                        href={`/project-irminsul/`}
                        key={"characters"}
                    >
                        <CardHeader
                            avatar={
                                <Avatar src={(`${process.env.REACT_APP_URL}/icons/Sumeru.png`)} alt="PROJECT IRMINSUL" sx={{ height: "64px", width: "64px" }} />
                            }
                            title={
                                <Typography variant="h6" noWrap
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
                    </ButtonBase>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        <ButtonBase
                            disableRipple
                            href={`/project-irminsul/characters`}
                            key={"characters"}
                        >
                            <CardHeader
                                avatar={
                                    <Avatar src={(`${process.env.REACT_APP_URL}/icons/Aether.png`)} alt="CHARACTERS" sx={{ height: "32px", width: "32px" }} />
                                }
                                title={
                                    <Typography variant="body1"
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
                        </ButtonBase>
                        <ButtonBase
                            disableRipple
                            href={`/project-irminsul/weapons`}
                            key={"weapons"}
                        >
                            <CardHeader
                                avatar={
                                    <Avatar src={(`${process.env.REACT_APP_URL}/icons/Weapons.png`)} alt="WEAPONS" sx={{ height: "48px", width: "48px" }} />
                                }
                                title={
                                    <Typography variant="body1" noWrap
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
                        </ButtonBase>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Nav;