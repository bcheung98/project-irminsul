import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface TCGCharacterFilterState {
    element: string[],
    weapon: string[],
    faction: string[]
}

const initialState: TCGCharacterFilterState = {
    element: [],
    weapon: [],
    faction: []
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
        clearCharacterFilters: (state) => {
            state.element = []
            state.weapon = []
            state.faction = []
        }
    }
})

export const { setElement, setWeapon, setFaction, clearCharacterFilters } = TCGCharacterFilterSlice.actions
export default TCGCharacterFilterSlice.reducer