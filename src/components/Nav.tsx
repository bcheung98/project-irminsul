import React from "react"

// Component imports
import NavDesktop from "./NavDesktop"
import NavMobile from "./NavMobile"

// MUI imports
import { useTheme, useMediaQuery, Avatar } from "@mui/material"

const iconSize = 32 //px

function Nav() {

    const theme = useTheme()

    const matches = useMediaQuery(theme.breakpoints.up("sm"))

    const onHomePage = window.location.pathname === "/"

    return (
        <React.Fragment>
            {
                matches ?
                    <NavDesktop onHomePage={onHomePage} navItems={navItems} linkItems={linkItems} />
                    :
                    <NavMobile onHomePage={onHomePage} navItems={navItems} linkItems={linkItems} />
            }
        </React.Fragment>
    )

}

export default Nav

export interface NavProps {
    onHomePage: boolean
    navItems: NavItem[]
    linkItems: NavItem[]
}

export interface NavItem {
    icon: JSX.Element,
    text: string,
    link: string
}

const navItems = [
    {
        icon: <Avatar src={(`${process.env.REACT_APP_URL}/icons/Sumeru.png`)} alt="Home" sx={{ width: `${iconSize}px`, height: `${iconSize}px` }} />,
        text: "Home",
        link: `${process.env.REACT_APP_BASENAME}/`
    },
    {
        icon: <Avatar src={(`${process.env.REACT_APP_URL}/icons/Aether.png`)} alt="Characters" sx={{ width: `${iconSize}px`, height: `${iconSize}px` }} />,
        text: "Characters",
        link: `${process.env.REACT_APP_BASENAME}/characters/`
    },
    {
        icon: <Avatar src={(`${process.env.REACT_APP_URL}/icons/Weapons.png`)} alt="Weapons" sx={{ width: `${iconSize}px`, height: `${iconSize}px` }} />,
        text: "Weapons",
        link: `${process.env.REACT_APP_BASENAME}/weapons/`
    },
    {
        icon: <Avatar src={(`${process.env.REACT_APP_URL}/icons/Artifact.png`)} alt="Artifacts" sx={{ width: `${iconSize}px`, height: `${iconSize}px` }} />,
        text: "Artifacts",
        link: `${process.env.REACT_APP_BASENAME}/artifacts/`
    },
    {
        icon: <Avatar src={(`${process.env.REACT_APP_URL}/icons/Ascension.png`)} alt="Ascension" sx={{ width: `${iconSize}px`, height: `${iconSize}px` }} />,
        text: "Ascension Planner",
        link: `${process.env.REACT_APP_BASENAME}/planner/`
    },
    {
        icon: <Avatar src={(`${process.env.REACT_APP_URL}/icons/Wish.png`)} alt="Banner Archive" sx={{ width: `${iconSize}px`, height: `${iconSize}px` }} />,
        text: "Banner Archive",
        link: `${process.env.REACT_APP_BASENAME}/banners/`
    },
    {
        icon: <Avatar src={(`${process.env.REACT_APP_URL}/icons/tcg.png`)} alt="TCG" sx={{ width: `${iconSize}px`, height: `${iconSize}px` }} />,
        text: "TCG",
        link: `${process.env.REACT_APP_BASENAME}/tcg/`
    },
]

const linkItems = [
    {
        icon: <Avatar variant="square" src="https://assets.irminsul.gg/main/game-icons/HSR.png" alt="hsr.irminsul.gg" sx={{ width: iconSize, height: iconSize, borderRadius: "5px" }} />,
        text: "Honkai: Star Rail",
        link: "https://hsr.irminsul.gg/"
    },
    {
        icon: <Avatar variant="square" src="https://assets.irminsul.gg/main/game-icons/WutheringWaves.png" alt="wuwa.irminsul.gg" sx={{ width: iconSize, height: iconSize, borderRadius: "5px" }} />,
        text: "Wuthering Waves",
        link: "https://wuwa.irminsul.gg/"
    }
]