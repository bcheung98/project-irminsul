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
            !state.element.includes(action.payload) ? state.element.push(action.payload) : state.element.splice(state.element.indexOf(action.payload), 1)
        },
        setWeapon: (state, action: PayloadAction<string>) => {
            !state.weapon.includes(action.payload) ? state.weapon.push(action.payload) : state.weapon.splice(state.weapon.indexOf(action.payload), 1)
        },
        setRarity: (state, action: PayloadAction<string>) => {
            !state.rarity.includes(action.payload) ? state.rarity.push((action.payload)) : state.rarity.splice(state.rarity.indexOf(action.payload), 1)
        },
        setAscensionStat: (state, action: PayloadAction<string>) => {
            !state.ascStat.includes(action.payload) ? state.ascStat.push(action.payload) : state.ascStat.splice(state.ascStat.indexOf(action.payload), 1)
        },
        setTalentBook: (state, action: PayloadAction<string>) => {
            !state.talent.includes(action.payload) ? state.talent.push(action.payload) : state.talent.splice(state.talent.indexOf(action.payload), 1)
        },
        setCommonMats: (state, action: PayloadAction<string>) => {
            !state.commonMat.includes(action.payload) ? state.commonMat.push(action.payload) : state.commonMat.splice(state.commonMat.indexOf(action.payload), 1)
        },
        setBossMats: (state, action: PayloadAction<string>) => {
            !state.bossMat.includes(action.payload) ? state.bossMat.push(action.payload) : state.bossMat.splice(state.bossMat.indexOf(action.payload), 1)
        },
        setWeeklyBossMats: (state, action: PayloadAction<string>) => {
            !state.weeklyBossMat.includes(action.payload) ? state.weeklyBossMat.push(action.payload) : state.weeklyBossMat.splice(state.weeklyBossMat.indexOf(action.payload), 1)
        },
        setLocalMats: (state, action: PayloadAction<string>) => {
            !state.localMat.includes(action.payload) ? state.localMat.push(action.payload) : state.localMat.splice(state.localMat.indexOf(action.payload), 1)
        },
        setNation: (state, action: PayloadAction<string>) => {
            !state.nation.includes(action.payload) ? state.nation.push(action.payload) : state.nation.splice(state.nation.indexOf(action.payload), 1)
        },
        setGender: (state, action: PayloadAction<string>) => {
            !state.gender.includes(action.payload) ? state.gender.push(action.payload) : state.gender.splice(state.gender.indexOf(action.payload), 1)
        }
    }
})

export const { setElement, setWeapon, setRarity, setAscensionStat, setTalentBook, setCommonMats, setBossMats, setWeeklyBossMats, setLocalMats, setNation, setGender } = CharacterFilterSlice.actions
export default CharacterFilterSlice.reducer