import * as React from "react"
import { connect, useDispatch } from "react-redux"

// Component imports
import TCGCharacterCard from "./TCGCharacterCard"
import TCGActionCard from "./TCGActionCard"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { Box, Typography, Paper, Button, Dialog, InputBase } from "@mui/material"
import Grid from "@mui/material/Grid2"

// Helper imports
import { loadDeck, renameDeck } from "../../redux/reducers/DeckReducer"
import { Accordion, AccordionDetails, AccordionSummary } from "../_custom/CustomAccordion"

// Type imports
import { RootState } from "../../redux/store"
import { TCGCardData } from "../../types/tcg/TCGData"
import { TCGDeckData } from "../../types/tcg/TCGDeckData"

function TCGDeck(props: any) {

    const theme = useTheme()

    const dispatch = useDispatch()

    const [open, setOpen] = React.useState(false)
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const [inputValue, setInputValue] = React.useState("")
    const handleInputChange = (event: React.BaseSyntheticEvent) => {
        setInputValue(event.target.value)
    }

    const saveDeck = (deck: TCGDeckData) => {
        if (deck.characterCards.length > 0 || deck.actionCards.length > 0) {
            let deckData = JSON.stringify(deck)
            let file = new Blob([deckData], { type: "text/plain" })
            let URL = window.URL.createObjectURL(file)
            let link = document.createElement("a")
            link.download = `${deck.name}.deck`
            link.href = URL
            link.click()
            window.URL.revokeObjectURL(URL)
        }
        else {
            alert("Cannot save an empty deck!")
        }
    }

    const getDeckFromFile = (file: Blob) => {
        const reader = new FileReader()
        reader.onload = (event) => {
            let deckData = JSON.parse(event.target!.result as string)
            dispatch(loadDeck(deckData))
        }
        reader.readAsText(file, "UTF-8")
    }

    const renameTCGDeck = (event: React.BaseSyntheticEvent) => {
        event.preventDefault()
        if (inputValue !== "") {
            dispatch(renameDeck(inputValue))
            handleClose()
        }
    }

    let { deck } = props
    let characterCards = deck.deck.characterCards
    let actionCards = deck.deck.actionCards

    return (
        <Box>
            <Paper variant="outlined"
                sx={{
                    color: `${theme.text.color}`,
                    backgroundColor: `${theme.table.body.backgroundColor}`,
                    border: `2px solid ${theme.border.color}`,
                    borderRadius: "5px",
                }}
            >
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}`, }}>
                            {deck.deck.name} — ({characterCards.length}/3 Character Cards, {actionCards.length}/30 Action Cards)
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box sx={{ mt: "5px", mb: "30px" }}>
                            <Button onClick={() => saveDeck(deck.deck)}
                                variant="contained"
                                sx={{
                                    ml: "10px",
                                    mb: "10px",
                                    backgroundColor: "rgb(0, 127, 255)"
                                }}>
                                <Typography variant="body2" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}`, }}>
                                    Save Deck
                                </Typography>
                            </Button>
                            <Button
                                variant="contained"
                                component="label"
                                sx={{
                                    ml: "10px",
                                    mb: "10px",
                                    backgroundColor: "rgb(0, 127, 255)"
                                }}>
                                <Typography variant="body2" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}`, }}>
                                    Load Deck
                                </Typography>
                                <input id="deck-input" hidden accept=".deck" type="file" onChange={(event: React.BaseSyntheticEvent) => getDeckFromFile(event.target.files[0])} />
                            </Button>
                            <Button onClick={() => handleClickOpen()}
                                variant="contained"
                                sx={{
                                    ml: "10px",
                                    mb: "10px",
                                    backgroundColor: "rgb(0, 127, 255)"
                                }}>
                                <Typography variant="body2" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}`, }}>
                                    Rename Deck
                                </Typography>
                            </Button>
                        </Box>
                        <Grid container>
                            {(characterCards as TCGCardData[]).map(card => <TCGCharacterCard key={card.name} char={card} preview={false} />)}
                        </Grid>
                        <br />
                        <Grid container>
                            {(actionCards as TCGCardData[]).map((card, index) => <TCGActionCard key={index} card={card} preview={false} />)}
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
                    onSubmit={renameTCGDeck}
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
                            fontFamily: `${theme.font.genshin.family}`,
                        }}
                        placeholder="Deck Name"
                        onChange={handleInputChange}
                    />
                    <Button
                        onClick={renameTCGDeck}
                        variant="contained"
                        sx={{
                            ml: "10px",
                            mt: "15px",
                            mb: "5px",
                            backgroundColor: "rgb(0, 127, 255)"
                        }}>
                        <Typography variant="body2" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}`, }}>
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
                        <Typography variant="body2" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}`, }}>
                            Cancel
                        </Typography>
                    </Button>
                </Box>
            </Dialog>
        </Box>
    )
}

const mapStateToProps = (state: RootState) => ({
    deck: state.deck
})

export default connect(mapStateToProps)(TCGDeck)