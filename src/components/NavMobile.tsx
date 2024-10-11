import React from "react"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { AppBar, Toolbar, Typography, Container, ButtonBase, Avatar, IconButton, SwipeableDrawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, CardHeader, Box } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"

// Helper imports
import { CustomTooltip } from "./_custom/CustomTooltip"

// Type imports
import { NavItem } from "./Nav"

function NavMobile(props: { navItems: NavItem[], linkItems: NavItem[] }) {

    const theme = useTheme()

    const [drawerOpen, setDrawerOpen] = React.useState(false)
    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === "keydown" &&
                    ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
                ) {
                    return
                }
                setDrawerOpen(open)
            }

    return (
        <AppBar position="fixed"
            sx={{
                backgroundColor: `${theme.appbar.backgroundColor}`,
                borderBottom: `1px solid ${theme.border.colorAlt}`
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <IconButton
                        size="large"
                        color="inherit"
                        onClick={toggleDrawer(true)}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <SwipeableDrawer
                        anchor="top"
                        open={drawerOpen}
                        onClose={toggleDrawer(false)}
                        onOpen={toggleDrawer(true)}
                        sx={{ [`& .MuiDrawer-paper`]: { backgroundColor: `${theme.appbar.backgroundColor}`, mt: -1, height: "100%" } }}
                    >
                        <Box>
                            <List>
                                <ListItem disablePadding sx={{ display: "block", ml: "15px" }}>
                                    <IconButton
                                        size="large"
                                        onClick={toggleDrawer(false)}
                                        sx={{ mr: 2, color: `white` }}
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                    <CustomTooltip title="Irminsul.GG Portal" arrow placement="right" enterDelay={250}>
                                        <ButtonBase disableRipple href="https://irminsul.gg/">
                                            <CardHeader
                                                avatar={
                                                    <Avatar
                                                        variant="square"
                                                        src="https://assets.irminsul.gg/main/icons/Irminsul.png"
                                                        alt="irminsul.gg"
                                                        sx={{
                                                            height: "48px",
                                                            width: "48px"
                                                        }}
                                                    />
                                                }
                                                title={
                                                    <Typography
                                                        sx={{
                                                            fontFamily: "Rowdies, Genshin, Roboto",
                                                            fontSize: "16pt",
                                                            letterSpacing: ".1rem",
                                                            color: `white`
                                                        }}
                                                    >
                                                        IRMINSUL.GG
                                                    </Typography>
                                                }
                                                sx={{ px: 0 }}
                                            />
                                        </ButtonBase>
                                    </CustomTooltip>
                                </ListItem>
                                <Divider sx={{ mb: "5px" }} />
                                {
                                    props.navItems.map((item, index) => (
                                        <ListItem
                                            key={index}
                                            disablePadding
                                            sx={{ display: "block", ml: "8px" }}
                                        >
                                            <ButtonBase href={item.link}>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        {item.icon}
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={item.text}
                                                        primaryTypographyProps={{ color: `${theme.text.color}`, fontFamily: `${theme.font.genshin.family}`, fontSize: "10pt" }}
                                                    />
                                                </ListItemButton>
                                            </ButtonBase>
                                        </ListItem>
                                    ))
                                }
                            </List>
                            <Divider />
                            <List>
                                <ListItem
                                    sx={{ display: "block", ml: "7px" }}
                                >
                                    <ListItemText
                                        primary="Other Games"
                                        primaryTypographyProps={{ color: `${theme.text.color}`, fontFamily: `${theme.font.genshin.family}`, fontSize: "10pt" }}
                                    />
                                </ListItem>
                                {
                                    props.linkItems.map((item, index) => (
                                        <ListItem
                                            key={index}
                                            disablePadding
                                            sx={{ display: "block", ml: "8px" }}
                                        >
                                            <ButtonBase href={item.link}>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        {item.icon}
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={item.text}
                                                        primaryTypographyProps={{ color: `${theme.text.color}`, fontFamily: `${theme.font.genshin.family}`, fontSize: "10pt" }}
                                                    />
                                                </ListItemButton>
                                            </ButtonBase>
                                        </ListItem>
                                    ))
                                }
                            </List>
                        </Box>
                    </SwipeableDrawer>
                    <CustomTooltip title="Irminsul.GG Portal" arrow placement="right" enterDelay={250}>
                        <ButtonBase disableRipple href="https://irminsul.gg/">
                            <CardHeader
                                avatar={
                                    <Avatar
                                        variant="square"
                                        src="https://assets.irminsul.gg/main/icons/Irminsul.png"
                                        alt="irminsul.gg"
                                        sx={{
                                            height: "48px",
                                            width: "48px"
                                        }}
                                    />
                                }
                                title={
                                    <Typography
                                        sx={{
                                            fontFamily: "Rowdies, Genshin, Roboto",
                                            fontSize: "16pt",
                                            letterSpacing: ".1rem",
                                            color: `white`
                                        }}
                                    >
                                        IRMINSUL.GG
                                    </Typography>
                                }
                                sx={{ px: 0 }}
                            />
                        </ButtonBase>
                    </CustomTooltip>
                </Toolbar>
            </Container>
        </AppBar>
    )

}

export default NavMobile