import * as React from "react"

// MUI imports
import { useTheme, Typography } from "@mui/material"

// Helper imports
import { themes } from "../../redux/reducers/ThemeReducer"
import * as Reactions from "./TCGReactions"
import { TCGPhysical, TCGPyro, TCGHydro, TCGElectro, TCGCryo, TCGAnemo, TCGGeo, TCGDendro } from "../_custom/ElementIcons"

// Type imports
import { TCGKeywordIndexData } from "../../types/tcg/TCGKeywordIndexData"

const theme = themes[Number(localStorage.getItem("theme"))].theme

const DescriptionText = () => {
    const theme = useTheme()
    return {
        color: `${theme.text.colorAlt}`,
        fontSize: { xs: "14px", sm: "16px" }
    }
}

export const Keywords: TCGKeywordIndexData = {

    // ELEMENTS / DMG TYPES

    "physical": {
        name: "Physical DMG",
        image: <TCGPhysical />,
        description: "Physical DMG will not apply any Elements, nor can it engage in Elemental Reactions."
    },
    "piercing": {
        name: "Piercing DMG",
        description: "Piercing DMG cannot be increased by any bonuses, but cannot be defended against using Shields or DMG Immunity either."
    },
    "pyro": {
        name: <span className="text-pyro" style={{ fontWeight: `${theme.font.genshin.weight}` }}>Pyro DMG</span>,
        image: <TCGPyro />,
        description:
            <React.Fragment>
                <Typography gutterBottom sx={DescriptionText}>
                    Applies <span className="text-pyro">Pyro</span> and can trigger the following Elemental Reactions:
                </Typography>
                <Reactions.Melt element="Pyro" />
                <Reactions.Vaporize element="Pyro" />
                <Reactions.Overloaded element="Pyro" />
                <Reactions.Burning element="Pyro" />
            </React.Fragment>
    },
    "pyro reaction": {
        name: <span className="text-pyro" style={{ fontWeight: `${theme.font.genshin.weight}` }}>Pyro-Related Reactions</span>,
        image: <TCGPyro />,
        description:
            <React.Fragment>
                <Reactions.Melt element="Pyro" />
                <Reactions.Vaporize element="Pyro" />
                <Reactions.Overloaded element="Pyro" />
                <Reactions.Burning element="Pyro" />
            </React.Fragment>
    },
    "pyro application": {
        name: <span className="text-pyro" style={{ fontWeight: `${theme.font.genshin.weight}` }}>Pyro Application</span>,
        image: <TCGPyro />,
        description:
            <React.Fragment>
                <Typography gutterBottom sx={DescriptionText}>
                    When <span className="text-pyro">Pyro</span> is applied without dealing any DMG, the Elemental Reaction triggered will ignore DMG-dealing effects:
                </Typography>
                <Reactions.Melt element="Pyro" application />
                <Reactions.Vaporize element="Pyro" application />
                <Reactions.Overloaded element="Pyro" application />
                <Reactions.Burning element="Pyro" application />
            </React.Fragment>
    },
    "hydro": {
        name: <span className="text-hydro" style={{ fontWeight: `${theme.font.genshin.weight}` }}>Hydro DMG</span>,
        image: <TCGHydro />,
        description:
            <React.Fragment>
                <Typography gutterBottom sx={DescriptionText}>
                    Applies <span className="text-hydro">Hydro</span> and can trigger the following Elemental Reactions:
                </Typography>
                <Reactions.Vaporize element="Hydro" />
                <Reactions.Electrocharged element="Hydro" />
                <Reactions.Frozen element="Hydro" />
                <Reactions.Bloom element="Hydro" />
            </React.Fragment>
    },
    "hydro reaction": {
        name: <span className="text-hydro" style={{ fontWeight: `${theme.font.genshin.weight}` }}>Hydro-Related Reactions</span>,
        image: <TCGHydro />,
        description:
            <React.Fragment>
                <Reactions.Vaporize element="Hydro" />
                <Reactions.Electrocharged element="Hydro" />
                <Reactions.Frozen element="Hydro" />
                <Reactions.Bloom element="Hydro" />
            </React.Fragment>
    },
    "hydro application": {
        name: <span className="text-hydro" style={{ fontWeight: `${theme.font.genshin.weight}` }}>Hydro Application</span>,
        image: <TCGHydro />,
        description:
            <React.Fragment>
                <Typography gutterBottom sx={DescriptionText}>
                    When <span className="text-hydro">Hydro</span> is applied without dealing any DMG, the Elemental Reaction triggered will ignore DMG-dealing effects:
                </Typography>
                <Reactions.Vaporize element="Hydro" application />
                <Reactions.Electrocharged element="Hydro" application />
                <Reactions.Frozen element="Hydro" application />
                <Reactions.Bloom element="Hydro" application />
            </React.Fragment>
    },
    "electro": {
        name: <span className="text-electro" style={{ fontWeight: `${theme.font.genshin.weight}` }}>Electro DMG</span>,
        image: <TCGElectro />,
        description:
            <React.Fragment>
                <Typography gutterBottom sx={DescriptionText}>
                    Applies <span className="text-electro">Electro</span> and can trigger the following Elemental Reactions:
                </Typography>
                <Reactions.Overloaded element="Electro" />
                <Reactions.Superconduct element="Electro" />
                <Reactions.Electrocharged element="Electro" />
                <Reactions.Quicken element="Electro" />
            </React.Fragment>
    },
    "electro reaction": {
        name: <span className="text-electro" style={{ fontWeight: `${theme.font.genshin.weight}` }}>Electro-Related Reactions</span>,
        image: <TCGElectro />,
        description:
            <React.Fragment>
                <Reactions.Overloaded element="Electro" />
                <Reactions.Superconduct element="Electro" />
                <Reactions.Electrocharged element="Electro" />
                <Reactions.Quicken element="Electro" />
            </React.Fragment>
    },
    "electro application": {
        name: <span className="text-electro" style={{ fontWeight: `${theme.font.genshin.weight}` }}>Electro Application</span>,
        image: <TCGElectro />,
        description:
            <React.Fragment>
                <Typography gutterBottom sx={DescriptionText}>
                    When <span className="text-electro">Electro</span> is applied without dealing any DMG, the Elemental Reaction triggered will ignore DMG-dealing effects:
                </Typography>
                <Reactions.Overloaded element="Electro" application />
                <Reactions.Superconduct element="Electro" application />
                <Reactions.Electrocharged element="Electro" application />
                <Reactions.Quicken element="Electro" />
            </React.Fragment>
    },
    "cryo": {
        name: <span className="text-cryo" style={{ fontWeight: `${theme.font.genshin.weight}` }}>Cryo DMG</span>,
        image: <TCGCryo />,
        description:
            <React.Fragment>
                <Typography gutterBottom sx={DescriptionText}>
                    Applies <span className="text-cryo">Cryo</span> and can trigger the following Elemental Reactions:
                </Typography>
                <Reactions.Melt element="Cryo" />
                <Reactions.Superconduct element="Cryo" />
                <Reactions.Frozen element="Cryo" />
            </React.Fragment>
    },
    "cryo reaction": {
        name: <span className="text-cryo" style={{ fontWeight: `${theme.font.genshin.weight}` }}>Cryo-Related Reactions</span>,
        image: <TCGCryo />,
        description:
            <React.Fragment>
                <Reactions.Melt element="Cryo" />
                <Reactions.Superconduct element="Cryo" />
                <Reactions.Frozen element="Cryo" />
            </React.Fragment>
    },
    "cryo application": {
        name: <span className="text-cryo" style={{ fontWeight: `${theme.font.genshin.weight}` }}>Cryo Application</span>,
        image: <TCGCryo />,
        description:
            <React.Fragment>
                <Typography gutterBottom sx={DescriptionText}>
                    When <span className="text-cryo">Cryo</span> is applied without dealing any DMG, the Elemental Reaction triggered will ignore DMG-dealing effects:
                </Typography>
                <Reactions.Melt element="Cryo" application />
                <Reactions.Superconduct element="Cryo" application />
                <Reactions.Frozen element="Cryo" application />
            </React.Fragment>
    },
    "anemo": {
        name: <span className="text-anemo" style={{ fontWeight: `${theme.font.genshin.weight}` }}>Anemo DMG</span>,
        image: <TCGAnemo />,
        description:
            <React.Fragment>
                <Typography gutterBottom sx={DescriptionText}>
                    Reacts with Elements if they are already applied:
                </Typography>
                <Reactions.Swirl element="Cryo" />
                <Reactions.Swirl element="Electro" />
                <Reactions.Swirl element="Hydro" />
                <Reactions.Swirl element="Pyro" />
            </React.Fragment>
    },
    "geo": {
        name: <span className="text-geo" style={{ fontWeight: `${theme.font.genshin.weight}` }}>Geo DMG</span>,
        image: <TCGGeo />,
        description:
            <React.Fragment>
                <Typography gutterBottom sx={DescriptionText}>
                    Reacts with Elements if they are already applied:
                </Typography>
                <Reactions.Crystallize element="Cryo" />
                <Reactions.Crystallize element="Electro" />
                <Reactions.Crystallize element="Hydro" />
                <Reactions.Crystallize element="Pyro" />
            </React.Fragment>
    },
    "dendro": {
        name: <span className="text-dendro" style={{ fontWeight: `${theme.font.genshin.weight}` }}>Dendro DMG</span>,
        image: <TCGDendro />,
        description:
            <React.Fragment>
                <Typography gutterBottom sx={DescriptionText}>
                    Applies <span className="text-dendro">Dendro</span> and can trigger the following Elemental Reactions:
                </Typography>
                <Reactions.Bloom element="Dendro" />
                <Reactions.Burning element="Dendro" />
                <Reactions.Quicken element="Dendro" />
            </React.Fragment>
    },
    "dendro reaction": {
        name: <span className="text-dendro" style={{ fontWeight: `${theme.font.genshin.weight}` }}>Dendro-Related Reactions</span>,
        image: <TCGDendro />,
        description:
            <React.Fragment>
                <Reactions.Bloom element="Dendro" />
                <Reactions.Burning element="Dendro" />
                <Reactions.Quicken element="Dendro" />
            </React.Fragment>
    },

    // TERMS

    "duration": {
        name: "Duration (Rounds)",
        description:
            <Typography gutterBottom sx={DescriptionText}>
                Each time you reach the end of a Round, <span style={{ color: `white` }}>Duration (Rounds)</span> -1.<br />
                This card will be discarded immediately once <span style={{ color: `white` }}>Duration (Rounds)</span> runs out.
            </Typography>
    },
    "usages": {
        name: "Usage(s)",
        description:
            <Typography gutterBottom sx={DescriptionText}>
                After this card's effect is triggered, 1 <span style={{ color: `white` }}>Usage</span> of it will be consumed.<br />
                This card will be discarded immediately once it has 0 <span style={{ color: `white` }}>Usages</span> runs out.
            </Typography>
    },
    "shield": {
        name: "Shield",
        image: <img src={`${process.env.REACT_APP_URL}/tcg/icons/Shield.png`} alt="Shield" style={{ width: "32px", height: "32px" }} />,
        description:
            <Typography gutterBottom sx={DescriptionText}>
                This Shield will be consumed to protect the character who equips it from DMG.
            </Typography>
    },
    "combat action": {
        name: "Combat Action",
        description:
            <Typography gutterBottom sx={DescriptionText}>
                After you finish 1 Combat Action, it will be your opponent's turn.<br />
                <span style={{ color: `white` }}>Playing a card from your Hand with this rule is also a Combat Action rather than a Fast Action</span>.
            </Typography>
    },
    "fast action": {
        name: "Fast Action",
        description:
            <Typography gutterBottom sx={DescriptionText}>
                You can continue with other actions after conducting 1 Fast action<br />
                Only after conducting 1 Combat Action will the turn pass over to your opponent.
            </Typography>
    },
    "prepare": {
        name: "Prepare Skill",
        description:
            <Typography gutterBottom sx={DescriptionText}>
                Some Skills cannot be used directly. Instead they need to be <span style={{ color: `white` }}>prepared</span> over a certain number of turns.<br />
                When it is a certain player's turn, and this player's active character is currently <span style={{ color: `white` }}>preparing</span> a Skill, this player's turn will be skipped. If the Skill has finished being <span style={{ color: `white` }}>prepared</span>, the character will directly use that Skill at this time. (Skills that require <span style={{ color: `white` }}>preparing</span> cannot activate effects triggered by "using a Skill")<br />
                Only active characters can <span style={{ color: `white` }}>prepare</span> Skills, and if an active character who is <span style={{ color: `white` }}>preparing</span> a Skill gets switched off-field, their <span style={{ color: `white` }}>preparation</span> will be interrupted.
            </Typography>
    },
    "charged attack": {
        name: "Charged Attack",
        description:
            <Typography gutterBottom sx={DescriptionText}>
                Before your Action Phase, should the total number of your Elemental Dice be even, your Normal Attack will be considered a Charged Attack.
            </Typography>
    },
    "plunging attack": {
        name: "Plunging Attack",
        description:
            <Typography gutterBottom sx={DescriptionText}>
                After a character is switched in to be the Active Character, should their next Combat Action within this Round be a Normal Attack, it will be considered a Plunging Attack for the instance.
            </Typography>
    },
    "immunity to defeat": {
        name: "Immunity to Defeat",
        description:
            <Typography gutterBottom sx={DescriptionText}>
                Certain effects will grant characters an <span style={{ color: `white` }}>immunity to being defeated</span> when their HP hits 0, and will heal them for a certain amount thereafter.<br />When this occurs, characters will not be regarded as having experienced a <span style={{ color: `white` }}>defeat</span>.<br />(Hence, their attached equipment and statuses will not be removed, and their Energy will remain uncleared.)
            </Typography>
    },
    "energy": {
        name: "Energy",
        image: <img src={`${process.env.REACT_APP_URL}/tcg/icons/dice_alt/N.png`} alt="Energy" style={{ width: "32px", height: "32px" }} />,
        description:
            <Typography gutterBottom sx={DescriptionText}>
                Characters must consume Energy to use their Elemental Bursts.<br />When characters use an Elemental Skill or a Normal Attack, they will gain 1 Energy.
            </Typography>
    },
    "omni element": {
        name: "Omni Element",
        image: <img src={`${process.env.REACT_APP_URL}/tcg/icons/dice_alt/O.png`} alt="Omni" style={{ width: "32px", height: "32px" }} />,
        description:
            <Typography gutterBottom sx={DescriptionText}>
                The Omni Element can be considered as any kind of element, and can be used to pay for costs of various kinds.
            </Typography>
    },
    "unaligned element": {
        name: "Unaligned Element",
        image: <img src={`${process.env.REACT_APP_URL}/tcg/icons/dice_alt/U.png`} alt="Unaligned" style={{ width: "32px", height: "32px" }} />,
        description:
            <Typography gutterBottom sx={DescriptionText}>
                You may use Elemental Dice of any element to pay this type of cost.
            </Typography>
    },
    "char closest to current active char": {
        name: "Character Closest to Your Current Active Character",
        description:
            <Typography gutterBottom sx={DescriptionText}>
                The opposing "character closest to your current active character" is the opposing character whose position is closest to that of your active character.<br />If multiple such characters exist, the one with the foremost position will be viewd as being "closest".
            </Typography>
    },
    "discard": {
        name: "Discard",
        description:
            <Typography gutterBottom sx={DescriptionText}>
                Use Action Cards or Character Skill effects to Discard Action Cards from Hand or Deck.
            </Typography>
    },
    "tune": {
        name: "Tune",
        description:
            <Typography gutterBottom sx={DescriptionText}>
                Discard Action Cards from Hand to initiate Elemental Tuning.
            </Typography>
    },
    "technique": {
        name: "Technique",
        image: <img src={`${process.env.REACT_APP_URL}/tcg/icons/subtypes/Technique.png`} alt="Technique" style={{ width: "32px", height: "32px", marginRight: "5px" }} />,
        description:
            <Typography gutterBottom sx={DescriptionText}>
                When the active character is equipped with a <span style={{ color: `white` }}>Technique</span> card, they can use the corresponding <span style={{ color: `white` }}>Technique</span>.<br />Using a <span style={{ color: `white` }}>Technique</span> counts as a Combat Action. If the character is unable to use Skills due to conditions like Frozen, Petrification, or Stun, they are also unable to use the <span style={{ color: `white` }}>Technique</span>.<br />Using a <span style={{ color: `white` }}>Technique</span> is not considered as using a Skill. Therefore, it cannot trigger effects such as "After using a skill" or "After the character triggers an Elemental Reaction." Damage dealt by using a <span style={{ color: `white` }}>Technique</span> is not considered Damage dealt by the character.
            </Typography>
    }

}