import { createSlice } from "@reduxjs/toolkit";
import { fetchCards } from "../fetchData";
import { TCGCharacterCard, TCGActionCard, TCGKeyword } from "types/tcg";

export interface TCGState {
    loading: boolean;
    characterCards: TCGCharacterCard[];
    actionCards: TCGActionCard[];
    keywords: TCGKeyword[];
}

const initialState: TCGState = {
    loading: false,
    characterCards: [],
    actionCards: [],
    keywords: [],
};

export const tcgSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCards.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchCards.fulfilled, (state, action) => {
            const { characterCards, actionCards, keywords } = action.payload;
            state.characterCards = characterCards;
            state.actionCards = actionCards;
            state.keywords = keywords;
            state.loading = false;
        });
        builder.addCase(fetchCards.rejected, (state) => {
            state.loading = false;
        });
    },
});

export default tcgSlice.reducer;
