import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Avatar, Typography } from "@mui/material";
import { TCGPyro, TCGHydro, TCGElectro, TCGCryo, TCGAnemo, TCGGeo, TCGDendro } from "../../helpers/ElementIcons";

const MainBoxStyle = {
    mb: "10px",
}

const TitleText = () => {
    const theme = useTheme();
    return { fontFamily: "Genshin, sans-serif", color: `${theme.text.colorAlt}`, ml: "5px" }
}

const DescriptionText = () => {
    const theme = useTheme();
    return { color: `${theme.text.colorAlt}`, }
}

const Plus = () => {
    const theme = useTheme();
    return <Typography sx={{ mx: "5px", mt: "5px", color: `${theme.text.color}` }}>+</Typography>
}

export const Bloom = (props) => {
    return (
        <Box sx={MainBoxStyle} >
            <Box sx={{ display: "inline-flex" }}>
                {
                    props.element === "Hydro" ? <><TCGHydro /><Plus /><TCGDendro /></> : <><TCGDendro /><Plus /><TCGHydro /></>
                }
                <Typography variant="h6" sx={TitleText}>
                    Bloom
                </Typography>
            </Box>
            <Typography sx={DescriptionText}>
                DMG +1 for this instance, creates a [<b style={{ color: "white" }}>Dendro Core</b>] that grants +2 DMG to the next instance of Pyro/Electro DMG
            </Typography>
        </Box>
    )
}

export const Burning = (props) => {
    return (
        <Box sx={MainBoxStyle}>
            <Box sx={{ display: "inline-flex" }}>
                {
                    props.element === "Pyro" ? <><TCGPyro /><Plus /><TCGDendro /></> : <><TCGDendro /><Plus /><TCGPyro /></>
                }
                <Typography variant="h6" sx={TitleText}>
                    Burning
                </Typography>
            </Box>
            <Typography sx={DescriptionText}>
                DMG +1 for this instance, creates a [<b style={{ color: "white" }}>Burning Flame</b>] that will deal 1 Pyro DMG at the end of the Round (Takes effect once, max 2 stacks)
            </Typography>
        </Box>
    )
}

export const Crystallize = (props) => {
    return (
        <Box sx={MainBoxStyle}>
            <Box sx={{ display: "inline-flex" }}>
                <TCGGeo /><Plus /><Avatar src={`${process.env.REACT_APP_URL}/tcg/icons/elements/${props.element}.png`} alt={`${props.element}`} sx={{ width: "32px", height: "32px" }} />
                <Typography variant="h6" sx={TitleText}>
                    {props.element} Crystallize
                </Typography>
            </Box>
            <Typography sx={DescriptionText}>
                DMG +1 for this instance, your active character gains 1 Shield point (Can stack, max 2 points)
            </Typography>
        </Box>
    )
}

export const Electrocharged = (props) => {
    return (
        <Box sx={{ mb: "5px" }}>
            <Box sx={{ display: "inline-flex" }}>
                {
                    props.element === "Electro" ? <><TCGElectro /><Plus /><TCGHydro /></> : <><TCGHydro /><Plus /><TCGElectro /></>
                }
                <Typography variant="h6" sx={TitleText}>
                    Electro-Charged
                </Typography>
            </Box>
            <Typography sx={DescriptionText}>
                DMG +1 for this instance, deal 1 Piercing DMG to all opposing characters except the target
            </Typography>
        </Box>
    )
}

export const Frozen = (props) => {
    return (
        <Box sx={MainBoxStyle}>
            <Box sx={{ display: "inline-flex" }}>
                {
                    props.element === "Cryo" ? <><TCGCryo /><Plus /><TCGHydro /></> : <><TCGHydro /><Plus /><TCGCryo /></>
                }
                <Typography variant="h6" sx={TitleText}>
                    Frozen
                </Typography>
            </Box>
            <Typography sx={DescriptionText}>
                DMG +1 for this instance, the target is unable to perform any Actions this round (Can be removed in advance after the target receives Physical or Pyro DMG, in which case they will take +2 DMG)
            </Typography>
        </Box>
    )
}

