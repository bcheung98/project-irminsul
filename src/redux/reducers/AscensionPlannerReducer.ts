import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Character } from "types/character"
import { CharacterCost, CharacterCostObject, CostArray, CostNumber, PayloadCostObject, TotalCostObject, WeaponCost, WeaponCostObject } from "types/costs"
import { Weapon } from "types/weapon"

export interface PlannerState {
    totalCost: TotalCostObject,
    characterCosts: CharacterCostObject[],
    weaponCosts: WeaponCostObject[]
}

type TalentKeys = "level" | "attack" | "skill" | "burst"

export interface PlannerPayload {
    name: string,
    type: TalentKeys,
    costs: PayloadCostObject
}

const initialState: PlannerState = {
    totalCost: {
        mora: 0,
        characterXP: {
            characterXP1: 0,
            characterXP2: 0,
            characterXP3: 0
        },
        weaponXP: {
            weaponXP1: 0,
            weaponXP2: 0,
            weaponXP3: 0
        },
        bossMat: {},
        weeklyBossMat: {},
        crown: 0,
        gemstone: {},
        localMat: {},
        talentBook: {},
        ascensionMat: {},
        eliteMat: {},
        commonMat: {}
    },
    characterCosts: [],
    weaponCosts: [],
}

export const PlannerSlice = createSlice({
    name: "ascension_planner",
    initialState,
    reducers: {
        setPlannerCharacters: (state, action: PayloadAction<Character[]>) => {
            const characterCostsDraft = action.payload.map((char: Character) => {
                const currentCharacter = state.characterCosts.find((c: CharacterCostObject) => char.name === c.name)
                // If the character is not already in the list, initialize the material array
                if (currentCharacter === undefined) {
                    const costs: CharacterCost = {
                        // Source of each material:
                        // [Level, Normal Attack, Skill, Burst]
                        mora: [0, 0, 0, 0],
                        characterXP: {
                            characterXP1: [0, 0, 0, 0],
                            characterXP2: [0, 0, 0, 0],
                            characterXP3: [0, 0, 0, 0]
                        },
                        bossMat: {
                            [`${char.materials.bossMat}`]: [0, 0, 0, 0]
                        },
                        weeklyBossMat: {
                            [`${char.materials.weeklyBossMat}`]: [0, 0, 0, 0]
                        },
                        crown: [0, 0, 0, 0],
                        gemstone: {
                            [`${char.element} Sliver`]: [0, 0, 0, 0],
                            [`${char.element} Fragment`]: [0, 0, 0, 0],
                            [`${char.element} Chunk`]: [0, 0, 0, 0],
                            [`${char.element} Gemstone`]: [0, 0, 0, 0],
                        },
                        localMat: {
                            [`${char.materials.localMat}`]: [0, 0, 0, 0]
                        },
                        talentBook: {
                            [`${char.materials.talentBook}1`]: [0, 0, 0, 0],
                            [`${char.materials.talentBook}2`]: [0, 0, 0, 0],
                            [`${char.materials.talentBook}3`]: [0, 0, 0, 0]
                        },
                        commonMat: {
                            [`${char.materials.commonMat}1`]: [0, 0, 0, 0],
                            [`${char.materials.commonMat}2`]: [0, 0, 0, 0],
                            [`${char.materials.commonMat}3`]: [0, 0, 0, 0]
                        }
                    }
                    return {
                        name: char.name,
                        displayName: char.fullName ? char.fullName : char.name,
                        rarity: char.rarity,
                        element: char.element,
                        weapon: char.weapon,
                        materials: char.materials,
                        costs: costs
                    } as CharacterCostObject
                }
                else {
                    return currentCharacter
                }
            })
            state.characterCosts = characterCostsDraft
        },
        updateCharacterCosts: (state, action: PayloadAction<PlannerPayload>) => {
            const charIndex = state.characterCosts.findIndex(({ name }) => name === action.payload.name)
            if (charIndex !== -1) {
                const { type, costs } = action.payload
                const index = ["level", "attack", "skill", "burst"].indexOf(type)
                Object.keys(costs).forEach((material: string) => {
                    let costValue = state.characterCosts[charIndex].costs[material as keyof CharacterCost]
                    let payloadCostValue = costs[material as keyof PayloadCostObject]
                    if (isArray(costValue)) {
                        if (payloadCostValue !== undefined && typeof payloadCostValue === "number") {
                            costValue[index] = payloadCostValue
                        }
                    }
                    else {
                        Object.keys(costValue).forEach((key, i) => {
                            if (!isArray(costValue)) {
                                let values = Object.values(payloadCostValue as PayloadCostObject)
                                if (values[i] !== undefined) {
                                    costValue[key][index] = values[i] as number
                                }
                            }
                        })
                    }
                })
            }
        },
        setPlannerWeapons: (state, action: PayloadAction<Weapon[]>) => {
            const weaponCostsDraft = action.payload.map((wep: Weapon) => {
                const currentWeapon = state.weaponCosts.find((w: WeaponCostObject) => wep.name === w.name)
                // If the weapon is not already in the list, initialize the material array
                if (currentWeapon === undefined) {
                    const costs: WeaponCost = {
                        mora: 0,
                        weaponXP: {
                            weaponXP1: 0,
                            weaponXP2: 0,
                            weaponXP3: 0
                        },
                        ascensionMat: {
                            [`${wep.materials.ascensionMat}1`]: 0,
                            [`${wep.materials.ascensionMat}2`]: 0,
                            [`${wep.materials.ascensionMat}3`]: 0,
                            [`${wep.materials.ascensionMat}4`]: 0
                        },
                        eliteMat: {
                            [`${wep.materials.eliteMat}1`]: 0,
                            [`${wep.materials.eliteMat}2`]: 0,
                            [`${wep.materials.eliteMat}3`]: 0,
                        },
                        commonMat: {
                            [`${wep.materials.commonMat}1`]: 0,
                            [`${wep.materials.commonMat}2`]: 0,
                            [`${wep.materials.commonMat}3`]: 0,
                        }
                    }
                    return {
                        name: wep.name,
                        displayName: wep.displayName ? wep.displayName : wep.name,
                        rarity: wep.rarity,
                        type: wep.type,
                        materials: wep.materials,
                        costs: costs
                    } as WeaponCostObject
                }
                else {
                    return currentWeapon
                }
            })
            state.weaponCosts = weaponCostsDraft
        },
        updateWeaponCosts: (state, action: PayloadAction<PlannerPayload>) => {
            const weaponIndex = state.weaponCosts.findIndex(({ name }) => name === action.payload.name)
            if (weaponIndex !== -1) {
                const { costs } = action.payload
                Object.keys(costs).forEach((material: string) => {
                    let costValue = state.weaponCosts[weaponIndex].costs[material as keyof WeaponCost]
                    let payloadCostValue = costs[material as keyof PayloadCostObject]
                    if (isNumber(costValue)) {
                        if (payloadCostValue !== undefined && typeof payloadCostValue === "number") {
                            state.weaponCosts[weaponIndex].costs.mora = payloadCostValue
                        }
                    }
                    else {
                        Object.keys(costValue).forEach((key, i) => {
                            if (!isNumber(costValue)) {
                                let values = Object.values(payloadCostValue as PayloadCostObject)
                                if (values[i] !== undefined) {
                                    costValue[key] = values[i] as number
                                }
                            }
                        })
                    }
                })
            }
        },
        updateTotalCosts: (state) => {
            let totalCostDraft: TotalCostObject = {
                mora: 0,
                characterXP: {
                    characterXP1: 0,
                    characterXP2: 0,
                    characterXP3: 0
                },
                weaponXP: {
                    weaponXP1: 0,
                    weaponXP2: 0,
                    weaponXP3: 0
                },
                bossMat: {},
                weeklyBossMat: {},
                crown: 0,
                gemstone: {},
                localMat: {},
                talentBook: {},
                ascensionMat: {},
                eliteMat: {},
                commonMat: {}
            }
            state.characterCosts.forEach((character: CharacterCostObject) => {
                const reduced = reduceCosts({ ...character.costs })
                Object.entries(reduced).forEach(([material, value]) => {
                    if (material === "mora" || material === "crown") {
                        totalCostDraft[material] += value as number
                    }
                    else {
                        Object.entries(value).forEach(([k, v]) => {
                            let costObj = totalCostDraft[material as keyof TotalCostObject]
                            if (!isNumber(costObj)) {
                                if (!Object.keys(costObj).includes(k)) {
                                    costObj[k] = 0
                                }
                                costObj[k] += v as number
                            }
                        })
                    }
                })
            })
            state.weaponCosts.forEach((weapon: WeaponCostObject) => {
                Object.entries(weapon.costs).forEach(([material, value]) => {
                    if (material === "mora") {
                        totalCostDraft[material] += value
                    }
                    else {
                        Object.entries(value).forEach(([k, v]) => {
                            let costObj = totalCostDraft[material as keyof TotalCostObject]
                            if (!isNumber(costObj)) {
                                if (!Object.keys(costObj).includes(k)) {
                                    costObj[k] = 0
                                }
                                costObj[k] += v as number
                            }
                        })
                    }
                })
            })
            state.totalCost = totalCostDraft
        }
    }
})

