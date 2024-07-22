import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface TCGCharacterFilterState {
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
            changeButton(action.payload)
            !state.element.includes(action.payload) ? state.element.push(action.payload) : state.element.splice(state.element.indexOf(action.payload), 1)
            changeText(action.type, state.element)
        },
        setWeapon: (state, action: PayloadAction<string>) => {
            changeButton(action.payload)
            !state.weapon.includes(action.payload) ? state.weapon.push(action.payload) : state.weapon.splice(state.weapon.indexOf(action.payload), 1)
            changeText(action.type, state.weapon)
        },
        setNation: (state, action: PayloadAction<string>) => {
            changeButton(action.payload)
            !state.faction.includes(action.payload) ? state.faction.push(action.payload) : state.faction.splice(state.faction.indexOf(action.payload), 1)
            changeText(action.type, state.faction)
        },
        clearCharacterFilters: (state) => {
            state.element = []
            state.weapon = []
            state.faction = []
        }
    }
})

export const { setElement, setWeapon, setNation, clearCharacterFilters } = TCGCharacterFilterSlice.actions
export default TCGCharacterFilterSlice.reducer

function changeButton(target: string) {
    let targetButton: any
    if (target !== undefined) {
        targetButton = document.getElementById(`${target.toLowerCase()}-button`)
        targetButton.className === "filter-off" ? targetButton.className = "filter-on" : targetButton.className = "filter-off"
    }
}

function changeText(type: string, arr: string[]) {
    let text = document.getElementById(`${type.split("/")[1].slice(3).toLowerCase()}-filter-text`)!
    text.className === "filter-text-on" && arr.length === 0 ? text.className = "filter-text-off" : text.className = "filter-text-on"
}