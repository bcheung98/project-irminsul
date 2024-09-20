import React from "react"

// MUI imports
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles"
import { Avatar, CardHeader, Typography, ButtonBase, IconButton, List, ListItem, ListItemButton, ListItemAvatar, ListItemText, ListItemIcon, Divider, Collapse } from "@mui/material"
import MuiDrawer from "@mui/material/Drawer"
import MenuOpenIcon from "@mui/icons-material/MenuOpen"
import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"

// Helper imports
import { CustomTooltip } from "../helpers/CustomTooltip"

const drawerWidth = 280
const iconSize = "32px"

function Nav() {

    const theme = useTheme()

    let initialDrawerState = window.location.href.endsWith("/project-irminsul/") ? true : false
    const [drawerOpen, setDrawerOpen] = React.useState(initialDrawerState)
    const toggleDrawerState = () => {
        setDrawerOpen(!drawerOpen)
    }

    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const toggleDropdownState = () => {
        setDropdownOpen(!dropdownOpen)
    }

    return (
        <React.Fragment>
            <Drawer
                id="drawer"
                variant="permanent"
                open={drawerOpen}
                sx={{ [`& .MuiDrawer-paper`]: { borderRight: `1px solid ${theme.border.color}`, backgroundColor: `${theme.appbar.backgroundColor}` } }}
            >
                <DrawerHeader sx={{ height: "40px", py: "10px" }}>
                    <IconButton
                        onClick={toggleDrawerState}
                        sx={{ color: `${theme.text.color}`, ml: "5px", mr: "10px" }}
                    >
                        {
                            drawerOpen ?
                                <MenuOpenIcon />
                                :
                                <MenuOpenIcon sx={{ transform: "rotate(180deg)" }} />
                        }
                    </IconButton>
                    <ButtonBase
                        disableRipple
                        href={`/project-irminsul/`}
                    >
                        {
                            drawerOpen ?
                                <CardHeader
                                    avatar={
                                        <Avatar src={`${process.env.REACT_APP_URL}/icons/Sumeru.png`} alt="PROJECT IRMINSUL" sx={{ height: "40px", width: "40px" }} />
                                    }
                                    title={
                                        <Typography
                                            sx={{
                                                fontSize: "12pt",
                                                fontFamily: "Genshin, monospace",
                                                letterSpacing: ".2rem",
                                                color: `${theme.text.color}`,
                                            }}
                                        >
                                            PROJECT<br />IRMINSUL
                                        </Typography>
                                    }
                                    sx={{
                                        p: 1,
                                        borderRadius: "5px",
                                        "&:hover": {
                                            backgroundColor: `${theme.table.body.hover}`
                                        }
                                    }}
                                />
                                :
                                null
                        }
                    </ButtonBase>
                </DrawerHeader>
                <Divider variant="middle" />
                <List>
                    {
                        navItems.map((item, index) => (
                            <ListItem
                                key={index}
                                disablePadding
                                sx={{ mx: "13px" }}
                            >
                                <ButtonBase disableRipple href={item.link}>
                                    <ListItemButton
                                        disableTouchRipple
                                        sx={[
                                            {
                                                px: "4px",
                                                py: 0,
                                                borderRadius: "5px",
                                                "&:hover": {
                                                    backgroundColor: `${theme.table.body.hover}`
                                                }
                                            },
                                            drawerOpen ?
                                                {
                                                    width: drawerWidth * 0.8,
                                                    height: "50px",
                                                    my: 0,
                                                    justifyContent: "initial"
                                                }
                                                :
                                                {
                                                    width: "40px",
                                                    height: "40px",
                                                    my: "5px",
                                                    justifyContent: "center"
                                                }
                                        ]}
                                    >
                                        <CustomTooltip title={!drawerOpen ? item.primaryText : null} arrow placement="right">
                                            <ListItemAvatar
                                                sx={[
                                                    { minWidth: 0, justifyContent: "center" },
                                                    drawerOpen ?
                                                        { mr: 2.5 }
                                                        :
                                                        { mr: "auto" },
                                                ]}
                                            >
                                                {item.primaryIcon}
                                            </ListItemAvatar>
                                        </CustomTooltip>
                                        <ListItemText
                                            primary={item.primaryText}
                                            primaryTypographyProps={{ color: `${theme.text.color}`, fontFamily: "Genshin, monospace", fontSize: "11pt" }}
                                            sx={[
                                                drawerOpen ?
                                                    { opacity: 1 }
                                                    :
                                                    { opacity: 0 }
                                            ]}
                                        />
                                    </ListItemButton>
                                </ButtonBase>
                            </ListItem>
                        ))
                    }
                </List>
                <Divider variant="middle" />
                <List>
                    <ListItem
                        disablePadding
                        sx={{ mx: "17px" }}
                    >
                        <ButtonBase disableRipple onClick={toggleDropdownState}>
                            <ListItemButton
                                disableTouchRipple
                                sx={[
                                    {
                                        px: "4px",
                                        py: 0,
                                        borderRadius: "5px",
                                        "&:hover": {
                                            backgroundColor: `${theme.table.body.hover}`
                                        }
                                    },
                                    drawerOpen ?
                                        {
                                            width: drawerWidth * 0.8,
                                            height: "50px",
                                            my: 0,
                                            justifyContent: "initial"
                                        }
                                        :
                                        {
                                            width: "32px",
                                            height: "40px",
                                            my: "5px",
                                            justifyContent: "center"
                                        }
                                ]}
                            >
                                <CustomTooltip title={!drawerOpen ? "Other Games" : null} arrow placement="right">
                                    <ListItemIcon
                                        sx={[
                                            {
                                                minWidth: 0,
                                                justifyContent: "center",
                                                color: `${theme.text.color}`
                                            },
                                            drawerOpen ?
                                                { mr: 2.5 }
                                                :
                                                { mr: "auto" },
                                        ]}
                                    >
                                        {dropdownOpen ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemIcon>
                                </CustomTooltip>
                                <ListItemText
                                    primary="Other Games"
                                    primaryTypographyProps={{ color: `${theme.text.color}`, fontFamily: "Genshin, monospace", fontSize: "11pt" }}
                                    sx={[
                                        drawerOpen ?
                                            { opacity: 1 }
                                            :
                                            { opacity: 0 }
                                    ]}
                                />
                            </ListItemButton>
                        </ButtonBase>
                    </ListItem>
                    <ListItem
                        disablePadding
                        sx={{ mx: "13px" }}
                    >
                        <Collapse in={dropdownOpen} timeout="auto" unmountOnExit>
                            <List disablePadding>
                                {
                                    linkItems.map((item, index) => (
                                        <ListItem
                                            key={index}
                                            disablePadding
                                        >
                                            <ButtonBase disableRipple href={item.link}>
                                                <ListItemButton
                                                    disableTouchRipple
                                                    sx={[
                                                        {
                                                            px: "4px",
                                                            py: 0,
                                                            borderRadius: "5px",
                                                            "&:hover": {
                                                                backgroundColor: `${theme.table.body.hover}`
                                                            }
                                                        },
                                                        drawerOpen ?
                                                            {
                                                                width: drawerWidth * 0.8,
                                                                height: "50px",
                                                                my: 0,
                                                                justifyContent: "initial"
                                                            }
                                                            :
                                                            {
                                                                width: "40px",
                                                                height: "40px",
                                                                my: "5px",
                                                                justifyContent: "center"
                                                            }
                                                    ]}
                                                >
                                                    <CustomTooltip title={!drawerOpen ? item.primaryText : null} arrow placement="right">
                                                        <ListItemAvatar
                                                            sx={[
                                                                { minWidth: 0, justifyContent: "center" },
                                                                drawerOpen ?
                                                                    { mr: 2.5 }
                                                                    :
                                                                    { mr: "auto" },
                                                            ]}
                                                        >
                                                            {item.primaryIcon}
                                                        </ListItemAvatar>
                                                    </CustomTooltip>
                                                    <ListItemText
                                                        primary={item.primaryText}
                                                        primaryTypographyProps={{ color: `${theme.text.color}`, fontFamily: "Genshin, monospace", fontSize: "11pt" }}
                                                        secondary={item.secondaryText}
                                                        secondaryTypographyProps={{ color: `${theme.text.color}`, fontFamily: "Genshin, monospace", fontSize: "9pt" }}
                                                        sx={[
                                                            drawerOpen ?
                                                                { opacity: 1 }
                                                                :
                                                                { opacity: 0 }
                                                        ]}
                                                    />
                                                </ListItemButton>
                                            </ButtonBase>
                                        </ListItem>
                                    ))
                                }
                            </List>
                        </Collapse>
                    </ListItem>
                </List>
            </Drawer>
        </React.Fragment>
    )

}

export default Nav

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
})

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: "57px",
    [theme.breakpoints.up("sm")]: {
        width: "65px",
    },
})

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}))

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
        boxSizing: "border-box",
        variants: [
            {
                props: ({ open }) => open,
                style: {
                    ...openedMixin(theme),
                    "& .MuiDrawer-paper": openedMixin(theme),
                },
            },
            {
                props: ({ open }) => !open,
                style: {
                    ...closedMixin(theme),
                    "& .MuiDrawer-paper": closedMixin(theme),
                },
            },
        ],
    }),
)

