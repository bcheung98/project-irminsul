import React from "react"

// MUI imports
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles"
import { Box, Toolbar, Typography, CardHeader, Avatar, ButtonBase, IconButton, List, ListItem, ListItemButton, ListItemAvatar, ListItemText } from "@mui/material"
import MuiDrawer from "@mui/material/Drawer"
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar"
import MenuIcon from "@mui/icons-material/Menu"

// Helper imports
import { CustomTooltip } from "../helpers/CustomTooltip"

function Nav() {

    const theme = useTheme()

    const [open, setOpen] = React.useState(false)
    const toggleDrawerState = () => {
        setOpen(!open)
    }

    return (
        <React.Fragment>
            <AppBar position="fixed"
                sx={{
                    backgroundColor: `${theme.appbar.backgroundColor}`,
                    borderBottom: `1px solid ${theme.border.color}`
                }}
            >
                <Toolbar>
                    <Box sx={{ display: "flex", flexGrow: 0.95 }}>
                        <IconButton
                            color="inherit"
                            onClick={toggleDrawerState}
                            edge="start"
                            sx={{ mr: "25px", ml: "-8px" }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <ButtonBase
                            disableRipple
                            href={`/project-irminsul/`}
                        >
                            <CardHeader
                                avatar={
                                    <Avatar src={(`${process.env.REACT_APP_URL}/icons/Sumeru.png`)} alt="PROJECT IRMINSUL" sx={{ height: "48px", width: "48px" }} />
                                }
                                title={
                                    <Typography variant="h6"
                                        sx={{
                                            fontFamily: "Genshin, monospace",
                                            letterSpacing: ".3rem",
                                            color: `${theme.text.color}`,
                                        }}
                                    >
                                        PROJECT IRMINSUL
                                    </Typography>
                                }
                                sx={{ px: 0 }}
                            />
                        </ButtonBase>
                    </Box>
                    {/* <Box>
                        <ButtonBase disableRipple href="https://bcheung98.github.io/project-stellaron/" target="_blank">
                            <CustomTooltip title="Project Stellaron" arrow placement="bottom">
                                <Avatar src="https://raw.githubusercontent.com/bcheung98/project-stellaron-assets/main/assets/elements/Element_Imaginary.png" alt="PROJECT STELLARON" sx={{ height: "32px", width: "32px", mr: "20px" }} />
                            </CustomTooltip>
                        </ButtonBase>
                        <ButtonBase disableRipple href="https://bcheung98.github.io/project-tacetite/" target="_blank">
                            <CustomTooltip title="Project Tacetite" arrow placement="bottom">
                                <Avatar src="https://raw.githubusercontent.com/bcheung98/project-tacetite-assets/main/elements/ui/Spectro.png" alt="PROJECT TACETITE" sx={{ height: "48px", width: "48px" }} />
                            </CustomTooltip>
                        </ButtonBase>
                    </Box> */}
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                open={open}
                sx={{ [`& .MuiDrawer-paper`]: { borderRight: `1px solid ${theme.border.color}`, backgroundColor: `${theme.appbar.backgroundColor}`, pt: 2.5 } }}
            >
                {/* Empty toolbar necessary for content to be below app bar */}
                <Toolbar />
                <Box>
                    <List>
                        {
                            listItems.map((item, index) => (
                                <ListItem disablePadding key={index} sx={{ display: "block" }}>
                                    <ButtonBase disableRipple href={item.link}>
                                        <ListItemButton
                                            disableTouchRipple
                                            sx={[
                                                { minHeight: 48, px: 2.5, width: drawerWidth },
                                                open ?
                                                    { justifyContent: "initial" }
                                                    :
                                                    { justifyContent: "center" }
                                            ]}
                                        >
                                            <CustomTooltip title={!open ? item.label : null} arrow placement="right">
                                                <ListItemAvatar
                                                    sx={[
                                                        { minWidth: 0, justifyContent: "center" },
                                                        open ?
                                                            { mr: 3 }
                                                            :
                                                            { mr: "auto" },
                                                    ]}
                                                >
                                                    {item.primaryIcon}
                                                </ListItemAvatar>
                                            </CustomTooltip>
                                            <ListItemText
                                                primary={
                                                    <Typography variant="subtitle2" sx={{ color: `${theme.text.color}`, fontFamily: "Genshin, monospace" }}>
                                                        {item.label}
                                                    </Typography>
                                                }
                                                sx={[
                                                    open ?
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
                </Box>
            </Drawer>
        </React.Fragment >
    )

}

export default Nav

const drawerWidth = 240

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
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
})

interface AppBarProps extends MuiAppBarProps {
    open?: boolean
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
        {
            props: ({ open }) => open,
            style: {
                marginLeft: drawerWidth,
                width: `calc(100% - ${drawerWidth}px)`,
                transition: theme.transitions.create(["width", "margin"], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },
        },
    ],
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

const iconSize = "32px"
const listItems = [
    {
        primaryIcon: <Avatar src={(`${process.env.REACT_APP_URL}/icons/Sumeru.png`)} alt="HOME" sx={{ width: iconSize, height: iconSize }} />,
        label: "Home",
        link: "/project-irminsul/"
    },
    {
        primaryIcon: <Avatar src={(`${process.env.REACT_APP_URL}/icons/Aether.png`)} alt="CHARACTERS" sx={{ width: iconSize, height: iconSize }} />,
        label: "Characters",
        link: "/project-irminsul/characters/"
    },
    {
        primaryIcon: <Avatar src={(`${process.env.REACT_APP_URL}/icons/Weapons.png`)} alt="WEAPONS" sx={{ width: iconSize, height: iconSize }} />,
        label: "Weapons",
        link: "/project-irminsul/weapons/"
    },
    {
        primaryIcon: <Avatar src={(`${process.env.REACT_APP_URL}/icons/Artifact.png`)} alt="ARTIFACTS" sx={{ width: iconSize, height: iconSize }} />,
        label: "Artifacts",
        link: "/project-irminsul/artifacts/"
    },
    {
        primaryIcon: <Avatar src={(`${process.env.REACT_APP_URL}/icons/Ascension.png`)} alt="ASCENSION" sx={{ width: iconSize, height: iconSize }} />,
        label: "Ascension Planner",
        link: "/project-irminsul/planner/"
    },
    {
        primaryIcon: <Avatar src={(`${process.env.REACT_APP_URL}/icons/Wish.png`)} alt="BANNERS" sx={{ width: iconSize, height: iconSize }} />,
        label: "Banner Archive",
        link: "/project-irminsul/banners/"
    },
    {
        primaryIcon: <Avatar src={(`${process.env.REACT_APP_URL}/icons/tcg.png`)} alt="TCG" sx={{ width: iconSize, height: iconSize }} />,
        label: "TCG",
        link: "/project-irminsul/tcg/"
    },
]