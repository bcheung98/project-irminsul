import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Typography, Paper } from "@mui/material";
import { Accordion, AccordionDetails, AccordionSummary } from "../../helpers/CustomAccordion";
import TCGCharacterElementFilter from "./filters/character/TCGCharacterElementFilter";
import TCGCharacterWeaponFilter from "./filters/character/TCGCharacterWeaponFilter";
import TCGCharacterFactionFilter from "./filters/character/TCGCharacterFactionFilter";

const TCGCharacterCardFilter = (props) => {

    const theme = useTheme();

    return (
        <Box style={{
            margin: "auto",
            width: "90%",
        }}>
            <Paper variant="outlined" square
                sx={{
                    color: `${theme.text.color}`,
                    backgroundColor: `${theme.appbar.backgroundColor}`,
                    border: `2px solid ${theme.border.color}`,
                    borderRadius: "5px",
                }}
            >
                <Typography variant="h6" sx={{
                    ml: "15px",
                    my: "10px",
                    fontFamily: "Genshin, sans-serif",
                }}>Filters
                </Typography>

                {/* ELEMENT */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="element-filter-text" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Element</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TCGCharacterElementFilter />
                    </AccordionDetails>
                </Accordion>

                {/* WEAPON */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="characterweapon-filter-text" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Weapon</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TCGCharacterWeaponFilter />
                    </AccordionDetails>
                </Accordion>

                {/* FACTION */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="faction-filter-text" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Faction</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TCGCharacterFactionFilter />
                    </AccordionDetails>
                </Accordion>

            </Paper>
        </Box>
    )

}

export default TCGCharacterCardFilter;