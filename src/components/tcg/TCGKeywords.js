import * as React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import * as Reactions from "./TCGReactions";
import { TCGPhysical, TCGPyro, TCGHydro, TCGElectro, TCGCryo, TCGAnemo, TCGGeo, TCGDendro } from "../../helpers/ElementIcons";

export const Keywords = {

    // ELEMENTS 

    "physical": {
        "name":
            <Box sx={{ display: "inline-flex" }}>
                <TCGPhysical />
                <Typography variant="h6" sx={{ fontFamily: "Genshin, sans-serif", ml: "7px", color: "white" }}>Physical DMG</Typography>
            </Box>,
        "description":
            <Typography sx={{ mb: "10px" }}>
                Physical DMG will not apply any Elements, nor can it engage in Elemental Reactions.
            </Typography>
    },
    "pyro": {
        "name":
            <Box sx={{ display: "inline-flex" }}>
                <TCGPyro />
                <Typography className="text-pyro" variant="h6" sx={{ fontFamily: "Genshin, sans-serif", ml: "7px" }}>Pyro DMG</Typography>
            </Box>,
        "description":
            <React.Fragment>
                <Typography sx={{ mb: "10px" }}>
                    Applies <b className="text-pyro">Pyro</b> and can trigger the following Elemental Reactions:
                </Typography>
                <Reactions.Melt element="Pyro" />
                <Reactions.Vaporize element="Pyro" />
                <Reactions.Overloaded element="Pyro" />
                <Reactions.Burning element="Pyro" />
            </React.Fragment>
    },
    "hydro": {
        "name":
            <Box sx={{ display: "inline-flex" }}>
                <TCGHydro />
                <Typography className="text-hydro" variant="h6" sx={{ fontFamily: "Genshin, sans-serif", ml: "7px" }}>Hydro DMG</Typography>
            </Box>,
        "description":
            <React.Fragment>
                <Typography sx={{ mb: "10px" }}>
                    Applies <b className="text-hydro">Hydro</b> and can trigger the following Elemental Reactions:
                </Typography>
                <Reactions.Vaporize element="Hydro" />
                <Reactions.Electrocharged element="Hydro" />
                <Reactions.Frozen element="Hydro" />
                <Reactions.Bloom element="Hydro" />
            </React.Fragment>
    },
    "electro": {
        "name":
            <Box sx={{ display: "inline-flex" }}>
                <TCGElectro />
                <Typography className="text-electro" variant="h6" sx={{ fontFamily: "Genshin, sans-serif", ml: "7px" }}>Electro DMG</Typography>
            </Box>,
        "description":
            <React.Fragment>
                <Typography sx={{ mb: "10px" }}>
                    Applies <b className="text-electro">Electro</b> and can trigger the following Elemental Reactions:
                </Typography>
                <Reactions.Overloaded element="Electro" />
                <Reactions.Superconduct element="Electro" />
                <Reactions.Electrocharged element="Electro" />
                <Reactions.Quicken element="Electro" />
            </React.Fragment>
    },
    "cryo": {
        "name":
            <Box sx={{ display: "inline-flex" }}>
                <TCGCryo />
                <Typography className="text-cryo" variant="h6" sx={{ fontFamily: "Genshin, sans-serif", ml: "7px" }}>Cryo DMG</Typography>
            </Box>,
        "description":
            <React.Fragment>
                <Typography sx={{ mb: "10px" }}>
                    Applies <b className="text-cryo">Cryo</b> and can trigger the following Elemental Reactions:
                </Typography>
                <Reactions.Melt element="Cryo" />
                <Reactions.Superconduct element="Cryo" />
                <Reactions.Frozen element="Cryo" />
            </React.Fragment>
    },
    "anemo": {
        "name":
            <Box sx={{ display: "inline-flex" }}>
                <TCGAnemo />
                <Typography className="text-anemo" variant="h6" sx={{ fontFamily: "Genshin, sans-serif", ml: "7px" }}>Anemo DMG</Typography>
            </Box>,
        "description":
            <React.Fragment>
                <Typography sx={{ mb: "10px" }}>
                    Reacts with Elements if they are already applied:
                </Typography>
                <Reactions.Swirl element="Electro" />
                <Reactions.Swirl element="Cryo" />
                <Reactions.Swirl element="Hydro" />
                <Reactions.Swirl element="Pyro" />
            </React.Fragment>
    },
    "geo": {
        "name":
            <Box sx={{ display: "inline-flex" }}>
                <TCGGeo />
                <Typography className="text-geo" variant="h6" sx={{ fontFamily: "Genshin, sans-serif", ml: "7px" }}>Geo DMG</Typography>
            </Box>,
        "description":
            <React.Fragment>
                <Typography sx={{ mb: "10px" }}>
                    Reacts with Elements if they are already applied:
                </Typography>
                <Reactions.Crystallize element="Cryo" />
                <Reactions.Crystallize element="Electro" />
                <Reactions.Crystallize element="Hydro" />
                <Reactions.Crystallize element="Pyro" />
            </React.Fragment>
    },
    "dendro": {
        "name":
            <Box sx={{ display: "inline-flex" }}>
                <TCGDendro />
                <Typography className="text-dendro" variant="h6" sx={{ fontFamily: "Genshin, sans-serif", ml: "7px" }}>Dendro DMG</Typography>
            </Box>,
        "description":
            <React.Fragment>
                <Typography sx={{ mb: "10px" }}>
                    Applies <b className="text-dendro">Dendro</b> and can trigger the following Elemental Reactions:
                </Typography>
                <Reactions.Bloom element="Dendro" />
                <Reactions.Burning element="Dendro" />
                <Reactions.Quicken element="Dendro" />
            </React.Fragment>
    }
}