import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface TCGActionFilterState {
    type: string[],
    subType: string[],
    sortBy: "name" | "group",
    sortDirection: "asc" | "desc"
}

const initialState: TCGActionFilterState = {
    type: [],
    subType: [],
    sortBy: "name",
    sortDirection: "asc"
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
        setSortBy: (state, action: PayloadAction<"name" | "group">) => {
            state.sortBy = action.payload
        },
        setSortDirection: (state, action: PayloadAction<"asc" | "desc">) => {
            state.sortDirection = action.payload
        },
        clearActionFilters: (state) => {
            state.type = []
            state.subType = []
        }
    }
})

export const { setType, setSubType, setSortBy, setSortDirection, clearActionFilters } = TCGActionFilterSlice.actions
export default TCGActionFilterSlice.reducer