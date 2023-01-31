import * as React from "react";
import { styled } from '@mui/material/styles';
import { Box } from "@mui/system";
import { Typography, Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import TCGCharacterCard from "./TCGCharacterCard";
import TCGActionCard from "./TCGActionCard";

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
    padding: "15px",
}));

const TCGDeck = (props) => {

    let { cards } = props;

    return (
        <Box sx={{ mx: "20px", mb: "20px" }}>
            <Paper variant="outlined" sx={{
                color: "white",
                backgroundColor: "rgb(0, 30, 60)",
                border: "2px solid rgb(30, 73, 118)",
                borderRadius: "5px",
                mb: "10px",
            }}>
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" sx={{ fontFamily: "Genshin, sans-serif", color: "white", }}>Deck ({cards.characterCards.length}, {cards.actionCards.length})</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container>
                            {cards.characterCards.map(card => <TCGCharacterCard key={card.name} char={card} />)}
                        </Grid>
                        <Grid container>
                            {cards.actionCards.map((card, index) => <TCGActionCard key={index} card={card} />)}
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Paper>
        </Box>
    )
}

export default TCGDeck;