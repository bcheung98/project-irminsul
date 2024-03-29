import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { AppBar, Box, Toolbar, Typography, Container, ButtonBase, Avatar, CardHeader } from "@mui/material";

const Nav = () => {

    const theme = useTheme();

    return (
        <AppBar position="static"
            sx={{
                backgroundColor: `${theme.appbar.backgroundColor}`,
                borderBottom: `1px solid ${theme.border.color}`
            }}
        >
            <Container maxWidth="xl" sx={{ margin: 0 }}>
                <Toolbar disableGutters>
                    <ButtonBase
                        disableRipple
                        href={`/project-irminsul/`}
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
                        >
                            <CardHeader
                                avatar={
                                    <Avatar src={(`${process.env.REACT_APP_URL}/icons/Aether.png`)} alt="CHARACTERS" sx={{ height: "32px", width: "32px" }} />
                                }
                                title={
                                    <Typography variant="body2"
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
                        >
                            <CardHeader
                                avatar={
                                    <Avatar src={(`${process.env.REACT_APP_URL}/icons/Weapons.png`)} alt="WEAPONS" sx={{ height: "48px", width: "48px" }} />
                                }
                                title={
                                    <Typography variant="body2" noWrap
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
                        <ButtonBase
                            disableRipple
                            href={`/project-irminsul/planner`}
                        >
                            <CardHeader
                                avatar={
                                    <Avatar src={(`${process.env.REACT_APP_URL}/icons/Ascension.png`)} alt="Ascension" sx={{ height: "36px", width: "36px", mt: "5px" }} />
                                }
                                title={
                                    <Typography variant="body2" noWrap
                                        sx={{
                                            fontFamily: "Genshin, monospace",
                                            color: "white",
                                            textDecoration: "none",
                                        }}
                                    >
                                        ASCENSION PLANNER
                                    </Typography>
                                }
                            />
                        </ButtonBase>
                        <ButtonBase
                            disableRipple
                            href={`/project-irminsul/banners`}
                        >
                            <CardHeader
                                avatar={
                                    <Avatar src={(`${process.env.REACT_APP_URL}/icons/Wish.png`)} alt="BANNERS" sx={{ height: "40px", width: "40px" }} />
                                }
                                title={
                                    <Typography variant="body2" noWrap
                                        sx={{
                                            fontFamily: "Genshin, monospace",
                                            color: "white",
                                            textDecoration: "none",
                                        }}
                                    >
                                        BANNERS
                                    </Typography>
                                }
                            />
                        </ButtonBase>
                        <ButtonBase
                            disableRipple
                            href={`/project-irminsul/tcg`}
                        >
                            <CardHeader
                                avatar={
                                    <Avatar src={(`${process.env.REACT_APP_URL}/icons/tcg.png`)} alt="TCG" sx={{ height: "40px", width: "40px" }} />
                                }
                                title={
                                    <Typography variant="body2" noWrap
                                        sx={{
                                            fontFamily: "Genshin, monospace",
                                            color: "white",
                                            textDecoration: "none",
                                        }}
                                    >
                                        TCG
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