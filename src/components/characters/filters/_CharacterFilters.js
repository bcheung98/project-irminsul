import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Typography, Paper } from "@mui/material";
import { Accordion, AccordionDetails, AccordionSummary } from "../../../helpers/CustomAccordion";
import ElementFilter from "./ElementFilter";
import WeaponFilter from "./WeaponFilter";
import RarityFilter from "./RarityFilter";
import AscensionStatFilters from "./AscensionStatFilters";
import TalentFilter from "./TalentFilter";
import CommonMatFilter from "./CommonMatFilter";
import BossMatFilter from "./BossMatFilter";
import WeeklyBossMatFilter from "./WeeklyBossMatFilter";
import LocalSpecialtyFilter from "./LocalSpecialtyFilter";
import NationFilter from "./NationFilter";
import GenderFilter from "./GenderFilter";

const CharacterFilters = () => {

    const theme = useTheme();

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
                        <ElementFilter />
                    </AccordionDetails>
                </Accordion>

                {/* WEAPON */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="weapon-filter-text" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Weapon</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <WeaponFilter />
                    </AccordionDetails>
                </Accordion>

                {/* RARITY */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="rarity-filter-text" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Rarity</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <RarityFilter />
                    </AccordionDetails>
                </Accordion>

                {/* ASCENSION STAT */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="ascstat-filter-text" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Ascension Stat</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <AscensionStatFilters />
                    </AccordionDetails>
                </Accordion>

                {/* TALENT BOOK */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="talent-filter-text" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Talent Book</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TalentFilter />
                    </AccordionDetails>
                </Accordion>

                {/* COMMON MATERIAL */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="common-filter-text" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Common Material</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <CommonMatFilter />
                    </AccordionDetails>
                </Accordion>

                {/* NORMAL BOSS */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="boss-filter-text" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Normal Boss</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <BossMatFilter />
                    </AccordionDetails>
                </Accordion>

                {/* WEEKLY BOSS */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="weeklyboss-filter-text" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Weekly Boss</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <WeeklyBossMatFilter />
                    </AccordionDetails>
                </Accordion>

                {/* LOCAL SPECIALTY */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="local-filter-text" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Local Specialty</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <LocalSpecialtyFilter />
                    </AccordionDetails>
                </Accordion>

                {/* NATION */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="nation-filter-text" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Nation</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <NationFilter />
                    </AccordionDetails>
                </Accordion>

                {/* GENDER */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="gender-filter-text" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Gender</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <GenderFilter />
                    </AccordionDetails>
                </Accordion>

            </Paper>
        </Box>
    )
}

export default CharacterFilters;