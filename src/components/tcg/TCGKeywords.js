import * as React from "react";
import { styled } from '@mui/material/styles';
import { Box } from "@mui/system";
import { Avatar, Typography } from "@mui/material";
import * as Reactions from "./TCGReactions";
import { TCGPhysical, TCGPyro, TCGHydro, TCGElectro, TCGCryo, TCGAnemo, TCGGeo, TCGDendro } from "../../helpers/ElementIcons";

const CustomBox = styled(Box)(() => ({
    "&.MuiBox-root": {
        display: "inlineFlex"
    }
}));

const CustomTypography = styled(Typography)(() => ({
    "&.MuiTypography-root": {
        marginBottom: "10px"
    }
}));

export const Keywords = {

    // ELEMENTS / DMG TYPES

    "physical": {
        "name":
            <CustomBox sx={{ display: "inline-flex" }}>
                <TCGPhysical />
                <Typography variant="h6" sx={{ fontFamily: "Genshin, sans-serif", ml: "7px", color: "white" }}>Physical DMG</Typography>
            </CustomBox>,
        "description":
            <CustomTypography>
                Physical DMG will not apply any Elements, nor can it engage in Elemental Reactions.
            </CustomTypography>
    },
    "piercing": {
        "name":
            <CustomBox sx={{ display: "inline-flex" }}>
                <Typography variant="h6" sx={{ fontFamily: "Genshin, sans-serif", color: "white" }}>Piercing DMG</Typography>
            </CustomBox>,
        "description":
            <CustomTypography>
                Piercing DMG cannot be increased by any bonuses, but cannot be defended against using Shields or DMG Immunity either.
            </CustomTypography>
    },
    "pyro": {
        "name":
            <CustomBox sx={{ display: "inline-flex" }}>
                <TCGPyro />
                <Typography className="text-pyro" variant="h6" sx={{ fontFamily: "Genshin, sans-serif", ml: "7px" }}>Pyro DMG</Typography>
            </CustomBox>,
        "description":
            <React.Fragment>
                <CustomTypography>
                    Applies <b className="text-pyro">Pyro</b> and can trigger the following Elemental Reactions:
                </CustomTypography>
                <Reactions.Melt element="Pyro" />
                <Reactions.Vaporize element="Pyro" />
                <Reactions.Overloaded element="Pyro" />
                <Reactions.Burning element="Pyro" />
            </React.Fragment>
    },
    "pyro application": {
        "name":
            <CustomBox sx={{ display: "inline-flex" }}>
                <TCGPyro />
                <Typography className="text-pyro" variant="h6" sx={{ fontFamily: "Genshin, sans-serif", ml: "7px" }}>Pyro Application</Typography>
            </CustomBox>,
        "description":
            <React.Fragment>
                <CustomTypography>
                    When <b className="text-pyro">Pyro</b> is applied without dealing any DMG, the Elemental Reaction triggered will ignore DMG-dealing effects:
                </CustomTypography>
                <Reactions.Melt element="Pyro" application />
                <Reactions.Vaporize element="Pyro" application />
                <Reactions.Overloaded element="Pyro" application />
                <Reactions.Burning element="Pyro" application />
            </React.Fragment>
    },
    "hydro": {
        "name":
            <CustomBox sx={{ display: "inline-flex" }}>
                <TCGHydro />
                <Typography className="text-hydro" variant="h6" sx={{ fontFamily: "Genshin, sans-serif", ml: "7px" }}>Hydro DMG</Typography>
            </CustomBox>,
        "description":
            <React.Fragment>
                <CustomTypography>
                    Applies <b className="text-hydro">Hydro</b> and can trigger the following Elemental Reactions:
                </CustomTypography>
                <Reactions.Vaporize element="Hydro" />
                <Reactions.Electrocharged element="Hydro" />
                <Reactions.Frozen element="Hydro" />
                <Reactions.Bloom element="Hydro" />
            </React.Fragment>
    },
    "hydro application": {
        "name":
            <CustomBox sx={{ display: "inline-flex" }}>
                <TCGHydro />
                <Typography className="text-hydro" variant="h6" sx={{ fontFamily: "Genshin, sans-serif", ml: "7px" }}>Hydro Application</Typography>
            </CustomBox>,
        "description":
            <React.Fragment>
                <CustomTypography>
                    When <b className="text-hydro">Hydro</b> is applied without dealing any DMG, the Elemental Reaction triggered will ignore DMG-dealing effects:
                </CustomTypography>
                <Reactions.Vaporize element="Hydro" application />
                <Reactions.Electrocharged element="Hydro" application />
                <Reactions.Frozen element="Hydro" application />
                <Reactions.Bloom element="Hydro" application />
            </React.Fragment>
    },
    "electro": {
        "name":
            <CustomBox sx={{ display: "inline-flex" }}>
                <TCGElectro />
                <Typography className="text-electro" variant="h6" sx={{ fontFamily: "Genshin, sans-serif", ml: "7px" }}>Electro DMG</Typography>
            </CustomBox>,
        "description":
            <React.Fragment>
                <CustomTypography>
                    Applies <b className="text-electro">Electro</b> and can trigger the following Elemental Reactions:
                </CustomTypography>
                <Reactions.Overloaded element="Electro" />
                <Reactions.Superconduct element="Electro" />
                <Reactions.Electrocharged element="Electro" />
                <Reactions.Quicken element="Electro" />
            </React.Fragment>
    },
    "electro application": {
        "name":
            <CustomBox sx={{ display: "inline-flex" }}>
                <TCGElectro />
                <Typography className="text-electro" variant="h6" sx={{ fontFamily: "Genshin, sans-serif", ml: "7px" }}>Electro Application</Typography>
            </CustomBox>,
        "description":
            <React.Fragment>
                <CustomTypography>
                    When <b className="text-electro">Electro</b> is applied without dealing any DMG, the Elemental Reaction triggered will ignore DMG-dealing effects:
                </CustomTypography>
                <Reactions.Overloaded element="Electro" application />
                <Reactions.Superconduct element="Electro" application />
                <Reactions.Electrocharged element="Electro" application />
                <Reactions.Quicken element="Electro" />
            </React.Fragment>
    },
    "cryo": {
        "name":
            <CustomBox sx={{ display: "inline-flex" }}>
                <TCGCryo />
                <Typography className="text-cryo" variant="h6" sx={{ fontFamily: "Genshin, sans-serif", ml: "7px" }}>Cryo DMG</Typography>
            </CustomBox>,
        "description":
            <React.Fragment>
                <CustomTypography>
                    Applies <b className="text-cryo">Cryo</b> and can trigger the following Elemental Reactions:
                </CustomTypography>
                <Reactions.Melt element="Cryo" />
                <Reactions.Superconduct element="Cryo" />
                <Reactions.Frozen element="Cryo" />
            </React.Fragment>
    },
    "cryo application": {
        "name":
            <CustomBox sx={{ display: "inline-flex" }}>
                <TCGCryo />
                <Typography className="text-cryo" variant="h6" sx={{ fontFamily: "Genshin, sans-serif", ml: "7px" }}>Cryo Application</Typography>
            </CustomBox>,
        "description":
            <React.Fragment>
                <CustomTypography>
                    When <b className="text-cryo">Cryo</b> is applied without dealing any DMG, the Elemental Reaction triggered will ignore DMG-dealing effects:
                </CustomTypography>
                <Reactions.Melt element="Cryo" application />
                <Reactions.Superconduct element="Cryo" application />
                <Reactions.Frozen element="Cryo" application />
            </React.Fragment>
    },
    "anemo": {
        "name":
            <CustomBox sx={{ display: "inline-flex" }}>
                <TCGAnemo />
                <Typography className="text-anemo" variant="h6" sx={{ fontFamily: "Genshin, sans-serif", ml: "7px" }}>Anemo DMG</Typography>
            </CustomBox>,
        "description":
            <React.Fragment>
                <CustomTypography>
                    Reacts with Elements if they are already applied:
                </CustomTypography>
                <Reactions.Swirl element="Cryo" />
                <Reactions.Swirl element="Electro" />
                <Reactions.Swirl element="Hydro" />
                <Reactions.Swirl element="Pyro" />
            </React.Fragment>
    },
    "geo": {
        "name":
            <CustomBox sx={{ display: "inline-flex" }}>
                <TCGGeo />
                <Typography className="text-geo" variant="h6" sx={{ fontFamily: "Genshin, sans-serif", ml: "7px" }}>Geo DMG</Typography>
            </CustomBox>,
        "description":
            <React.Fragment>
                <CustomTypography>
                    Reacts with Elements if they are already applied:
                </CustomTypography>
                <Reactions.Crystallize element="Cryo" />
                <Reactions.Crystallize element="Electro" />
                <Reactions.Crystallize element="Hydro" />
                <Reactions.Crystallize element="Pyro" />
            </React.Fragment>
    },
    "dendro": {
        "name":
            <CustomBox sx={{ display: "inline-flex" }}>
                <TCGDendro />
                <Typography className="text-dendro" variant="h6" sx={{ fontFamily: "Genshin, sans-serif", ml: "7px" }}>Dendro DMG</Typography>
            </CustomBox>,
        "description":
            <React.Fragment>
                <CustomTypography>
                    Applies <b className="text-dendro">Dendro</b> and can trigger the following Elemental Reactions:
                </CustomTypography>
                <Reactions.Bloom element="Dendro" />
                <Reactions.Burning element="Dendro" />
                <Reactions.Quicken element="Dendro" />
            </React.Fragment>
    },

    // TERMS

    "duration": {
        "name":
            <CustomBox sx={{ display: "inline-flex" }}>
                <Typography variant="h6" sx={{ fontFamily: "Genshin, sans-serif", color: "white" }}>Duration (Rounds)</Typography>
            </CustomBox>,
        "description":
            <CustomTypography>
                Each time you reach the end of a Round, <b style={{ color: "white" }}>Duration (Rounds)</b> -1.<br />
                This card will be discarded immediately once <b style={{ color: "white" }}>Duration (Rounds)</b> runs out.
            </CustomTypography>
    },
    "usages": {
        "name":
            <CustomBox sx={{ display: "inline-flex" }}>
                <Typography variant="h6" sx={{ fontFamily: "Genshin, sans-serif", color: "white" }}>Usage(s)</Typography>
            </CustomBox>,
        "description":
            <CustomTypography>
                After this card's effect is triggered, 1 <b style={{ color: "white" }}>Usage</b> of it will be consumed.<br />
                This card will be discarded immediately once it has 0 <b style={{ color: "white" }}>Usages</b> runs out.
            </CustomTypography>
    },
    "shield": {
        "name":
            <CustomBox sx={{ display: "inline-flex" }}>
                <Avatar src={`${process.env.REACT_APP_URL}/tcg/icons/Shield.png`} alt="Shield" sx={{ width: "32px", height: "32px" }} />
                <Typography variant="h6" sx={{ fontFamily: "Genshin, sans-serif", ml: "7px", color: "white" }}>Shield</Typography>
            </CustomBox>,
        "description":
            <CustomTypography>
                This Shield will be consumed to protect the character who equips it from DMG.
            </CustomTypography>
    },
    "combat action": {
        "name":
            <CustomBox sx={{ display: "inline-flex" }}>
                <Typography variant="h6" sx={{ fontFamily: "Genshin, sans-serif", color: "white" }}>Combat Action</Typography>
            </CustomBox>,
        "description":
            <CustomTypography>
                After you finish 1 Combat Action, it will be your opponent's turn.<br />
                <b style={{ color: "white" }}>Playing a card from your Hand with this rule is also a Combat Action rather than a Fast Action</b>.
            </CustomTypography>
    },
    "fast action": {
        "name":
            <CustomBox sx={{ display: "inline-flex" }}>
                <Typography variant="h6" sx={{ fontFamily: "Genshin, sans-serif", color: "white" }}>Fast Action</Typography>
            </CustomBox>,
        "description":
            <CustomTypography>
                You can continue with other actions after conducting 1 Fast action<br />
                Only after conducting 1 Combat Action will the turn pass over to your opponent.
            </CustomTypography>
    },
    "prepare": {
        "name":
            <CustomBox sx={{ display: "inline-flex" }}>
                <Typography variant="h6" sx={{ fontFamily: "Genshin, sans-serif", color: "white" }}>Prepare Skill</Typography>
            </CustomBox>,
        "description":
            <CustomTypography>
                Some Skills cannot be used directly. Instead they need to be <b style={{ color: "white" }}>prepared</b> over a certain number of turns.<br />
                When it is a certain player's turn, and this player's active character is currently <b style={{ color: "white" }}>preparing</b> a Skill, this player's turn will be skipped. If the Skill has finished being <b style={{ color: "white" }}>prepared</b>, the character will directly use that Skill at this time. (Skills that require <b style={{ color: "white" }}>preparing</b> cannot activate effects triggered by "using a Skill")<br />
                Only active characters can <b style={{ color: "white" }}>prepare</b> Skills, and if an active character who is <b style={{ color: "white" }}>preparing</b> a Skill gets switched off-field, their <b style={{ color: "white" }}>preparation</b> will be interrupted.
            </CustomTypography>
    },
    "charged attack": {
        "name":
            <CustomBox sx={{ display: "inline-flex" }}>
                <Typography variant="h6" sx={{ fontFamily: "Genshin, sans-serif", color: "white" }}>Charged Attack</Typography>
            </CustomBox>,
        "description":
            <CustomTypography>
                Before your Action Phase, should the total number of your Elemental Dice be even, your Normal Attack will be considered a Charged Attack.
            </CustomTypography>
    },
    "plunging attack": {
        "name":
            <CustomBox sx={{ display: "inline-flex" }}>
                <Typography variant="h6" sx={{ fontFamily: "Genshin, sans-serif", color: "white" }}>Plunging Attack</Typography>
            </CustomBox>,
        "description":
            <CustomTypography>
                After a character is switched in to be the Active Character, should their next Combat Action within this Round be a Normal Attack, it will be considered a Plunging Attack for the instance.
            </CustomTypography>
    },
    "immunity to defeat": {
        "name":
            <CustomBox sx={{ display: "inline-flex" }}>
                <Typography variant="h6" sx={{ fontFamily: "Genshin, sans-serif", color: "white" }}>Immunity to Defeat</Typography>
            </CustomBox>,
        "description":
            <CustomTypography>
                Certain effects will grant characters an <b style={{ color: "white" }}>immunity to being defeated</b> when their HP hits 0, and will heal them for a certain amount thereafter.<br />When this occurs, characters will not be regarded as having experienced a <b style={{ color: "white" }}>defeat</b>.<br />(Hence, their attached equipment and statuses will not be removed, and their Energy will remain uncleared.)
            </CustomTypography>
    },
    "energy": {
        "name":
            <CustomBox sx={{ display: "inline-flex" }}>
                <Avatar src={`${process.env.REACT_APP_URL}/tcg/icons/dice/N.png`} alt="Energy" sx={{ width: "32px", height: "32px" }} />
                <Typography variant="h6" sx={{ fontFamily: "Genshin, sans-serif", ml: "7px", color: "white" }}>Energy </Typography>
            </CustomBox>,
        "description":
            <CustomTypography>
                Characters must consume Energy to use their Elemental Bursts.<br />When characters use an Elemental Skill or a Normal Attack, they will gain 1 Energy.
            </CustomTypography>
    },
    "omni element": {
        "name":
            <CustomBox sx={{ display: "inline-flex" }}>
                <Typography variant="h6" sx={{ fontFamily: "Genshin, sans-serif", color: "white" }}>Omni Element </Typography>
            </CustomBox>,
        "description":
            <CustomTypography>
                The Omni Element can be considered as any kind of element, and can be used to pay for costs of various kinds.
            </CustomTypography>
    },
    "unaligned element": {
        "name":
            <CustomBox sx={{ display: "inline-flex" }}>
                <Avatar src={`${process.env.REACT_APP_URL}/tcg/icons/dice/U.png`} alt="Energy" sx={{ width: "32px", height: "32px" }} />
                <Typography variant="h6" sx={{ fontFamily: "Genshin, sans-serif", ml: "7px", color: "white" }}>Unaligned Element </Typography>
            </CustomBox>,
        "description":
            <CustomTypography>
                You may use Elemental Dice of any element to pay this type of cost.
            </CustomTypography>
    },
    "char closest to current active char": {
        "name":
            <CustomBox sx={{ display: "inline-flex" }}>
                <Typography variant="h6" sx={{ fontFamily: "Genshin, sans-serif", color: "white" }}>Character Closest to Your Current Active Character</Typography>
            </CustomBox>,
        "description":
            <CustomTypography>
                The opposing "character closest to your current active character" is the opposing character whose position is closest to that of your active character.<br />If multiple such characters exist, the one with the foremost position will be viewd as being "closest".
            </CustomTypography>
    }

}