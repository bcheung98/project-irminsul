import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { CharacterData } from "../../types/CharacterData"
import { WeaponData } from "../../types/WeaponData"
import { CharacterCosts } from "../../types/CharacterCosts"
import { WeaponCosts } from "../../types/WeaponCosts"

interface PlannerState {
    totalCost: { [propName: string]: number },
    characters: CharacterData[],
    characterCosts: CharacterCosts[] | [],
    weapons: WeaponData[],
    weaponCosts: WeaponCosts[] | []
}

const initialState: PlannerState = {
    totalCost: {},
    characters: [],
    characterCosts: [],
    weapons: [],
    weaponCosts: [],
}

export const PlannerSlice = createSlice({
    name: "ascension planner",
    initialState,
    reducers: {
        setPlannerCharacters: (state, action: PayloadAction<CharacterData[]>) => {
            let tempCharCosts = action.payload.map((char: CharacterData) => {
                let costs
                let currentCharacter = state.characterCosts.find((c: CharacterCosts) => char.name === c.name)
                // If the character is not already in the list, initialize the material array
                if (currentCharacter === undefined) {
                    costs = {
                        // Source of each material:
                        // [Level, Normal Attack, Skill, Burst]
                        mora: [0, 0, 0, 0],
                        char_xp1: [0, 0, 0, 0],
                        char_xp2: [0, 0, 0, 0],
                        char_xp3: [0, 0, 0, 0],
                        bossMat: [0, 0, 0, 0],
                        localMat: [0, 0, 0, 0],
                        gemstone1: [0, 0, 0, 0],
                        gemstone2: [0, 0, 0, 0],
                        gemstone3: [0, 0, 0, 0],
                        gemstone4: [0, 0, 0, 0],
                        talent1: [0, 0, 0, 0],
                        talent2: [0, 0, 0, 0],
                        talent3: [0, 0, 0, 0],
                        common1: [0, 0, 0, 0],
                        common2: [0, 0, 0, 0],
                        common3: [0, 0, 0, 0],
                        weeklyBossMat: [0, 0, 0, 0],
                        crown: [0, 0, 0, 0]
                    }
                }
                else {
                    costs = currentCharacter.costs
                }
                return (
                    {
                        name: char.name,
                        costs: costs,
                    }
                )
            })
            state.characters = action.payload
            state.characterCosts = tempCharCosts
        },
        updateCharacterCosts: (state, action: PayloadAction<[string, string, {}]>) => {
            let indexChar = state.characterCosts.indexOf((state.characterCosts.find((char: CharacterCosts) => char.name === action.payload[0])) as never)
            Object.keys(action.payload[2] as {}).forEach((key: string) => {
                switch (action.payload[1]) {
                    case "level":
                        state.characterCosts[indexChar].costs[key as keyof {}][0] = action.payload[2][key as keyof {}]
                        break
                    case "attack":
                        state.characterCosts[indexChar].costs[key as keyof {}][1] = action.payload[2][key as keyof {}]
                        break
                    case "skill":
                        state.characterCosts[indexChar].costs[key as keyof {}][2] = action.payload[2][key as keyof {}]
                        break
                    case "burst":
                        state.characterCosts[indexChar].costs[key as keyof {}][3] = action.payload[2][key as keyof {}]
                        break
                    default:
                        break
                }
            })
        },
        setPlannerWeapons: (state, action: PayloadAction<WeaponData[]>) => {
            let tempWeaponCosts = action.payload.map((wep: WeaponData) => {
                let costs
                let currentWeapon = state.weaponCosts.find((w: WeaponCosts) => wep.name === w.name)
                // If the weapon is not already in the list, initialize the material array
                if (currentWeapon === undefined) {
                    costs = {
                        mora: 0,
                        wep_xp1: 0,
                        wep_xp2: 0,
                        wep_xp3: 0,
                        ascension1: 0,
                        ascension2: 0,
                        ascension3: 0,
                        ascension4: 0,
                        elite1: 0,
                        elite2: 0,
                        elite3: 0,
                        common1: 0,
                        common2: 0,
                        common3: 0
                    }
                }
                else {
                    costs = currentWeapon.costs
                }
                return (
                    {
                        name: wep.name,
                        costs: costs,
                    }
                )
            })
            state.weapons = action.payload
            state.weaponCosts = tempWeaponCosts
        },
        updateWeaponCosts: (state, action: PayloadAction<[string, string, {}]>) => {
            let indexChar = state.weaponCosts.indexOf((state.weaponCosts.find((wep: WeaponCosts) => wep.name === action.payload[0])) as never)
            Object.keys(action.payload[2] as {}).forEach((key: string) => {
                state.weaponCosts[indexChar].costs[key as keyof {}] = action.payload[2][key as keyof {}]
            })
        },
        updateTotalCosts: (state) => {
            let tempTotalCost = {} as PlannerState["totalCost"]
            state.characterCosts.forEach((char: CharacterCosts) => {
                Object.keys(char.costs).forEach((material: string) => {
                    let char_mat = GetMaterial(state.characters.find((c: CharacterData) => c.name === char.name), material)
                    if (!Object.keys(tempTotalCost).includes(char_mat)) {
                        tempTotalCost[char_mat] = 0
                    }
                    tempTotalCost[char_mat] += char.costs[material as keyof typeof char.costs].reduce((a: number, c: number) => a + c)
                })
            })
            state.weaponCosts.forEach((wep: WeaponCosts) => {
                Object.keys(wep.costs).forEach((material: string) => {
                    let wep_mat = GetMaterial(state.weapons.find((w: WeaponData) => w.name === wep.name), material)
                    if (!Object.keys(tempTotalCost).includes(wep_mat)) {
                        tempTotalCost[wep_mat] = 0
                    }
                    tempTotalCost[wep_mat] += wep.costs[material as keyof typeof wep.costs]
                })
            })
            state.totalCost = tempTotalCost
        }
    }
})

