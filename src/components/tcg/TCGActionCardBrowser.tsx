import { useSelector } from "react-redux"

// Component imports
import TCGActionCard from "./TCGActionCard"

// MUI imports
import Grid from "@mui/material/Grid2"

// Helper imports
import { filterTCGActionCards } from "../../helpers/filterTCGActionCards"
import { selectDeck } from "../../redux/reducers/TCGDeckReducer"

// Type imports
import { RootState } from "../../redux/store"
import { TCGActionCard as TCGActionCardType, TCGDeck } from "types/tcg"

function TCGActionCardBrowser({ searchValue }: { searchValue: string }) {

    const cardActionFilters = useSelector((state: RootState) => state.cardActionFilters)
    const cards = useSelector((state: RootState) => state.cards.actionCards)
    const deck = useSelector(selectDeck)

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

export default TCGActionCardBrowser

// Filters out Action Cards that have been added twice to the deck, then sorts them based on the selected option
function CurrentActionCards(cards: TCGActionCardType[], deck: TCGDeck) {
    const deckNames = deck.actionCards.map(card => card.name)
    const counts: { [cardName: string]: number } = {}
    deckNames.forEach((card: string) => counts[card] === undefined ? counts[card] = 1 : counts[card] += 1)
    return cards.filter(card => counts[card.name] !== 2)
}