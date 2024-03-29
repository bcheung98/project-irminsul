import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, Paper } from "@mui/material";
import { Box } from "@mui/system";
import { Accordion, AccordionDetails, AccordionSummary } from "../../../helpers/CustomAccordion";
import WeaponTypeFilter from "./WeaponTypeFilter";
import WeaponRarityFilter from "./WeaponRarityFilter";
import WeaponSubstatFilter from "./WeaponSubstatFilter";
import WeaponAscensionMatFilter from "./WeaponAscensionMatFilter";
import WeaponEliteMatFilter from "./WeaponEliteMatFilter";
import WeaponCommonMatFilter from "./WeaponCommonMatFilter";

const WeaponFilters = () => {

    const theme = useTheme();

    return (
        <Box
            sx={{
                m: "auto",
                width: "85%",
                ml: "35px",
            }}
        >
            <Paper variant="outlined" square
                sx={{
                    color: `${theme.text.color}`,
                    backgroundColor: `${theme.appbar.backgroundColor}`,
                    border: `2px solid ${theme.border.color}`,
                    borderRadius: "5px",
                }}
            >
                <Typography variant="h6"
                    sx={{
                        ml: "15px",
                        my: "10px",
                        fontFamily: "Genshin, sans-serif",
                    }}
                >
                    Filters
                </Typography>

                {/* WEAPON */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="wep-weapon-filter-text" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Weapon</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <WeaponTypeFilter />
                    </AccordionDetails>
                </Accordion>

                {/* RARITY */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="wep-rarity-filter-text" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Rarity</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <WeaponRarityFilter />
                    </AccordionDetails>
                </Accordion>

                {/* SUBSTAT */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="wep-substat-filter-text" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Substat</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <WeaponSubstatFilter />
                    </AccordionDetails>
                </Accordion>

                {/* ASCENSION MAT */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="wep-ascmat-filter-text" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Ascension Material</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <WeaponAscensionMatFilter />
                    </AccordionDetails>
                </Accordion>

                {/* ELITE MATERIAL */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="wep-elitemat-filter-text" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Elite Material</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <WeaponEliteMatFilter />
                    </AccordionDetails>
                </Accordion>

                {/* COMMON MATERIAL */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="wep-common-filter-text" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Common Material</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <WeaponCommonMatFilter />
                    </AccordionDetails>
                </Accordion>

            </Paper>
        </Box>
    )
}

export default WeaponFilters;