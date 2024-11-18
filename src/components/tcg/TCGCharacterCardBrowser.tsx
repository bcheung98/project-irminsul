import { useSelector } from "react-redux"

// Component imports
import TCGCharacterCard from "./TCGCharacterCard"

// MUI imports
import Grid from "@mui/material/Grid2"

// Helper imports
import { filterTCGCharacterCards } from "../../helpers/filterTCGCharacterCards"
import { selectDeck } from "../../redux/reducers/TCGDeckReducer"

// Type imports
import { RootState } from "../../redux/store"
import { TCGCharacterCard as TCGCharacterCardType, TCGDeck } from "types/tcg"

function TCGCharacterCardBrowser({ searchValue }: { searchValue: string }) {

    const cardCharFilters = useSelector((state: RootState) => state.cardCharFilters)
    const cards = useSelector((state: RootState) => state.cards.characterCards)
    const deck = useSelector(selectDeck)

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

export default TCGCharacterCardBrowser

// Filters out Character Cards that are already in the deck, then sorts them based on the selected option
function CurrentCharacterCards(cards: TCGCharacterCardType[], deck: TCGDeck) {
    const deckNames = deck.characterCards.map(card => card.name)
    return cards.filter(card => !deckNames.includes(card.name))
}