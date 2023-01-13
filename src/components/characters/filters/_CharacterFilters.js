import * as React from "react";
import { styled } from '@mui/material/styles';
import "../../../css/filters.css";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { Typography, Paper } from "@mui/material";
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ElementFilter from "./ElementFilter";
import WeaponFilter from "./WeaponFilter";
import RarityFilter from "./RarityFilter";
import TalentFilter from "./TalentFilter";
import CommonMatFilter from "./CommonMatFilter";
import BossMatFilter from "./BossMatFilter";
import WeeklyBossMatFilter from "./WeeklyBossMatFilter";
import LocalSpecialtyFilter from "./LocalSpecialtyFilter";
import NationFilter from "./NationFilter";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} {...props} />
))(() => ({
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: "dodgerblue" }} />}
        {...props}
    />
))(() => ({
    backgroundColor: "rgb(9, 24, 39)",
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: "10px",
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
    backgroundColor: "rgb(9, 24, 39)",
    padding: "10px",
}));

const CharacterFilters = () => {
    return (
        <div style={{
            margin: "auto",
            width: "85%",
            marginLeft: "35px",
        }}>
            <Paper variant="outlined" square sx={{
                color: "white",
                backgroundColor: "rgb(0, 30, 60)",
                border: "2px solid rgb(30, 73, 118)",
                borderRadius: "5px",
            }}>
                <Typography variant="h6" sx={{
                    ml: "15px",
                    my: "10px",
                    fontFamily: "Genshin, sans-serif",
                }}>Filters
                </Typography>

                {/* ELEMENT */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="element-filter-text" sx={{ fontFamily: "Genshin", color: "white" }}>Element</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ElementFilter />
                    </AccordionDetails>
                </Accordion>

                {/* WEAPON */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="weapon-filter-text" sx={{ fontFamily: "Genshin", color: "white" }}>Weapon</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <WeaponFilter />
                    </AccordionDetails>
                </Accordion>

                {/* RARITY */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="rarity-filter-text" sx={{ fontFamily: "Genshin", color: "white" }}>Rarity</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <RarityFilter />
                    </AccordionDetails>
                </Accordion>

                {/* TALENT BOOK */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="talent-filter-text" sx={{ fontFamily: "Genshin", color: "white" }}>Talent Book</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TalentFilter />
                    </AccordionDetails>
                </Accordion>

                {/* COMMON MATERIAL */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="common-filter-text" sx={{ fontFamily: "Genshin", color: "white" }}>Common Material</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <CommonMatFilter />
                    </AccordionDetails>
                </Accordion>

                {/* NORMAL BOSS */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="boss-filter-text" sx={{ fontFamily: "Genshin", color: "white" }}>Normal Boss</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <BossMatFilter />
                    </AccordionDetails>
                </Accordion>

                {/* WEEKLY BOSS */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="weeklyboss-filter-text" sx={{ fontFamily: "Genshin", color: "white" }}>Weekly Boss</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <WeeklyBossMatFilter />
                    </AccordionDetails>
                </Accordion>

                {/* LOCAL SPECIALTY */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="local-filter-text" sx={{ fontFamily: "Genshin", color: "white" }}>Local Specialty</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <LocalSpecialtyFilter />
                    </AccordionDetails>
                </Accordion>

                {/* NATION */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="nation-filter-text" sx={{ fontFamily: "Genshin", color: "white" }}>Nation</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <NationFilter />
                    </AccordionDetails>
                </Accordion>

            </Paper>
        </div>
    )
}

export default CharacterFilters;