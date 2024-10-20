import { connect } from "react-redux"

// Component imports
import TCGCharacterCard from "./TCGCharacterCard"

// MUI imports
import Grid from "@mui/material/Grid2"

// Helper imports
import { filterTCGCharacterCards } from "../../helpers/filterTCGCharacterCards"

// Type imports
import { RootState } from "../../redux/store"
import { TCGCardData } from "../../types/tcg/TCGData"

function TCGCharacterCardBrowser(props: any) {

    let { searchValue, cardCharFilters } = props

    if (props.cards.cards[0] !== undefined) {

        let cards = props.cards.cards[0].cards
        let deck = props.deck.deck.characterCards

        return (
            <Grid container spacing={3}>
                <Grid size="grow">
                    <Grid container rowSpacing={3} columnSpacing={0}>
                        {
                            filterTCGCharacterCards(CurrentCharacterCards(cards, deck), cardCharFilters, searchValue)
                                .map(card => <TCGCharacterCard key={card.name} char={card} preview={false} />)
                        }
                    </Grid>
                </Grid>
            </Grid>
        )
    }
    else {
        return (
            <>
            </>
        )
    }

}

const mapStateToProps = (state: RootState) => ({
    cards: state.cards,
    deck: state.deck,
    cardCharFilters: state.cardCharFilters,
})

export default connect(mapStateToProps)(TCGCharacterCardBrowser)

// Filters out Character Cards that are already in the deck, then sorts them based on the selected option
function CurrentCharacterCards(cards: TCGCardData[], deck: TCGCardData[]) {
    let deckNames = deck.map(card => card.name)
    return cards.filter(card => !deckNames.includes(card.name))
}