const linkItems = [
    {
        primaryIcon: <Avatar variant="square" src="https://raw.githubusercontent.com/bcheung98/project-stellaron-assets/main/elements/Element_Imaginary.png" alt="Project Stellaron" sx={{ width: iconSize, height: iconSize }} />,
        primaryText: "Project Stellaron",
        secondaryText: "Honkai: Star Rail",
        link: "https://bcheung98.github.io/project-stellaron/"
    },
    {
        primaryIcon: <Avatar variant="square" src="https://raw.githubusercontent.com/bcheung98/project-tacetite-assets/main/icons/Black_Shores.png" alt="Project Tacetite" sx={{ width: iconSize, height: iconSize }} />,
        primaryText: "Project Tacetite",
        secondaryText: "Wuthering Waves",
        link: "https://bcheung98.github.io/project-tacetite/"
    }
]

const navItems = [
    {
        primaryIcon: <Avatar src={(`${process.env.REACT_APP_URL}/icons/Sumeru.png`)} alt="Home" sx={{ width: iconSize, height: iconSize }} />,
        primaryText: "Home",
        link: "/project-irminsul/"
    },
    {
        primaryIcon: <Avatar src={(`${process.env.REACT_APP_URL}/icons/Aether.png`)} alt="Characters" sx={{ width: iconSize, height: iconSize }} />,
        primaryText: "Characters",
        link: "/project-irminsul/characters/"
    },
    {
        primaryIcon: <Avatar src={(`${process.env.REACT_APP_URL}/icons/Weapons.png`)} alt="Weapons" sx={{ width: iconSize, height: iconSize }} />,
        primaryText: "Weapons",
        link: "/project-irminsul/weapons/"
    },
    {
        primaryIcon: <Avatar src={(`${process.env.REACT_APP_URL}/icons/Artifact.png`)} alt="Artifacts" sx={{ width: iconSize, height: iconSize }} />,
        primaryText: "Artifacts",
        link: "/project-irminsul/artifacts/"
    },
    {
        primaryIcon: <Avatar src={(`${process.env.REACT_APP_URL}/icons/Ascension.png`)} alt="Ascension" sx={{ width: iconSize, height: iconSize }} />,
        primaryText: "Ascension Planner",
        link: "/project-irminsul/planner/"
    },
    {
        primaryIcon: <Avatar src={(`${process.env.REACT_APP_URL}/icons/Wish.png`)} alt="Banner Archive" sx={{ width: iconSize, height: iconSize }} />,
        primaryText: "Banner Archive",
        link: "/project-irminsul/banners/"
    },
    {
        primaryIcon: <Avatar src={(`${process.env.REACT_APP_URL}/icons/tcg.png`)} alt="TCG" sx={{ width: iconSize, height: iconSize }} />,
        primaryText: "TCG",
        link: "/project-irminsul/tcg/"
    },
]