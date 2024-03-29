import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux";
import { Box } from "@mui/system";
import { Typography, Paper, Button, Dialog, InputBase } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Accordion, AccordionDetails, AccordionSummary } from "../../helpers/CustomAccordion";
import TCGCharacterCard from "./TCGCharacterCard";
import TCGActionCard from "./TCGActionCard";

const TCGDeck = (props) => {

    const theme = useTheme();

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [inputValue, setInputValue] = React.useState("");
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const saveDeck = (deck) => {
        if (deck.characterCards.length > 0 || deck.actionCards.length > 0) {
            let deckData = JSON.stringify(deck);
            let blob = new Blob([deckData], { type: "text/plain" });
            let URL = window.URL.createObjectURL(blob);
            let link = document.createElement("a");
            link.download = `${deck.name}.deck`;
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

    const renameDeck = (e) => {
        e.preventDefault();
        if (inputValue !== "") {
            props.renameDeck(inputValue);
            handleClose();
        }
    }

    let { deck } = props;
    let characterCards = deck.deck.characterCards;
    let actionCards = deck.deck.actionCards;

    return (
        <Box sx={{ mx: "30px", mb: "20px" }}>
            <Paper variant="outlined"
                sx={{
                    color: `${theme.text.color}`,
                    backgroundColor: `${theme.table.body.backgroundColor}`,
                    border: `2px solid ${theme.border.color}`,
                    borderRadius: "5px",
                    mb: "10px",
                }}
            >
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}`, }}>
                            {deck.deck.name} — ({characterCards.length}/3 Character Cards, {actionCards.length}/30 Action Cards)
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Button onClick={() => saveDeck(deck.deck)}
                            variant="contained"
                            sx={{
                                ml: "20px",
                                mt: "5px",
                                mb: "30px",
                                backgroundColor: "rgb(0, 127, 255)"
                            }}>
                            <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}`, }}>
                                Save Deck
                            </Typography>
                        </Button>
                        <Button
                            variant="contained"
                            component="label"
                            sx={{
                                ml: "10px",
                                mt: "5px",
                                mb: "30px",
                                backgroundColor: "rgb(0, 127, 255)"
                            }}>
                            <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}`, }}>
                                Load Deck
                            </Typography>
                            <input id="deck-input" hidden accept=".deck" type="file" onChange={(e) => getDeckFromFile(e.target.files[0])} />
                        </Button>
                        <Button onClick={() => handleClickOpen()}
                            variant="contained"
                            sx={{
                                ml: "10px",
                                mt: "5px",
                                mb: "30px",
                                backgroundColor: "rgb(0, 127, 255)"
                            }}>
                            <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}`, }}>
                                Rename Deck
                            </Typography>
                        </Button>
                        <Grid container>
                            {characterCards.map(card => <TCGCharacterCard key={card.name} char={card} preview={false} />)}
                        </Grid>
                        <Grid container>
                            {actionCards.map((card, index) => <TCGActionCard key={index} card={card} preview={false} />)}
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Paper>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth={false}
            >
                <Box
                    component="form"
                    sx={{
                        width: "250px",
                        border: "2px solid rgb(30, 73, 118)",
                        borderRadius: "5px",
                        backgroundColor: "rgb(0, 30, 60)",
                        p: "10px",
                    }}
                    onSubmit={renameDeck}
                >
                    <InputBase
                        sx={{
                            marginLeft: "10px",
                            flex: 1,
                            px: "10px",
                            color: `${theme.text.color}`,
                            backgroundColor: "rgb(9, 24, 39)",
                            border: "2px solid rgb(30, 73, 118)",
                            borderRadius: "5px",
                            fontFamily: "Genshin, sans-serif",
                        }}
                        placeholder="Deck Name"
                        onChange={handleInputChange}
                    />
                    <Button
                        onClick={renameDeck}
                        variant="contained"
                        sx={{
                            ml: "10px",
                            mt: "15px",
                            mb: "5px",
                            backgroundColor: "rgb(0, 127, 255)"
                        }}>
                        <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}`, }}>
                            Rename
                        </Typography>
                    </Button>
                    <Button
                        onClick={handleClose}
                        color="error"
                        variant="contained"
                        sx={{
                            ml: "10px",
                            mt: "15px",
                            mb: "5px",
                        }}>
                        <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}`, }}>
                            Cancel
                        </Typography>
                    </Button>
                </Box>
            </Dialog>
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
        loadDeck: (deck) => dispatch({ type: "LOAD_DECK", deck }),
        renameDeck: (name) => dispatch({ type: "RENAME_DECK", name })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TCGDeck);