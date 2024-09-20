// Component imports
import WeaponTypeFilter from "./WeaponTypeFilter"
import WeaponRarityFilter from "./WeaponRarityFilter"
import WeaponSubstatFilter from "./WeaponSubstatFilter"
import WeaponAscensionMatFilter from "./WeaponAscensionMatFilter"
import WeaponEliteMatFilter from "./WeaponEliteMatFilter"
import WeaponCommonMatFilter from "./WeaponCommonMatFilter"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { Box, Typography, Paper } from "@mui/material"
import { Accordion, AccordionDetails, AccordionSummary } from "../../../helpers/CustomAccordion"

function WeaponFilters() {

    const theme = useTheme()

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
                        <Typography variant="body1" className="filter-text-off" id="weapon-weapontype-filter-text" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Weapon</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <WeaponTypeFilter />
                    </AccordionDetails>
                </Accordion>

                {/* RARITY */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="weapon-rarity-filter-text" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Rarity</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <WeaponRarityFilter />
                    </AccordionDetails>
                </Accordion>

                {/* SUBSTAT */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="weapon-substats-filter-text" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Substat</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <WeaponSubstatFilter />
                    </AccordionDetails>
                </Accordion>

                {/* ASCENSION MATERIAL */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="weapon-ascensionmats-filter-text" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Ascension Material</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <WeaponAscensionMatFilter />
                    </AccordionDetails>
                </Accordion>

                {/* ELITE MATERIAL */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="weapon-elitemats-filter-text" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Elite Material</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <WeaponEliteMatFilter />
                    </AccordionDetails>
                </Accordion>

                {/* COMMON MATERIAL */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="weapon-commonmats-filter-text" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Common Material</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <WeaponCommonMatFilter />
                    </AccordionDetails>
                </Accordion>

            </Paper>
        </Box>
    )
}

export default WeaponFilters