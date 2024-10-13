import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface TCGActionFilterState {
    type: string[],
    subType: string[]
}

const initialState: TCGActionFilterState = {
    type: [],
    subType: []
}

export const TCGActionFilterSlice = createSlice({
    name: "tcg action filters",
    initialState,
    reducers: {
        setType: (state, action: PayloadAction<string>) => {
            !state.type.includes(action.payload) ? state.type.push(action.payload) : state.type.splice(state.type.indexOf(action.payload), 1)
        },
        setSubType: (state, action: PayloadAction<string>) => {
            !state.subType.includes(action.payload) ? state.subType.push(action.payload) : state.subType.splice(state.subType.indexOf(action.payload), 1)
        },
        clearActionFilters: (state) => {
            state.type = []
            state.subType = []
        }
    }
})

export const { setType, setSubType, clearActionFilters } = TCGActionFilterSlice.actions
export default TCGActionFilterSlice.reducer