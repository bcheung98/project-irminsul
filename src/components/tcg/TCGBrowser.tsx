import * as React from "react"
import { connect, useDispatch } from "react-redux"

// Component imports
import TCGCharacterCard from "./TCGCharacterCard"
import TCGActionCard from "./TCGActionCard"
import TCGDeck from "./TCGDeck"
import TCGCharacterCardFilters from "./filters/character/_TCGCharacterCardFilters"
import TCGActionCardFilters from "./filters/action/_TCGActionCardFilters"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { Box, Typography, ToggleButtonGroup, Paper, InputBase, Radio, RadioGroup, FormControlLabel } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

// Helper imports
import { filterTCGCharacterCards } from "../../helpers/FilterTCGCharacterCards"
import { filterTCGActionCards } from "../../helpers/FilterTCGActionCards"
import { CustomToggleButtonText } from "../../helpers/CustomToggleButton"
import { clearCharacterFilters } from "../../redux/reducers/TCGCharacterFilterReducer"
import { clearActionFilters } from "../../redux/reducers/TCGActionFilterReducer"

// Type imports
import { RootState } from "../../redux/store"
import { TCGCardData } from "../../types/TCGData"
import { TCGDeckData } from "../../types/TCGDeckData"

// Filters out Character Cards that are already in the deck, then sorts them based on the selected option
function CurrentCharacterCards(cards: TCGCardData[], deck: TCGDeckData[], sortBy: string) {
    let deckNames = deck.map(card => card.name)
    let charCardResult = cards.filter(card => !deckNames.includes(card.name))
    if (sortBy === "name") return charCardResult.sort((a, b) => a.name.localeCompare(b.name))
    if (sortBy === "element") return charCardResult.sort((a, b) => a.element.localeCompare(b.element) || a.name.localeCompare(b.name))
    if (sortBy === "weapon") return charCardResult.sort((a, b) => a.weapon.localeCompare(b.weapon) || a.name.localeCompare(b.name))
    if (sortBy === "energy") return charCardResult.sort((a: any, b: any) => b.talents.burst.energy - a.talents.burst.energy || a.name.localeCompare(b.name))
}

// Filters out Action Cards that have been added twice to the deck, then sorts them based on the selected option
function CurrentActionCards(cards: TCGCardData[], deck: TCGDeckData[], sortBy: string) {
    let deckNames = deck.map(card => card.name)
    let counts: { [propName: string]: number } = {}
    deckNames.forEach((card: string) => counts[card as keyof {}] === undefined ? counts[card] = 1 : counts[card] += 1)
    let actionCardResult = cards.filter(card => counts[card.name as keyof {}] !== 2)
    if (sortBy === "name") return actionCardResult.sort((a, b) => a.name.localeCompare(b.name))
    if (sortBy === "cardGroup") return actionCardResult.sort((a, b) => a.subType.localeCompare(b.subType) || a.name.localeCompare(b.name))
}

