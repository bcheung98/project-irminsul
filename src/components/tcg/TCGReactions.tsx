// MUI imports
import { useTheme } from "@mui/material/styles"
import { Box, Avatar, Typography } from "@mui/material"

// Helper imports
import { TCGPyro, TCGHydro, TCGElectro, TCGCryo, TCGAnemo, TCGGeo, TCGDendro } from "../../helpers/ElementIcons"

const MainBoxStyle = {
    mb: "10px",
}

export function Bloom(props: any) {
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
            {
                !props.application ?
                    <Typography sx={DescriptionText}>
                        DMG +1 for this instance, creates a [<b style={{ color: "white" }}>Dendro Core</b>] that grants +2 DMG to the next instance of Pyro/Electro DMG
                    </Typography>
                    :
                    <Typography sx={DescriptionText}>
                        Creates a [<b style={{ color: "white" }}>Dendro Core</b>] that grants +2 DMG to the next instance of Pyro/Electro DMG
                    </Typography>
            }
        </Box>
    )
}

export function Burning(props: any) {
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
            {
                !props.application ?
                    <Typography sx={DescriptionText}>
                        DMG +1 for this instance, creates a [<b style={{ color: "white" }}>Burning Flame</b>] that will deal 1 Pyro DMG at the end of the Round (Takes effect once, max 2 stacks)
                    </Typography>
                    :
                    <Typography sx={DescriptionText}>
                        Creates a [<b style={{ color: "white" }}>Burning Flame</b>] that will deal 1 Pyro DMG at the end of the Round (Takes effect once, max 2 stacks)
                    </Typography>
            }
        </Box>
    )
}

export function Crystallize(props: any) {
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

export function Electrocharged(props: any) {
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
            {
                !props.application ?
                    <Typography sx={DescriptionText}>
                        DMG +1 for this instance, deal 1 Piercing DMG to all opposing characters except the target
                    </Typography>
                    :
                    <Typography sx={DescriptionText}>
                        No effect
                    </Typography>
            }
        </Box>
    )
}

export function Frozen(props: any) {
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
            {
                !props.application ?
                    <Typography sx={DescriptionText}>
                        DMG +1 for this instance, the target is unable to perform any Actions this round (Can be removed in advance after the target receives Physical or Pyro DMG, in which case they will take +2 DMG)
                    </Typography>
                    :
                    <Typography sx={DescriptionText}>
                        The target is unable to perform any Actions this Round (Can be removed in advance after the target receives Physical or Pyro DMG, in which case they will take +2 DMG)
                    </Typography>
            }
        </Box>
    )
}

export function Melt(props: any) {
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
            {
                !props.application ?
                    <Typography sx={DescriptionText}>
                        DMG +2 for this instance
                    </Typography>
                    :
                    <Typography sx={DescriptionText}>
                        No effect
                    </Typography>
            }
        </Box>
    )
}

export function Overloaded(props: any) {
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
            {
                !props.application ?
                    <Typography sx={DescriptionText}>
                        DMG +2 for this instance, the target is forcibly switched to the next character
                    </Typography>
                    :
                    <Typography sx={DescriptionText}>
                        The target is forcibly switched to the next character
                    </Typography>
            }
        </Box>
    )
}

export function Quicken(props: any) {
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
            {
                !props.application ?
                    <Typography sx={DescriptionText}>
                        DMG +1 for this instance, creates a [<b style={{ color: "white" }}>Catalyzing Field</b>] that grants +1 DMG to the next 2 instances of Dendro or Electro DMG
                    </Typography>
                    :
                    <Typography sx={DescriptionText}>
                        Creates a [<b style={{ color: "white" }}>Catalyzing Field</b>] that grants +1 DMG to the next 2 instances of Dendro or Electro DMG
                    </Typography>
            }
        </Box>
    )
}

export function Superconduct(props: any) {
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
            {
                !props.application ?
                    <Typography sx={DescriptionText}>
                        DMG +1 for this instance, deal 1 Piercing DMG to all opposing characters except the target
                    </Typography>
                    :
                    <Typography sx={DescriptionText}>
                        No effect
                    </Typography>
            }
        </Box>
    )
}

export function Swirl(props: any) {
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

export function Vaporize(props: any) {
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
            {
                !props.application ?
                    <Typography sx={DescriptionText}>
                        DMG +2 for this instance
                    </Typography>
                    :
                    <Typography sx={DescriptionText}>
                        No effect
                    </Typography>
            }
        </Box>
    )
}

const TitleText = () => {
    const theme = useTheme()
    return { fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}`, ml: "5px" }
}

const DescriptionText = () => {
    const theme = useTheme()
    return { color: `${theme.text.colorAlt}` }
}

const Plus = () => {
    const theme = useTheme()
    return <Typography sx={{ mx: "5px", mt: "5px", color: `${theme.text.color}` }}>+</Typography>
}