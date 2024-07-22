import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { TCGDeckData } from "../../types/TCGDeckData"
import { TCGCardData } from "../../types/TCGData"

interface DeckState {
    deck: TCGDeckData
}

const initialState: DeckState = {
    deck: {
        name: "Deck",
        characterCards: [],
        actionCards: []
    }
}

export const DeckSlice = createSlice({
    name: "tcg deck",
    initialState,
    reducers: {
        addCharacterCard: (state, action: PayloadAction<TCGCardData>) => {
            !state.deck.characterCards.includes(action.payload) && state.deck.characterCards.length < 3 && state.deck.characterCards.push(action.payload)
        },
        removeCharacterCard: (state, action: PayloadAction<TCGCardData>) => {
            state.deck.characterCards.splice(state.deck.characterCards.indexOf(action.payload), 1)
        },
        addActionCard: (state, action: PayloadAction<TCGCardData>) => {
            state.deck.actionCards.filter(card => card === action.payload).length < 2 && state.deck.actionCards.length < 30 && state.deck.actionCards.push(action.payload)
            state.deck.actionCards.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
        },
        removeActionCard: (state, action: PayloadAction<TCGCardData>) => {
            state.deck.actionCards.splice(state.deck.actionCards.indexOf(action.payload), 1)
            state.deck.actionCards.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
        },
        loadDeck: (state, action: PayloadAction<TCGDeckData>) => {
            state.deck = action.payload
        },
        renameDeck: (state, action: PayloadAction<string>) => {
            state.deck.name = action.payload
        }
    }
})

export const { addCharacterCard, removeCharacterCard, addActionCard, removeActionCard, loadDeck, renameDeck } = DeckSlice.actions
export default DeckSlice.reducer