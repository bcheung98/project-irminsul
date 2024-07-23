import { createSlice } from "@reduxjs/toolkit"
import { fetchCards } from "../actions/fetch"
import { TCGCardData } from "../../types/tcg/TCGData"

interface State {
    loading: boolean,
    cards: TCGCardData[]
}

const initialState: State = {
    loading: false,
    cards: []
}

export const TCGSlice = createSlice({
    name: "card cards",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCards.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchCards.fulfilled, (state, action) => {
            state.cards = action.payload
            state.loading = false
        })
        builder.addCase(fetchCards.rejected, (state) => {
            state.loading = false
        })
    }
})

export default TCGSlice.reducer