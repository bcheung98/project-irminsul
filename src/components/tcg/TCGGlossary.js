import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { styled } from '@mui/material/styles';
import { Box } from "@mui/system";
import { Typography, Avatar } from "@mui/material";

const GenshinFont = styled(Typography)(({ theme }) => ({
    "&.MuiTypography-root": {
        fontFamily: "Genshin, sans-serif",
        color: `${theme.text.color}`,
    }
}));

const MainBoxStyle = {
    mb: "10px",
}

const DescriptionText = {
    color: "rgb(240, 240, 240)",
}

const ElementalIcon = {
    width: "32px",
    height: "32px",
}

const TCGGlossary = () => {

    const theme = useTheme();

    const Pyro = () => <Avatar src={`${process.env.REACT_APP_URL}/elements/Element_Pyro.png`} alt="Pyro" sx={ElementalIcon} />
    const Hydro = () => <Avatar src={`${process.env.REACT_APP_URL}/elements/Element_Hydro.png`} alt="Hydro" sx={ElementalIcon} />
    const Electro = () => <Avatar src={`${process.env.REACT_APP_URL}/elements/Element_Electro.png`} alt="Electro" sx={ElementalIcon} />
    const Cryo = () => <Avatar src={`${process.env.REACT_APP_URL}/elements/Element_Cryo.png`} alt="Cryo" sx={ElementalIcon} />
    const Anemo = () => <Avatar src={`${process.env.REACT_APP_URL}/elements/Element_Anemo.png`} alt="Anemo" sx={ElementalIcon} />
    const Geo = () => <Avatar src={`${process.env.REACT_APP_URL}/elements/Element_Geo.png`} alt="Geo" sx={ElementalIcon} />
    const Dendro = () => <Avatar src={`${process.env.REACT_APP_URL}/elements/Element_Dendro.png`} alt="Dendro" sx={ElementalIcon} />

    const Plus = () => <Typography sx={{ mx: "5px", mt: "5px", color: `${theme.text.color}` }}>+</Typography>
    const Slash = () => <Typography sx={{ mx: "2.5px", mt: "5px", color: `${theme.text.color}` }}>/</Typography>
    
    return (
        <Box
            sx={{
                width: "80vw",
                p: "15px",
                backgroundColor: `${theme.paper.backgroundColor}`,
                border: `2px solid ${theme.border.color}`,
                borderRadius: "5px",
            }}
        >
            <GenshinFont variant="h4">
                TCG Glossary
            </GenshinFont>

            < hr style={{ border: `0.5px solid ${theme.border.color}`, marginTop: "15px", marginBottom: "15px" }} />

            <GenshinFont variant="h5">
                Damage
            </GenshinFont>
            <br />
            <GenshinFont variant="h6">
                <Box sx={MainBoxStyle}>
                    Physical DMG
                    <Typography sx={DescriptionText} variant="body1">
                        Physical DMG will not apply any Elements, nor can it engage in Elemental Reactions.
                    </Typography>
                </Box>
                <Box sx={MainBoxStyle}>
                    Elemental DMG
                    <Typography sx={DescriptionText} variant="body1">
                        Applies the corresponding element (except for <b className="text-anemo">Anemo</b> and <b className="text-geo">Geo</b>), and can trigger certain reactions.
                    </Typography>
                </Box>
                <Box sx={MainBoxStyle}>
                    Piercing DMG
                    <Typography sx={DescriptionText} variant="body1">
                        Piercing DMG cannot be increased by any bonuses, but cannot be defended against using Shields or DMG Immunity either.
                    </Typography>
                </Box>
                <Box sx={MainBoxStyle}>
                    Shield
                    <Typography sx={DescriptionText} variant="body1">
                        This Shield will be consumed to protect the character who equips it from DMG.
                    </Typography>
                </Box>
            </GenshinFont>

            < hr style={{ border: `0.5px solid ${theme.border.color}`, marginTop: "15px", marginBottom: "15px" }} />

            <GenshinFont variant="h5">
                Elemental Reactions
            </GenshinFont>
            <br />
            <Box sx={MainBoxStyle}>
                <Box sx={{ display: "inline-flex" }}>
                    <GenshinFont variant="h6" sx={{ mr: "5px" }}>
                        Bloom
                    </GenshinFont>
                    <Dendro /><Plus /><Hydro />
                </Box>
                <Typography sx={DescriptionText}>
                    DMG +1 for this instance, creates a <b>Dendro Core</b> that grants +2 DMG to the next instance of Pyro/Electro DMG
                </Typography>
            </Box>

            <Box sx={MainBoxStyle}>
                <Box sx={{ display: "inline-flex" }}>
                    <GenshinFont variant="h6" sx={{ mr: "5px" }}>
                        Burning
                    </GenshinFont>
                    <Dendro /><Plus /><Pyro />
                </Box>
                <Typography sx={DescriptionText}>
                    DMG +1 for this instance, creates a <b>Burning Flame</b> that will deal 1 Pyro DMG at the end of the Round (Takes effect once, max 2 stacks)
                </Typography>
            </Box>

            <Box sx={MainBoxStyle}>
                <Box sx={{ display: "inline-flex" }}>
                    <GenshinFont variant="h6" sx={{ mr: "5px" }}>
                        Crystallize
                    </GenshinFont>
                    <Pyro /><Slash /><Hydro /><Slash /><Electro /><Slash /><Cryo /><Plus /><Geo />
                </Box>
                <Typography sx={DescriptionText}>
                    DMG +1 for this instance, your active character gains 1 Shield point (Can stack, max 2 points)
                </Typography>
            </Box>

            <Box sx={{ mb: "5px" }}>
                <Box sx={{ display: "inline-flex" }}>
                    <GenshinFont variant="h6" sx={{ mr: "5px" }}>
                        Electro-Charged
                    </GenshinFont>
                    <Electro /><Plus /><Hydro />
                </Box>
                <Typography sx={DescriptionText}>
                    DMG +1 for this instance, deal 1 Piercing DMG to all opposing characters except the target
                </Typography>
            </Box>

            <Box sx={MainBoxStyle}>
                <Box sx={{ display: "inline-flex" }}>
                    <GenshinFont variant="h6" sx={{ mr: "5px" }}>
                        Frozen
                    </GenshinFont>
                    <Cryo /><Plus /><Hydro />
                </Box>
                <Typography sx={DescriptionText}>
                    DMG +1 for this instance, the target is unable to perform any Actions this round (Can be removed in advance after the target receives Physical or Pyro DMG, in which case they will take +2 DMG)
                </Typography>
            </Box>

            <Box sx={MainBoxStyle}>
                <Box sx={{ display: "inline-flex" }}>
                    <GenshinFont variant="h6" sx={{ mr: "5px" }}>
                        Melt
                    </GenshinFont>
                    <Cryo /><Plus /><Pyro />
                </Box>
                <Typography sx={DescriptionText}>
                    DMG +2 for this instance
                </Typography>
            </Box>

            <Box sx={MainBoxStyle}>
                <Box sx={{ display: "inline-flex" }}>
                    <GenshinFont variant="h6" sx={{ mr: "5px" }}>
                        Overloaded
                    </GenshinFont>
                    <Electro /><Plus /><Pyro />
                </Box>
                <Typography sx={DescriptionText}>
                    DMG +2 for this instance, the target is forcibly switched to the next character
                </Typography>
            </Box>

            <Box sx={MainBoxStyle}>
                <Box sx={{ display: "inline-flex" }}>
                    <GenshinFont variant="h6" sx={{ mr: "5px" }}>
                        Quicken
                    </GenshinFont>
                    <Dendro /><Plus /><Electro />
                </Box>
                <Typography sx={DescriptionText}>
                    DMG +1 for this instance, creates a <b>Catalyzing Field</b> that grants +1 DMG to the next 2 instances of Dendro/Electro DMG
                </Typography>
            </Box>

            <Box sx={MainBoxStyle}>
                <Box sx={{ display: "inline-flex" }}>
                    <GenshinFont variant="h6" sx={{ mr: "5px" }}>
                        Superconduct
                    </GenshinFont>
                    <Cryo /><Plus /><Electro />
                </Box>
                <Typography sx={DescriptionText}>
                    DMG +1 for this instance, deal 1 Piercing DMG to all opposing characters except the target
                </Typography>
            </Box>

            <Box sx={MainBoxStyle}>
                <Box sx={{ display: "inline-flex" }}>
                    <GenshinFont variant="h6" sx={{ mr: "5px" }}>
                        Swirl
                    </GenshinFont>
                    <Pyro /><Slash /><Hydro /><Slash /><Electro /><Slash /><Cryo /><Plus /><Anemo />
                </Box>
                <Typography sx={DescriptionText}>
                    Deals 1 DMG of the involved non-Anemo Element to all opposing characters except the target
                </Typography>
            </Box>

            <Box sx={MainBoxStyle}>
                <Box sx={{ display: "inline-flex" }}>
                    <GenshinFont variant="h6" sx={{ mr: "5px" }}>
                        Vaporize
                    </GenshinFont>
                    <Hydro /><Plus /><Pyro />
                </Box>
                <Typography sx={DescriptionText}>
                    DMG +2 for this instance
                </Typography>
            </Box>

            < hr style={{ border: `0.5px solid ${theme.border.color}`, marginTop: "15px", marginBottom: "15px" }} />

            <GenshinFont variant="h5">
                General Terms
            </GenshinFont>
            <br />
            <GenshinFont variant="h6">
                <Box sx={MainBoxStyle}>
                    Combat Action
                    <Typography sx={DescriptionText} variant="body1">
                        You can continue with other actions after conducting 1 Fast Action.<br />
                        Only after conducting 1 Combat Action will the turn pass over to your opponent.
                    </Typography>
                </Box>
                <Box sx={MainBoxStyle}>
                    Fast Action
                    <Typography sx={DescriptionText} variant="body1">
                        After you finish 1 Combat Action, it will be your opponent's turn.<br />
                        <b>Playing a card from your Hand with this rule is also a Combat Action rather than a Fast Action.</b>
                    </Typography>
                </Box>
                <Box sx={MainBoxStyle}>
                    Usage(s)
                    <Typography sx={DescriptionText} variant="body1">
                        After this card's effect is triggered, 1 <b>Usage</b> of it will be consumed.<br />
                        This card will be discarded immediately once it has 0 <b>Usages</b> remaining.
                    </Typography>
                </Box>
                <Box sx={MainBoxStyle}>
                    Duration (Rounds)
                    <Typography sx={DescriptionText} variant="body1">
                        Each time you reach the end of a Round, <b>Duration (Rounds)</b> -1.<br />
                        This card will be discarded immediately once <b>Duration (Rounds)</b> runs out.
                    </Typography>
                </Box>
                <Box sx={MainBoxStyle}>
                    Prepare Skill
                    <Typography sx={DescriptionText} variant="body1">
                        Some Skills cannot be used directly. Instead they need to be <b>prepared</b> over a certain number of turns.<br />
                        When it is a certain player's turn, and this player's active character is currently <b>preparing</b> a Skill, this player's turn will be skipped. If the Skill has finished being <b>prepared</b>, the character will directly use that Skill at this time. (Skills that require <b>preparing</b> cannot activate effects triggered by "using a Skill")<br />
                        Only active characters can <b>prepare</b> Skills, and if an active character who is <b>preparing</b> a Skill gets switched off-field, their <b>preparation</b> will be interrupted.
                    </Typography>
                </Box>
            </GenshinFont>

        </Box >
    )

}

export default TCGGlossary;