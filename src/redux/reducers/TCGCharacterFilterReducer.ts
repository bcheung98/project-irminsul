import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface TCGCharacterFilterState {
    element: string[],
    weapon: string[],
    faction: string[],
    sortBy: "name" | "element" | "weapon" | "energy",
    sortDirection: "asc" | "desc"
}

const initialState: TCGCharacterFilterState = {
    element: [],
    weapon: [],
    faction: [],
    sortBy: "name",
    sortDirection: "asc"
}

export const TCGCharacterFilterSlice = createSlice({
    name: "tcg character filters",
    initialState,
    reducers: {
        setElement: (state, action: PayloadAction<string>) => {
            !state.element.includes(action.payload) ? state.element.push(action.payload) : state.element.splice(state.element.indexOf(action.payload), 1)
        },
        setWeapon: (state, action: PayloadAction<string>) => {
            !state.weapon.includes(action.payload) ? state.weapon.push(action.payload) : state.weapon.splice(state.weapon.indexOf(action.payload), 1)
        },
        setFaction: (state, action: PayloadAction<string>) => {
            !state.faction.includes(action.payload) ? state.faction.push(action.payload) : state.faction.splice(state.faction.indexOf(action.payload), 1)
        },
        setSortBy: (state, action: PayloadAction<"name" | "element" | "weapon" | "energy">) => {
            state.sortBy = action.payload
        },
        setSortDirection: (state, action: PayloadAction<"asc" | "desc">) => {
            state.sortDirection = action.payload
        },
        clearCharacterFilters: (state) => {
            state.element = []
            state.weapon = []
            state.faction = []
        }
    }
})

export const { setElement, setWeapon, setFaction, setSortBy, setSortDirection, clearCharacterFilters } = TCGCharacterFilterSlice.actions
export default TCGCharacterFilterSlice.reducer