import * as React from "react";
import { styled } from '@mui/material/styles';
import { connect } from "react-redux";
import { Box } from "@mui/system";
import { Typography, ToggleButton, ToggleButtonGroup, Paper, InputBase } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import TCGCharacterCard from "./TCGCharacterCard";
import TCGActionCard from "./TCGActionCard";
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import { MaterialTooltip } from "../../helpers/MaterialTooltip";
import TCGDeck from "./TCGDeck";

const StyledToggleButton = styled(ToggleButton)(() => ({
    "&.MuiToggleButton-root": {
        border: "1px solid rgb(30, 73, 118)",
        "&.Mui-selected": {
            backgroundColor: "rgb(0, 127, 255)"
        }
    }
}));

const FilterTCGActionCards = (cardList, filters, searchValue) => {
    let cards = [...cardList];
    if (filters.length > 0) {
        cards = cards.filter(card => filters.includes(card.subType));
    }
    if (searchValue !== "") {
        cards = cards.filter(card => card.name.toLowerCase().includes(searchValue.toLowerCase()));
    }
    /*    
    Don't ask why I'm sorting twice here. 
    I honestly don't know why but this is the only way I could keep the cards alphabetically sorted.
    Maybe I'm just a doofus who doesn't know how array.sort() actually works. 
    */
    cards.sort((a, b) => a.subType.toLowerCase() > b.subType.toLowerCase() ? 1 : -1);
    cards.sort((a, b) => a.subType.toLowerCase() > b.subType.toLowerCase() ? 1 : -1);
    return cards;
}

const TCGBrowser = (props) => {

    const [view, setView] = React.useState("char");
    const handleView = (event, newView) => {
        if (newView !== null) {
            setView(newView);
        }
    }

    const [filters, setFilters] = React.useState([]);
    const handleFilters = (event, newFilters) => {
        setFilters(newFilters);
    }

    const [searchValue, setSearchValue] = React.useState("");
    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    }

    const buttons = [
        <StyledToggleButton value="" key="General">
            <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif", color: "white" }}>General</Typography>
        </StyledToggleButton>,
        <StyledToggleButton value="Artifact" key="Artifact">
            <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif", color: "white" }}>Artifact</Typography>
        </StyledToggleButton>,
        <StyledToggleButton value="Companion" key="Companion">
            <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif", color: "white" }}>Companion</Typography>
        </StyledToggleButton>,
        <StyledToggleButton value="Elemental Resonance" key="Elemental Resonance">
            <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif", color: "white" }}>Elemental Resonance</Typography>
        </StyledToggleButton>,
        <StyledToggleButton value="Food" key="Food">
            <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif", color: "white" }}>Food</Typography>
        </StyledToggleButton>,
        <StyledToggleButton value="Item" key="Item">
            <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif", color: "white" }}>Item</Typography>
        </StyledToggleButton>,
        <StyledToggleButton value="Location" key="Location">
            <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif", color: "white" }}>Location</Typography>
        </StyledToggleButton>,
        <StyledToggleButton value="Talent" key="Talent">
            <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif", color: "white" }}>Talent</Typography>
        </StyledToggleButton>,
        <StyledToggleButton value="Weapon" key="Weapon">
            <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif", color: "white" }}>Weapon</Typography>
        </StyledToggleButton>,
    ]

    let { cards, deck } = props;

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
                        color: "white",
                        textDecoration: "none",
                        textAlign: "center",
                    }}
                >
                    TCG
                </Typography>
                {/* WIP tag, don't forget to remove later */}
                <MaterialTooltip title="WIP, will be adding more features later!">
                    <InfoSharpIcon sx={{ mr: "20px" }} color="primary" fontSize="large" />
                </MaterialTooltip>
            </Box>

            <TCGDeck cards={deck.deck} />

            <ToggleButtonGroup value={view} exclusive onChange={handleView} sx={{ mx: "30px", mb: "30px" }}>
                <StyledToggleButton value="char">
                    <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif", color: "white" }}>Character Cards</Typography>
                </StyledToggleButton>
                <StyledToggleButton value="action">
                    <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif", color: "white" }}>Action Cards</Typography>
                </StyledToggleButton>
            </ToggleButtonGroup>

            {/* Cards */}
            {
                cards.cards.length > 0 &&
                (
                    view === "char" ?
                        <Grid item xs={9}>
                            <Grid container>
                                {cards.cards[0].cards.map(card => <TCGCharacterCard key={card.name} char={card} />)}
                            </Grid>
                        </Grid>
                        :
                        <React.Fragment>
                            <Box
                                sx={{
                                    display: "flex",
                                    mt: "-15px",
                                    mb: "20px",
                                    mx: "30px",
                                }}
                            >
                                <ToggleButtonGroup value={filters} onChange={handleFilters}>
                                    {buttons}
                                </ToggleButtonGroup>
                                <Paper sx={{
                                    border: "2px solid rgb(30, 73, 118)",
                                    borderRadius: "5px",
                                    backgroundColor: "rgb(0, 30, 60)",
                                    display: "flex",
                                    height: "40px",
                                    width: "30%",
                                    mx: "15px",
                                }}>
                                    <InputBase
                                        sx={{
                                            marginLeft: "10px",
                                            flex: 1,
                                            color: "white",
                                            fontFamily: "Genshin, sans-serif",
                                        }}
                                        placeholder="Search"
                                        onChange={handleInputChange}
                                    />
                                </Paper>
                            </Box>
                            <Grid item xs={9}>
                                <Grid container>
                                    {FilterTCGActionCards(cards.cards[1].cards, filters, searchValue).map(card => <TCGActionCard key={card.name} card={card} />)}
                                </Grid>
                            </Grid>
                        </React.Fragment>
                )
            }
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        cards: state.cards,
        deck: state.deck
    }
}

export default connect(mapStateToProps)(TCGBrowser);