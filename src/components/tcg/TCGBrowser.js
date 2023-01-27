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

const TCGBrowser = (props) => {

    const [view, setView] = React.useState("char");

    const handleView = (event, newView) => {
        if (newView !== null) {
            setView(newView);
        }
    }


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
                <Grid item xs={9}>
                    <Grid container>
                        {
                            view === "char" ?
                                <React.Fragment>
                                    {cards.cards[0].cards.map(card => <TCGCharacterCard key={card.name} char={card} />)}
                                </React.Fragment>
                                :
                                <React.Fragment>
                                    {cards.cards[1].cards.sort((a, b) => a.subType > b.subType ? 1 : -1).map(card => <TCGActionCard key={card.name} card={card} />)}
                                </React.Fragment>
                        }
                    </Grid>
                </Grid>
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