function TCGBrowser(props: any) {

    const theme = useTheme()

    const dispatch = useDispatch()

    let { cards, deck, cardCharFilters, cardActionFilters } = props

    const [charSearchValue, setCharSearchValue] = React.useState("")
    const handleCharInputChange = (event: React.BaseSyntheticEvent) => {
        setCharSearchValue(event.target.value)
    }

    const [actionSearchValue, setActionSearchValue] = React.useState("")
    const handleActionInputChange = (event: React.BaseSyntheticEvent) => {
        setActionSearchValue(event.target.value)
    }

    const [charRadioValue, setCharRadioValue] = React.useState("name")
    const handleCharRadioChange = (event: React.BaseSyntheticEvent) => {
        setCharRadioValue(event.target.value)
    }

    const [actionRadioValue, setActionRadioValue] = React.useState("name")
    const handleActionRadioChange = (event: React.BaseSyntheticEvent) => {
        setActionRadioValue(event.target.value)
    }

    const [view, setView] = React.useState("char")
    const handleView = (event: React.BaseSyntheticEvent, newView: string) => {
        if (newView !== null) {
            setView(newView)

            // Clear filter and search values when switching between Character and Action Card view
            dispatch(clearCharacterFilters())
            dispatch(clearActionFilters())
            setCharSearchValue("")
            setActionSearchValue("")
        }
    }

    const SearchBar = {
        border: `2px solid ${theme.border.color}`,
        borderRadius: "5px",
        backgroundColor: `${theme.table.body.backgroundColor}`,
        display: "flex",
        height: "40px",
        width: "89%",
        margin: "auto",
        mb: "10px"
    }

    const SearchBarInput = {
        marginLeft: "10px",
        flex: 1,
        color: `${theme.text.color}`,
        fontFamily: "Genshin, sans-serif",
    }

    document.title = "TCG - Project Irminsul"

    return (
        <React.Fragment>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
                }}
            >
                <Typography
                    variant="h4"
                    noWrap
                    component="a"
                    sx={{
                        mx: "25px",
                        my: "20px",
                        display: { xs: "none", md: "flex" },
                        fontFamily: "Genshin, sans-serif",
                        letterSpacing: ".2rem",
                        color: `${theme.text.color}`,
                        textDecoration: "none",
                        textAlign: "center",
                    }}
                >
                    TCG
                </Typography>
            </Box>

            <TCGDeck cards={deck.deck} />

            <ToggleButtonGroup value={view} exclusive onChange={handleView} sx={{ mx: "30px", mb: "30px" }}>
                <CustomToggleButtonText value="char">
                    <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Character Cards</Typography>
                </CustomToggleButtonText>
                <CustomToggleButtonText value="action">
                    <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Action Cards</Typography>
                </CustomToggleButtonText>
            </ToggleButtonGroup>

            {/* Cards */}
            {
                cards.cards.length > 0 &&
                (
                    view === "char" ?
                        <Grid container >
                            <Grid xs={9.5}>
                                <Grid container sx={{ ml: "15px" }} xs={9}>
                                    {filterTCGCharacterCards(CurrentCharacterCards(cards.cards[0].cards, deck.deck.characterCards, charRadioValue), cardCharFilters, charSearchValue).map(card => <TCGCharacterCard key={card.name} char={card} preview={false} />)}
                                </Grid>
                            </Grid>
                            <Grid xs>
                                <Paper sx={SearchBar}>
                                    <InputBase
                                        sx={SearchBarInput}
                                        placeholder="Search"
                                        onChange={handleCharInputChange}
                                        value={charSearchValue}
                                    />
                                </Paper>
                                <TCGCharacterCardFilters />
                                <Box
                                    sx={{
                                        margin: "auto",
                                        mt: "15px",
                                        width: "90%",
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
                                        <Typography variant="h6" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}`, ml: "5px", p: "10px" }}>
                                            Sort by
                                        </Typography>
                                        <Box sx={{ p: "10px", backgroundColor: `${theme.paper.backgroundColor}` }}>
                                            <RadioGroup
                                                value={charRadioValue}
                                                onChange={handleCharRadioChange}
                                                sx={{ ml: "5px" }}
                                            >
                                                <FormControlLabel value="name" control={<Radio size="small" sx={{ color: `${theme.text.color}` }} />} label={<Typography variant="body1" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Name</Typography>} />
                                                <FormControlLabel value="element" control={<Radio size="small" sx={{ color: `${theme.text.color}` }} />} label={<Typography variant="body1" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Element</Typography>} />
                                                <FormControlLabel value="weapon" control={<Radio size="small" sx={{ color: `${theme.text.color}` }} />} label={<Typography variant="body1" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Weapon</Typography>} />
                                                <FormControlLabel value="energy" control={<Radio size="small" sx={{ color: `${theme.text.color}` }} />} label={<Typography variant="body1" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Burst Cost</Typography>} />
                                            </RadioGroup>
                                        </Box>
                                    </Paper>
                                </Box>
                            </Grid>
                        </Grid>
                        :
                        <Grid container>
                            <Grid xs={9.5}>
                                <Grid container sx={{ ml: "15px" }} xs={9}>
                                    {filterTCGActionCards(CurrentActionCards(cards.cards[1].cards, deck.deck.actionCards, actionRadioValue), cardActionFilters, actionSearchValue).map(card => <TCGActionCard key={card.name} card={card} preview={false} />)}
                                </Grid>
                            </Grid>
                            <Grid xs>
                                <Paper sx={SearchBar}>
                                    <InputBase
                                        sx={SearchBarInput}
                                        placeholder="Search"
                                        onChange={handleActionInputChange}
                                        value={actionSearchValue}
                                    />
                                </Paper>
                                <TCGActionCardFilters />
                                <Box
                                    sx={{
                                        margin: "auto",
                                        mt: "15px",
                                        width: "90%",
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
                                        <Typography variant="h6" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}`, ml: "5px", p: "10px" }}>
                                            Sort by
                                        </Typography>
                                        <Box sx={{ p: "10px", backgroundColor: `${theme.paper.backgroundColor}` }}>
                                            <RadioGroup
                                                value={actionRadioValue}
                                                onChange={handleActionRadioChange}
                                                sx={{ ml: "5px" }}
                                            >
                                                <FormControlLabel value="name" control={<Radio size="small" sx={{ color: `${theme.text.color}` }} />} label={<Typography variant="body1" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Name</Typography>} />
                                                <FormControlLabel value="cardGroup" control={<Radio size="small" sx={{ color: `${theme.text.color}` }} />} label={<Typography variant="body1" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Card Group</Typography>} />
                                            </RadioGroup>
                                        </Box>
                                    </Paper>
                                </Box>
                            </Grid>
                        </Grid>
                )
            }
        </React.Fragment>
    )
}

const mapStateToProps = (state: RootState) => ({
    cards: state.cards,
    deck: state.deck,
    cardCharFilters: state.cardCharFilters,
    cardActionFilters: state.cardActionFilters
})

export default connect(mapStateToProps)(TCGBrowser)