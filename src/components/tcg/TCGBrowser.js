import * as React from "react";
import { connect } from "react-redux";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import TCGCharacterCard from "./TCGCharacterCard";

const TCGBrowser = (props) => {

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
            </Box>

            {/* Character Cards */}
            <Grid item xs={9}>
                <Grid container>
                    {cards.cards.length > 0 &&
                        <React.Fragment>
                            {cards.cards[0].cards.map(card => <TCGCharacterCard key={card.name} char={card} />)}
                        </React.Fragment>
                    }
                </Grid>
            </Grid>
        </React.Fragment>
    )

}

const mapStateToProps = (state) => {
    return {
        cards: state.cards
    }
}


export default connect(mapStateToProps)(TCGBrowser);