export const { setPlannerCharacters, updateCharacterCosts, setPlannerWeapons, updateWeaponCosts, updateTotalCosts } = PlannerSlice.actions
export default PlannerSlice.reducer

const GetMaterial = (unit: any, material: string) => {
    switch (material) {
        case "talent1":
            material = `${unit.materials.talentBook}1`
            break
        case "talent2":
            material = `${unit.materials.talentBook}2`
            break
        case "talent3":
            material = `${unit.materials.talentBook}3`
            break
        case "common1":
            material = `${unit.materials.commonMat}1`
            break
        case "common2":
            material = `${unit.materials.commonMat}2`
            break
        case "common3":
            material = `${unit.materials.commonMat}3`
            break
        case "bossMat":
            material = unit.materials.bossMat
            break
        case "localMat":
            material = unit.materials.localMat
            break
        case "weeklyBossMat":
            material = unit.materials.weeklyBossMat
            break
        case "gemstone1":
            material = `${unit.element}_Sliver`
            break
        case "gemstone2":
            material = `${unit.element}_Fragment`
            break
        case "gemstone3":
            material = `${unit.element}_Chunk`
            break
        case "gemstone4":
            material = `${unit.element}_Gemstone`
            break
        case "ascension1":
            material = `${unit.materials.ascensionMat}1`
            break
        case "ascension2":
            material = `${unit.materials.ascensionMat}2`
            break
        case "ascension3":
            material = `${unit.materials.ascensionMat}3`
            break
        case "ascension4":
            material = `${unit.materials.ascensionMat}4`
            break
        case "elite1":
            material = `${unit.materials.eliteMat}1`
            break
        case "elite2":
            material = `${unit.materials.eliteMat}2`
            break
        case "elite3":
            material = `${unit.materials.eliteMat}3`
            break
        default:
            break
    }
    return material
}