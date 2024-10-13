import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface WeaponFilterState {
    weaponType: string[],
    rarity: string[],
    substats: string[],
    ascensionMat: string[],
    eliteMat: string[],
    commonMat: string[]
}

const initialState: WeaponFilterState = {
    weaponType: [],
    rarity: [],
    substats: [],
    ascensionMat: [],
    eliteMat: [],
    commonMat: []
}

export const WeaponFilterSlice = createSlice({
    name: "weapon filters",
    initialState,
    reducers: {
        setWeaponType: (state, action: PayloadAction<string>) => {
            !state.weaponType.includes(action.payload) ? state.weaponType.push(action.payload) : state.weaponType.splice(state.weaponType.indexOf(action.payload), 1)
        },
        setRarity: (state, action: PayloadAction<string>) => {
            !state.rarity.includes(action.payload) ? state.rarity.push(action.payload) : state.rarity.splice(state.rarity.indexOf(action.payload), 1)
        },
        setSubstats: (state, action: PayloadAction<string>) => {
            !state.substats.includes(action.payload) ? state.substats.push(action.payload) : state.substats.splice(state.substats.indexOf(action.payload), 1)
        },
        setAscensionMats: (state, action: PayloadAction<string>) => {
            !state.ascensionMat.includes(action.payload) ? state.ascensionMat.push(action.payload) : state.ascensionMat.splice(state.ascensionMat.indexOf(action.payload), 1)
        },
        setEliteMats: (state, action: PayloadAction<string>) => {
            !state.eliteMat.includes(action.payload) ? state.eliteMat.push(action.payload) : state.eliteMat.splice(state.eliteMat.indexOf(action.payload), 1)
        },
        setCommonMats: (state, action: PayloadAction<string>) => {
            !state.commonMat.includes(action.payload) ? state.commonMat.push(action.payload) : state.commonMat.splice(state.commonMat.indexOf(action.payload), 1)
        }
    }
})

export const { setWeaponType, setRarity, setSubstats, setAscensionMats, setEliteMats, setCommonMats } = WeaponFilterSlice.actions
export default WeaponFilterSlice.reducer