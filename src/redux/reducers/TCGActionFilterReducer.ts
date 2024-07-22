import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface TCGActionFilterState {
    type: string[],
    subType: string[]
}

const initialState: TCGActionFilterState = {
    type: [],
    subType: []
}

export const TCGActionFilterSlice = createSlice({
    name: "tcg character filters",
    initialState,
    reducers: {
        setType: (state, action: PayloadAction<string>) => {
            changeButton(action.payload)
            state.type.includes(action.payload) ? state.type.push(action.payload) : state.type.splice(state.type.indexOf(action.payload), 1)
            changeText(action.type, state.type)
        },
        setSubType: (state, action: PayloadAction<string>) => {
            changeButton(action.payload)
            state.subType.includes(action.payload) ? state.subType.push(action.payload) : state.subType.splice(state.subType.indexOf(action.payload), 1)
            changeText(action.type, state.subType)
        },
        clearActionFilters: (state) => {
            state.type = []
            state.subType = []
        }
    }
})

export const { setType, setSubType, clearActionFilters } = TCGActionFilterSlice.actions
export default TCGActionFilterSlice.reducer

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