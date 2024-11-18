import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { TCGCharacterCard, TCGActionCard } from "types/tcg"
import { TCGDeck } from "types/tcg"
import { RootState } from "redux/store"

export interface DeckState {
    deck: TCGDeck
}

const initialState: DeckState = {
    deck: {
        name: "Deck",
        characterCards: [],
        actionCards: []
    }
}

export const DeckSlice = createSlice({
    name: "tcgDeck",
    initialState,
    reducers: {
        addCharacterCard: (state, action: PayloadAction<TCGCharacterCard>) => {
            !state.deck.characterCards.includes(action.payload) && state.deck.characterCards.length < 3 && state.deck.characterCards.push(action.payload)
        },
        removeCharacterCard: (state, action: PayloadAction<TCGCharacterCard>) => {
            state.deck.characterCards.splice(state.deck.characterCards.indexOf(action.payload), 1)
        },
        addActionCard: (state, action: PayloadAction<TCGActionCard>) => {
            state.deck.actionCards.filter(card => card === action.payload).length < 2 && state.deck.actionCards.length < 30 && state.deck.actionCards.push(action.payload)
            state.deck.actionCards.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
        },
        removeActionCard: (state, action: PayloadAction<TCGActionCard>) => {
            state.deck.actionCards.splice(state.deck.actionCards.indexOf(action.payload), 1)
            state.deck.actionCards.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
        },
        loadDeck: (state, action: PayloadAction<TCGDeck>) => {
            state.deck = action.payload
        },
        renameDeck: (state, action: PayloadAction<string>) => {
            state.deck.name = action.payload
        }
    }
})

export const { addCharacterCard, removeCharacterCard, addActionCard, removeActionCard, loadDeck, renameDeck } = DeckSlice.actions
export const selectDeck = (state: RootState) => state.deck.deck
export default DeckSlice.reducer