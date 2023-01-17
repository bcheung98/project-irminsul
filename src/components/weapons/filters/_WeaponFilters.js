import * as React from "react";
import { styled } from '@mui/material/styles';
import "../../../css/filters.css";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { Typography, Paper } from "@mui/material";
import { Box } from "@mui/system";
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import WeaponTypeFilter from "./WeaponTypeFilter";
import WeaponRarityFilter from "./WeaponRarityFilter";
import WeaponSubstatFilter from "./WeaponSubstatFilter";

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

const WeaponFilters = () => {
    return (
        <Box
            sx={{
                m: "auto",
                width: "85%",
                ml: "35px",
            }}
        >
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

                {/* WEAPON */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="wep-weapon-filter-text" sx={{ fontFamily: "Genshin", color: "white" }}>Weapon</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <WeaponTypeFilter />
                    </AccordionDetails>
                </Accordion>

                {/* RARITY */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="wep-rarity-filter-text" sx={{ fontFamily: "Genshin", color: "white" }}>Rarity</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <WeaponRarityFilter />
                    </AccordionDetails>
                </Accordion>

                {/* SUBSTAT */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="wep-substat-filter-text" sx={{ fontFamily: "Genshin", color: "white" }}>Substat</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <WeaponSubstatFilter />
                    </AccordionDetails>
                </Accordion>

            </Paper>
        </Box>
    )
}

export default WeaponFilters;