export const Melt = (props) => {
    return (
        <Box sx={MainBoxStyle}>
            <Box sx={{ display: "inline-flex" }}>
                {
                    props.element === "Pyro" ? <><TCGPyro /><Plus /><TCGCryo /></> : <><TCGCryo /><Plus /><TCGPyro /></>
                }
                <Typography variant="h6" sx={TitleText}>
                    Melt
                </Typography>
            </Box>
            <Typography sx={DescriptionText}>
                DMG +2 for this instance
            </Typography>
        </Box>
    )
}

export const Overloaded = (props) => {
    return (
        <Box sx={MainBoxStyle}>
            <Box sx={{ display: "inline-flex" }}>
                {
                    props.element === "Electro" ? <><TCGElectro /><Plus /><TCGPyro /></> : <><TCGPyro /><Plus /><TCGElectro /></>
                }
                <Typography variant="h6" sx={TitleText}>
                    Overloaded
                </Typography>
            </Box>
            <Typography sx={DescriptionText}>
                DMG +2 for this instance, the target is forcibly switched to the next character
            </Typography>
        </Box>
    )
}

export const Quicken = (props) => {
    return (
        <Box sx={MainBoxStyle}>
            <Box sx={{ display: "inline-flex" }}>
                {
                    props.element === "Dendro" ? <><TCGDendro /><Plus /><TCGElectro /></> : <><TCGElectro /><Plus /><TCGDendro /></>
                }
                <Typography variant="h6" sx={TitleText}>
                    Quicken
                </Typography>
            </Box>
            <Typography sx={DescriptionText}>
                DMG +1 for this instance, creates a [<b style={{ color: "white" }}>Catalyzing Field</b>] that grants +1 DMG to the next 2 instances of Dendro/Electro DMG
            </Typography>
        </Box>
    )
}

export const Superconduct = (props) => {
    return (
        <Box sx={MainBoxStyle}>
            <Box sx={{ display: "inline-flex" }}>
                {
                    props.element === "Cryo" ? <><TCGCryo /><Plus /><TCGElectro /></> : <><TCGElectro /><Plus /><TCGCryo /></>
                }
                <Typography variant="h6" sx={TitleText}>
                    Superconduct
                </Typography>
            </Box>
            <Typography sx={DescriptionText}>
                DMG +1 for this instance, deal 1 Piercing DMG to all opposing characters except the target
            </Typography>
        </Box>
    )
}

export const Swirl = (props) => {
    return (
        <Box sx={MainBoxStyle}>
            <Box sx={{ display: "inline-flex" }}>
                <TCGAnemo /><Plus /><Avatar src={`${process.env.REACT_APP_URL}/tcg/icons/elements/${props.element}.png`} alt={`${props.element}`} sx={{ width: "32px", height: "32px" }} />
                <Typography variant="h6" sx={TitleText}>
                    {`${props.element} Swirl`}
                </Typography>
            </Box>
            <Typography sx={DescriptionText}>
                Deals 1 <b className={`text-${props.element.toLowerCase()}`}>{props.element} DMG</b> to all opposing characters except the target
            </Typography>
        </Box>
    )
}

export const Vaporize = (props) => {
    return (
        <Box sx={MainBoxStyle}>
            <Box sx={{ display: "inline-flex" }}>
                {
                    props.element === "Hydro" ? <><TCGHydro /><Plus /><TCGPyro /></> : <><TCGPyro /><Plus /><TCGHydro /></>
                }
                <Typography variant="h6" sx={TitleText}>
                    Vaporize
                </Typography>
            </Box>
            <Typography sx={DescriptionText}>
                DMG +2 for this instance
            </Typography>
        </Box>
    )
}