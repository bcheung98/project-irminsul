import * as React from "react";
import { connect } from "react-redux";
import { styled } from '@mui/material/styles';
import { Box } from "@mui/system";
import { Typography, Paper, Button } from "@mui/material";
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

    const saveDeck = (deck) => {
        if (deck.characterCards.length > 0 || deck.actionCards.length > 0) {
            let deckData = JSON.stringify(deck);
            let blob = new Blob([deckData], { type: "text/plain" });
            let URL = window.URL.createObjectURL(blob);
            let link = document.createElement("a");
            link.download = "deck.deck";
            link.href = URL;
            link.click();
            window.URL.revokeObjectURL(URL);
        }
        else {
            alert("Cannot save an empty deck!");
        }
    }

    const getDeckFromFile = (file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            let deckData = JSON.parse(e.target.result);
            props.loadDeck(deckData);
        }
        reader.readAsText(file, "UTF-8");
    }

    let { deck } = props;
    let characterCards = deck.deck.characterCards;
    let actionCards = deck.deck.actionCards;

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
                        <Typography variant="body1" sx={{ fontFamily: "Genshin, sans-serif", color: "white", }}>
                            Deck ({characterCards.length}, {actionCards.length})
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Button onClick={() => saveDeck(deck.deck)}
                            variant="contained"
                            sx={{
                                mx: "20px",
                                mt: "5px",
                                mb: "30px",
                                backgroundColor: "rgb(0, 127, 255)"
                            }}>
                            <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif", color: "white", }}>
                                Save Deck
                            </Typography>
                        </Button>
                        <Button
                            variant="contained"
                            component="label"
                            sx={{
                                mx: "20px",
                                mt: "5px",
                                mb: "30px",
                                backgroundColor: "rgb(0, 127, 255)"
                            }}>
                            <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif", color: "white", }}>
                                Load Deck
                            </Typography>
                            <input id="deck-input" hidden accept=".deck" type="file" onChange={(e) => getDeckFromFile(e.target.files[0])} />
                        </Button>
                        <Grid container>
                            {characterCards.map(card => <TCGCharacterCard key={card.name} char={card} />)}
                        </Grid>
                        <Grid container>
                            {actionCards.map((card, index) => <TCGActionCard key={index} card={card} />)}
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Paper>
        </Box>
    )
}

const mapStateToProps = (state) => {
    return {
        deck: state.deck
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadDeck: (deck) => dispatch({ type: "LOAD_DECK", deck })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TCGDeck);