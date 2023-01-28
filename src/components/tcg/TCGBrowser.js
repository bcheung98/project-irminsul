import * as React from "react";
import { styled } from '@mui/material/styles';
import { connect } from "react-redux";
import { Box } from "@mui/system";
import { Typography, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import TCGCharacterCard from "./TCGCharacterCard";
import TCGActionCard from "./TCGActionCard";

const StyledToggleButton = styled(ToggleButton)(() => ({
    "&.MuiToggleButton-root": {
        "&.Mui-selected": {
            backgroundColor: "rgb(0, 127, 255)"
        }
    }
}));

const FilterTCGActionCards = (cards, filters) => {
    if (filters.length > 0) {
        cards = cards.filter(card => filters.includes(card.subType));
    }
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

    const buttons = [
        <StyledToggleButton value="">
            <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif", color: "white" }}>General</Typography>
        </StyledToggleButton>,
        <StyledToggleButton value="Artifact">
            <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif", color: "white" }}>Artifact</Typography>
        </StyledToggleButton>,
        <StyledToggleButton value="Companion">
            <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif", color: "white" }}>Companion</Typography>
        </StyledToggleButton>,
        <StyledToggleButton value="Elemental Resonance">
            <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif", color: "white" }}>Elemental Resonance</Typography>
        </StyledToggleButton>,
        <StyledToggleButton value="Food">
            <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif", color: "white" }}>Food</Typography>
        </StyledToggleButton>,
        <StyledToggleButton value="Item">
            <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif", color: "white" }}>Item</Typography>
        </StyledToggleButton>,
        <StyledToggleButton value="Location">
            <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif", color: "white" }}>Location</Typography>
        </StyledToggleButton>,
        <StyledToggleButton value="Talent">
            <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif", color: "white" }}>Talent</Typography>
        </StyledToggleButton>,
        <StyledToggleButton value="Weapon">
            <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif", color: "white" }}>Weapon</Typography>
        </StyledToggleButton>,
    ]


    let { cards } = props;

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
                <Stack direction="row" spacing={4}>
                    <ToggleButtonGroup value={view} exclusive onChange={handleView} sx={{ border: "1px solid rgb(30, 73, 118)" }}>
                        <StyledToggleButton value="char">
                            <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif", color: "white" }}>Character Cards</Typography>
                        </StyledToggleButton>
                        <StyledToggleButton value="action">
                            <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif", color: "white" }}>Action Cards</Typography>
                        </StyledToggleButton>
                    </ToggleButtonGroup>
                </Stack>
            </Box>

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
                            <ToggleButtonGroup value={filters} onChange={handleFilters} sx={{ border: "1px solid rgb(30, 73, 118)", mx: "30px", mb: "20px" }}>
                                {buttons}
                            </ToggleButtonGroup>
                            <Grid item xs={9}>
                                <Grid container>
                                    {FilterTCGActionCards(cards.cards[1].cards, filters).sort((a, b) => a.subType > b.subType ? 1 : -1).map(card => <TCGActionCard key={card.name} card={card} />)}
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
        cards: state.cards
    }
}


export default connect(mapStateToProps)(TCGBrowser);