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
            changeButton(action.payload)
            !state.weaponType.includes(action.payload) ? state.weaponType.push(action.payload) : state.weaponType.splice(state.weaponType.indexOf(action.payload), 1)
            changeText(action.type, state.weaponType)
        },
        setRarity: (state, action: PayloadAction<string>) => {
            changeButton(action.payload)
            !state.rarity.includes(action.payload) ? state.rarity.push(action.payload) : state.rarity.splice(state.rarity.indexOf(action.payload), 1)
            changeText(action.type, state.rarity)
        },
        setSubstats: (state, action: PayloadAction<string>) => {
            changeButton(action.payload)
            !state.substats.includes(action.payload) ? state.substats.push(action.payload) : state.substats.splice(state.substats.indexOf(action.payload), 1)
            changeText(action.type, state.substats)
        },
        setAscensionMats: (state, action: PayloadAction<string>) => {
            changeButton(action.payload)
            !state.ascensionMat.includes(action.payload) ? state.ascensionMat.push(action.payload) : state.ascensionMat.splice(state.ascensionMat.indexOf(action.payload), 1)
            changeText(action.type, state.ascensionMat)
        },
        setEliteMats: (state, action: PayloadAction<string>) => {
            changeButton(action.payload)
            !state.eliteMat.includes(action.payload) ? state.eliteMat.push(action.payload) : state.eliteMat.splice(state.eliteMat.indexOf(action.payload), 1)
            changeText(action.type, state.eliteMat)
        },
        setCommonMats: (state, action: PayloadAction<string>) => {
            changeButton(action.payload)
            !state.commonMat.includes(action.payload) ? state.commonMat.push(action.payload) : state.commonMat.splice(state.commonMat.indexOf(action.payload), 1)
            changeText(action.type, state.commonMat)
        }
    }
})

export const { setWeaponType, setRarity, setSubstats, setAscensionMats, setEliteMats, setCommonMats } = WeaponFilterSlice.actions
export default WeaponFilterSlice.reducer

function changeButton(target: string) {
    if (target !== undefined) {
        let targetButton: any
        if (target === "4" || target === "5") {
            targetButton = document.getElementById(`weapon-${target}-button`)
        }
        else {
            targetButton = document.getElementById(`weapon-${target.toLowerCase()}-button`)
        }
        targetButton.className === "filter-off" ? targetButton.className = "filter-on" : targetButton.className = "filter-off"
    }
}

function changeText(type: string, arr: string[]) {
    let text = document.getElementById(`weapon-${type.split("/")[1].slice(3).toLowerCase()}-filter-text`)!
    text.className === "filter-text-on" && arr.length === 0 ? text.className = "filter-text-off" : text.className = "filter-text-on"
}