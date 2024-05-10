import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { AppBar, Box, Toolbar, Typography, Container, ButtonBase, Avatar, CardHeader } from "@mui/material";
import { CustomTooltipLarge } from "../helpers/CustomTooltip";

const Nav = () => {

    const theme = useTheme();

    const iconMarginRight = 25;

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
                            sx={{ px: 0 }}
                        />
                    </ButtonBase>
                    <Box sx={{ ml: "50px", display: "flex" }}>
                        <Box sx={{ mr: `${iconMarginRight}px` }}>
                            <ButtonBase disableRipple href={`/project-irminsul/characters`}>
                                <CustomTooltipLarge title="Characters" arrow placement="top">
                                    <Avatar src={(`${process.env.REACT_APP_URL}/icons/Aether.png`)} alt="CHARACTERS" sx={{ height: "40px", width: "40px", mt: "2.5px" }} />
                                </CustomTooltipLarge>
                            </ButtonBase>
                        </Box>
                        <Box sx={{ mr: `${iconMarginRight - 7}px` }}>
                            <ButtonBase disableRipple href={`/project-irminsul/weapons`}>
                                <CustomTooltipLarge title="Weapons" arrow placement="top">
                                    <Avatar src={(`${process.env.REACT_APP_URL}/icons/Weapons.png`)} alt="WEAPONS" sx={{ height: "48px", width: "48px" }} />
                                </CustomTooltipLarge>
                            </ButtonBase>
                        </Box>
                        <Box sx={{ mr: `${iconMarginRight}px` }}>
                            <ButtonBase disableRipple href={`/project-irminsul/artifacts`}>
                                <CustomTooltipLarge title="Artifacts" arrow placement="top">
                                    <Avatar src={(`${process.env.REACT_APP_URL}/icons/Artifact.png`)} alt="ARTIFACTS" sx={{ height: "48px", width: "48px" }} />
                                </CustomTooltipLarge>
                            </ButtonBase>
                        </Box>
                        <Box sx={{ mr: `${iconMarginRight + 5}px` }}>
                            <ButtonBase disableRipple href={`/project-irminsul/planner`}>
                                <CustomTooltipLarge title="Ascension Planner" arrow placement="top">
                                    <Avatar src={(`${process.env.REACT_APP_URL}/icons/Ascension.png`)} alt="ASCENSION" sx={{ height: "40px", width: "40px", mt: "5px" }} />
                                </CustomTooltipLarge>
                            </ButtonBase>
                        </Box>
                        <Box sx={{ mr: `${iconMarginRight}px` }}>
                            <ButtonBase disableRipple href={`/project-irminsul/banners`}>
                                <CustomTooltipLarge title="Banners" arrow placement="top">
                                    <Avatar src={(`${process.env.REACT_APP_URL}/icons/Wish.png`)} alt="BANNERS" sx={{ height: "40px", width: "40px", mt: "2.5px" }} />
                                </CustomTooltipLarge>
                            </ButtonBase>
                        </Box>
                        <Box sx={{ mr: `${iconMarginRight}px` }}>
                            <ButtonBase disableRipple href={`/project-irminsul/tcg`}>
                                <CustomTooltipLarge title="TCG" arrow placement="top">
                                    <Avatar src={(`${process.env.REACT_APP_URL}/icons/tcg.png`)} alt="TCG" sx={{ height: "40px", width: "40px", mt: "2.5px" }} />
                                </CustomTooltipLarge>
                            </ButtonBase>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );

}

export default Nav;