export const { setPlannerCharacters, updateCharacterCosts, setPlannerWeapons, updateWeaponCosts, updateTotalCosts } = PlannerSlice.actions
export default PlannerSlice.reducer

export function reduceCosts(costs: CharacterCost) {
    type ReducedCharacterCost = Omit<TotalCostObject, "weaponXP">
    let result: ReducedCharacterCost = {
        mora: 0,
        characterXP: {
            characterXP1: 0,
            characterXP2: 0,
            characterXP3: 0
        },
        bossMat: {},
        weeklyBossMat: {},
        crown: 0,
        gemstone: {},
        localMat: {},
        talentBook: {},
        ascensionMat: {},
        eliteMat: {},
        commonMat: {}
    }
    Object.entries(costs).forEach(([material, value]) => {
        if (material === "mora" || material === "crown") {
            result[material] = (value as number[]).reduce((a, c) => a + c)
        }
        else {
            Object.entries(value).forEach(([k, v]) => {
                let costObj = result[material as keyof ReducedCharacterCost]
                if (!isNumber(costObj)) {
                    costObj[k] = (v as number[]).reduce((a, c) => a + c)
                }
            })
        }
    })
    return result
}

function isArray(x: number[] | (CostArray | CostNumber) | unknown): x is number[] {
    return (x as number[]).length !== undefined
}

function isNumber(x: number | (CostArray | CostNumber) | unknown): x is number {
    return typeof x === "number"
}