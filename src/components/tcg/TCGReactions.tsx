// MUI imports
import { useTheme } from "@mui/material/styles"
import { Box, Avatar, Typography, SxProps } from "@mui/material"

// Helper imports
import { TCGPyro, TCGHydro, TCGElectro, TCGCryo, TCGAnemo, TCGGeo, TCGDendro } from "../_custom/ElementIcons"

const MainBoxStyle = {
    mb: "10px",
}

const headerStyle: SxProps = {
    display: "flex",
    alignItems: "center",
    my: "10px"
}

export function Bloom(props: any) {
    return (
        <Box sx={MainBoxStyle}>
            <Box sx={headerStyle}>
                {props.element === "Hydro" ? <><TCGHydro /><Plus /><TCGDendro /></> : <><TCGDendro /><Plus /><TCGHydro /></>}
                <Typography sx={TitleText}>
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
            <Box sx={headerStyle}>
                {
                    props.element === "Pyro" ? <><TCGPyro /><Plus /><TCGDendro /></> : <><TCGDendro /><Plus /><TCGPyro /></>
                }
                <Typography sx={TitleText}>
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
            <Box sx={headerStyle}>
                <TCGGeo /><Plus /><Avatar src={`${process.env.REACT_APP_URL}/tcg/icons/elements/${props.element}.png`} alt={`${props.element}`} sx={{ width: "32px", height: "32px" }} />
                <Typography sx={TitleText}>
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
            <Box sx={headerStyle}>
                {
                    props.element === "Electro" ? <><TCGElectro /><Plus /><TCGHydro /></> : <><TCGHydro /><Plus /><TCGElectro /></>
                }
                <Typography sx={TitleText}>
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
            <Box sx={headerStyle}>
                {
                    props.element === "Cryo" ? <><TCGCryo /><Plus /><TCGHydro /></> : <><TCGHydro /><Plus /><TCGCryo /></>
                }
                <Typography sx={TitleText}>
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
            <Box sx={headerStyle}>
                {
                    props.element === "Pyro" ? <><TCGPyro /><Plus /><TCGCryo /></> : <><TCGCryo /><Plus /><TCGPyro /></>
                }
                <Typography sx={TitleText}>
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
            <Box sx={headerStyle}>
                {
                    props.element === "Electro" ? <><TCGElectro /><Plus /><TCGPyro /></> : <><TCGPyro /><Plus /><TCGElectro /></>
                }
                <Typography sx={TitleText}>
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
            <Box sx={headerStyle}>
                {
                    props.element === "Dendro" ? <><TCGDendro /><Plus /><TCGElectro /></> : <><TCGElectro /><Plus /><TCGDendro /></>
                }
                <Typography sx={TitleText}>
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
            <Box sx={headerStyle}>
                {
                    props.element === "Cryo" ? <><TCGCryo /><Plus /><TCGElectro /></> : <><TCGElectro /><Plus /><TCGCryo /></>
                }
                <Typography sx={TitleText}>
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
            <Box sx={headerStyle}>
                <TCGAnemo /><Plus /><Avatar src={`${process.env.REACT_APP_URL}/tcg/icons/elements/${props.element}.png`} alt={`${props.element}`} sx={{ width: "32px", height: "32px" }} />
                <Typography sx={TitleText}>
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
            <Box sx={headerStyle}>
                {
                    props.element === "Hydro" ? <><TCGHydro /><Plus /><TCGPyro /></> : <><TCGPyro /><Plus /><TCGHydro /></>
                }
                <Typography sx={TitleText}>
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
    return {
        fontFamily: `${theme.font.genshin.family}`,
        fontSize: "20px",
        color: `${theme.text.color}`,
        ml: "5px"
    }
}

const DescriptionText = () => {
    const theme = useTheme()
    return { color: `${theme.text.colorAlt}` }
}

const Plus = () => {
    const theme = useTheme()
    return <Typography sx={{ mx: "5px", mt: "5px", color: `${theme.text.color}` }}>+</Typography>
}