// Component imports
import TCGCharacterElementFilter from "./TCGCharacterElementFilter"
import TCGCharacterWeaponFilter from "./TCGCharacterWeaponFilter"
import TCGCharacterFactionFilter from "./TCGCharacterFactionFilter"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { Typography, Paper } from "@mui/material"

// Helper imports
import { Accordion, AccordionDetails, AccordionSummary } from "../../../_custom/CustomAccordion"

function TCGCharacterCardFilter() {

    const theme = useTheme()

    return (
        <Paper
            variant="outlined"
            square
            sx={{
                color: `${theme.text.color}`,
                backgroundColor: `${theme.appbar.backgroundColor}`,
                border: `2px solid ${theme.border.color}`,
                borderRadius: "5px",
                my: "10px",
            }}
        >
            <Typography
                variant="h6"
                sx={{
                    ml: "15px",
                    my: "10px",
                    fontFamily: `${theme.font.genshin.family}`,
                }}
            >
                Filters
            </Typography>

            {/* ELEMENT */}
            <Accordion>
                <AccordionSummary>
                    <Typography variant="body1" className="filter-text-off" id="element-filter-text" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}` }}>Element</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TCGCharacterElementFilter />
                </AccordionDetails>
            </Accordion>

            {/* WEAPON */}
            <Accordion>
                <AccordionSummary>
                    <Typography variant="body1" className="filter-text-off" id="weapon-filter-text" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}` }}>Weapon</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TCGCharacterWeaponFilter />
                </AccordionDetails>
            </Accordion>

            {/* FACTION */}
            <Accordion>
                <AccordionSummary>
                    <Typography variant="body1" className="filter-text-off" id="nation-filter-text" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}` }}>Faction</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TCGCharacterFactionFilter />
                </AccordionDetails>
            </Accordion>

        </Paper>
    )

}

export default TCGCharacterCardFilter