// Component imports
import CharacterElementFilter from "./CharacterElementFilter"
import CharacterWeaponFilter from "./CharacterWeaponFilter"
import CharacterRarityFilter from "./CharacterRarityFilter"
import CharacterAscensionStatFilter from "./CharacterAscensionStatFilter"
import CharacterTalentFilter from "./CharacterTalentFilter"
import CharacterCommonMatFilter from "./CharacterCommonMatFilter"
import CharacterBossMatFilter from "./CharacterBossMatFilter"
import CharacterWeeklyBossMatFilter from "./CharacterWeeklyBossMatFilter"
import CharacterLocalSpecialtyFilter from "./CharacterLocalSpecialtyFilter"
import CharacterNationFilter from "./CharacterNationFilter"
import CharacterGenderFilter from "./CharacterGenderFilter"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { Box } from "@mui/system"
import { Typography, Paper } from "@mui/material"

// Helper imports
import { Accordion, AccordionDetails, AccordionSummary } from "../../../helpers/CustomAccordion"

function CharacterFilters() {

    const theme = useTheme()

    return (
        <Box
            sx={{
                margin: "auto",
                width: "85%",
                marginLeft: "35px",
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

                {/* ELEMENT */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="element-filter-text" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Element</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <CharacterElementFilter />
                    </AccordionDetails>
                </Accordion>

                {/* WEAPON */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="weapon-filter-text" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Weapon</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <CharacterWeaponFilter />
                    </AccordionDetails>
                </Accordion>

                {/* RARITY */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="rarity-filter-text" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Rarity</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <CharacterRarityFilter />
                    </AccordionDetails>
                </Accordion>

                {/* ASCENSION STAT */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="ascensionstat-filter-text" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Ascension Stat</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <CharacterAscensionStatFilter />
                    </AccordionDetails>
                </Accordion>

                {/* TALENT BOOK */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="talentbook-filter-text" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Talent Book</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <CharacterTalentFilter />
                    </AccordionDetails>
                </Accordion>

                {/* COMMON MATERIAL */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="commonmats-filter-text" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Common Material</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <CharacterCommonMatFilter />
                    </AccordionDetails>
                </Accordion>

                {/* NORMAL BOSS */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="bossmats-filter-text" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Normal Boss</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <CharacterBossMatFilter />
                    </AccordionDetails>
                </Accordion>

                {/* WEEKLY BOSS */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="weeklybossmats-filter-text" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Weekly Boss</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <CharacterWeeklyBossMatFilter />
                    </AccordionDetails>
                </Accordion>

                {/* LOCAL SPECIALTY */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="localmats-filter-text" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Local Specialty</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <CharacterLocalSpecialtyFilter />
                    </AccordionDetails>
                </Accordion>

                {/* NATION */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="nation-filter-text" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Nation</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <CharacterNationFilter />
                    </AccordionDetails>
                </Accordion>

                {/* GENDER */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="gender-filter-text" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Gender</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <CharacterGenderFilter />
                    </AccordionDetails>
                </Accordion>

            </Paper>
        </Box>
    )
}

export default CharacterFilters