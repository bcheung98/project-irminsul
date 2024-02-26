import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { styled } from '@mui/material/styles';
import { connect } from "react-redux";
import { Box } from "@mui/system";
import { Typography, ToggleButton, ToggleButtonGroup, Paper, InputBase, Radio, RadioGroup, FormControlLabel } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import TCGCharacterCard from "./TCGCharacterCard";
import TCGActionCard from "./TCGActionCard";
import TCGDeck from "./TCGDeck";
import { filterTCGCharacterCards } from "../../helpers/FilterTCGCharacterCards";
import { filterTCGActionCards } from "../../helpers/FilterTCGActionCards";
import TCGCharacterCardFilter from "./filters/character/_TCGCharacterCardFilter";
import TCGActionCardFilter from "./filters/action/_TCGActionCardFilter";

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
    "&.MuiToggleButton-root": {
        border: `2px solid ${theme.border.color}`,
        "&.Mui-selected": {
            backgroundColor: "rgb(0, 127, 255)"
        }
    }
}));

// Filters out Character Cards that are already in the deck, then sorts them based on the selected option
const CurrentCharacterCards = (cards, deck, sortBy) => {
    let deckNames = deck.map(card => card.name);
    let charCardResult = cards.filter(card => !deckNames.includes(card.name));
    if (sortBy === "name") return charCardResult.sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === "element") return charCardResult.sort((a, b) => a.element.localeCompare(b.element) || a.name.localeCompare(b.name));
    if (sortBy === "weapon") return charCardResult.sort((a, b) => a.weapon.localeCompare(b.weapon) || a.name.localeCompare(b.name));
    if (sortBy === "energy") return charCardResult.sort((a, b) => b.talents.burst.energy - a.talents.burst.energy || a.name.localeCompare(b.name));
}

// Filters out Action Cards that have been added twice to the deck, then sorts them based on the selected option
const CurrentActionCards = (cards, deck, sortBy) => {
    let deckNames = deck.map(card => card.name);
    let counts = {};
    deckNames.forEach(card => counts[card] === undefined ? counts[card] = 1 : counts[card] += 1);
    let actionCardResult = cards.filter(card => counts[card.name] !== 2);
    if (sortBy === "name") return actionCardResult.sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === "cardGroup") return actionCardResult.sort((a, b) => a.subType.localeCompare(b.subType) || a.name.localeCompare(b.name));
}

const TCGBrowser = (props) => {

    const theme = useTheme();

    let { cards, deck, cardCharFilters, cardActionFilters } = props;

    const [charSearchValue, setCharSearchValue] = React.useState("");
    const handleCharInputChange = (e) => {
        setCharSearchValue(e.target.value);
    }

    const [actionSearchValue, setActionSearchValue] = React.useState("");
    const handleActionInputChange = (e) => {
        setActionSearchValue(e.target.value);
    }

    const [charRadioValue, setCharRadioValue] = React.useState("name");
    const handleCharRadioChange = (e) => {
        setCharRadioValue(e.target.value);
    }

    const [actionRadioValue, setActionRadioValue] = React.useState("name");
    const handleActionRadioChange = (e) => {
        setActionRadioValue(e.target.value);
    }

    const [view, setView] = React.useState("char");
    const handleView = (event, newView) => {
        if (newView !== null) {
            setView(newView);

            // Clear filter and search values when switching between Character and Action Card view
            props.clearCharFilters();
            props.clearActionFilters();
            setCharSearchValue("");
            setActionSearchValue("");
        }
    }

    const SearchBar = {
        border: `2px solid ${theme.border.color}`,
        borderRadius: "5px",
        backgroundColor: "rgb(0, 30, 60)",
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
                <StyledToggleButton value="char">
                    <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Character Cards</Typography>
                </StyledToggleButton>
                <StyledToggleButton value="action">
                    <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Action Cards</Typography>
                </StyledToggleButton>
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
                                <TCGCharacterCardFilter />
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
                                <TCGActionCardFilter />
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

const mapStateToProps = (state) => {
    return {
        cards: state.cards,
        deck: state.deck,
        cardCharFilters: state.cardCharFilters,
        cardActionFilters: state.cardActionFilters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearCharFilters: () => dispatch({ type: "TCGCHAR_CLEAR_FILTERS" }),
        clearActionFilters: () => dispatch({ type: "TCGACTION_CLEAR_FILTERS" })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TCGBrowser);