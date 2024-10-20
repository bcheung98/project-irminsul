import { connect } from "react-redux"

// Component imports
import TCGActionCard from "./TCGActionCard"

// MUI imports
import Grid from "@mui/material/Grid2"

// Helper imports
import { filterTCGActionCards } from "../../helpers/filterTCGActionCards"

// Type imports
import { RootState } from "../../redux/store"
import { TCGCardData } from "../../types/tcg/TCGData"

function TCGActionCardBrowser(props: any) {

    let { searchValue, cardActionFilters } = props

    if (props.cards.cards[1] !== undefined) {

        let cards = props.cards.cards[1].cards
        let deck = props.deck.deck.actionCards

        return (
            <Grid container spacing={3}>
                <Grid size="grow">
                    <Grid container rowSpacing={3} columnSpacing={0}>
                        {
                            filterTCGActionCards(CurrentActionCards(cards, deck), cardActionFilters, searchValue)
                                .map(card => <TCGActionCard key={card.name} card={card} preview={false} />)
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
    cardActionFilters: state.cardActionFilters
})

export default connect(mapStateToProps)(TCGActionCardBrowser)

// Filters out Action Cards that have been added twice to the deck, then sorts them based on the selected option
function CurrentActionCards(cards: TCGCardData[], deck: TCGCardData[]) {
    let deckNames = deck.map(card => card.name)
    let counts: { [propName: string]: number } = {}
    deckNames.forEach((card: string) => counts[card as keyof {}] === undefined ? counts[card] = 1 : counts[card] += 1)
    return cards.filter(card => counts[card.name as keyof {}] !== 2)
}