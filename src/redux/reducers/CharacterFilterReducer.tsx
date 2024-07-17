import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface CharacterFilterState {
    element: string[],
    weapon: string[],
    rarity: string[],
    ascStat: string[],
    talent: string[],
    commonMat: string[],
    bossMat: string[],
    weeklyBossMat: string[],
    localMat: string[],
    nation: string[],
    gender: string[]
}

const initialState: CharacterFilterState = {
    element: [],
    weapon: [],
    rarity: [],
    ascStat: [],
    talent: [],
    commonMat: [],
    bossMat: [],
    weeklyBossMat: [],
    localMat: [],
    nation: [],
    gender: []
}

export const CharacterFilterSlice = createSlice({
    name: "character filters",
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
        setRarity: (state, action: PayloadAction<string>) => {
            changeButton(action.payload)
            !state.rarity.includes(action.payload) ? state.rarity.push((action.payload)) : state.rarity.splice(state.rarity.indexOf(action.payload), 1)
            changeText(action.type, state.rarity)
        },
        setAscensionStat: (state, action: PayloadAction<string>) => {
            changeButton(action.payload)
            !state.ascStat.includes(action.payload) ? state.ascStat.push(action.payload) : state.ascStat.splice(state.ascStat.indexOf(action.payload), 1)
            changeText(action.type, state.rarity)
        },
        setTalentBook: (state, action: PayloadAction<string>) => {
            changeButton(action.payload)
            !state.talent.includes(action.payload) ? state.talent.push(action.payload) : state.talent.splice(state.talent.indexOf(action.payload), 1)
            changeText(action.type, state.rarity)
        },
        setCommonMats: (state, action: PayloadAction<string>) => {
            changeButton(action.payload)
            !state.commonMat.includes(action.payload) ? state.commonMat.push(action.payload) : state.commonMat.splice(state.commonMat.indexOf(action.payload), 1)
            changeText(action.type, state.commonMat)
        },
        setBossMats: (state, action: PayloadAction<string>) => {
            changeButton(action.payload)
            !state.bossMat.includes(action.payload) ? state.bossMat.push(action.payload) : state.bossMat.splice(state.bossMat.indexOf(action.payload), 1)
            changeText(action.type, state.bossMat)
        },
        setWeeklyBossMats: (state, action: PayloadAction<string>) => {
            changeButton(action.payload)
            !state.weeklyBossMat.includes(action.payload) ? state.weeklyBossMat.push(action.payload) : state.weeklyBossMat.splice(state.weeklyBossMat.indexOf(action.payload), 1)
            changeText(action.type, state.weeklyBossMat)
        },
        setLocalMats: (state, action: PayloadAction<string>) => {
            changeButton(action.payload)
            !state.localMat.includes(action.payload) ? state.localMat.push(action.payload) : state.localMat.splice(state.localMat.indexOf(action.payload), 1)
            changeText(action.type, state.localMat)
        },
        setNation: (state, action: PayloadAction<string>) => {
            changeButton(action.payload)
            !state.nation.includes(action.payload) ? state.nation.push(action.payload) : state.nation.splice(state.nation.indexOf(action.payload), 1)
            changeText(action.type, state.nation)
        },
        setGender: (state, action: PayloadAction<string>) => {
            changeButton(action.payload)
            !state.gender.includes(action.payload) ? state.gender.push(action.payload) : state.gender.splice(state.gender.indexOf(action.payload), 1)
            changeText(action.type, state.gender)
        }
    }
})

export const { setElement, setWeapon, setRarity, setAscensionStat, setTalentBook, setCommonMats, setBossMats, setWeeklyBossMats, setLocalMats, setNation, setGender } = CharacterFilterSlice.actions
export default CharacterFilterSlice.reducer

function changeButton(target: string) {
    if (target !== undefined) {
        let targetButton: any
        if (target === "4" || target === "5") {
            targetButton = document.getElementById(`${target}-button`)
        }
        else {
            targetButton = document.getElementById(`${target.toLowerCase()}-button`)
        }
        targetButton.className === "filter-off" ? targetButton.className = "filter-on" : targetButton.className = "filter-off"
    }
}

function changeText(type: string, arr: string[]) {
    let text = document.getElementById(`${type.split("/")[1].slice(3).toLowerCase()}-filter-text`)!
    text.className === "filter-text-on" && arr.length === 0 ? text.className = "filter-text-off" : text.className = "filter-text-on"
}