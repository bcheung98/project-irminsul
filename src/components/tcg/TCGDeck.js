import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import TCGCharacterCard from "./TCGCharacterCard";
import TCGActionCard from "./TCGActionCard";

const TCGDeck = (props) => {

    let { cards } = props;

    return (
        <React.Fragment>
            <Grid container>
                {cards.characterCards.map(card => <TCGCharacterCard key={card.name} char={card} />)}
            </Grid>
            <Grid container>
                {cards.actionCards.map((card, index) => <TCGActionCard key={index} card={card} />)}
            </Grid>

        </React.Fragment>
    )
}

export default TCGDeck;