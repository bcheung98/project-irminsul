import { Element, Rarity, WeaponType } from "./_common"
import { CharacterMaterials, WeaponMaterials } from "./materials"

export interface CostArray {
    [material: string]: number[]
}

export interface CostNumber {
    [material: string]: number
}

export interface TotalCostObject {
    mora: number,
    characterXP: CostNumber,
    weaponXP: CostNumber,
    bossMat: CostNumber,
    weeklyBossMat: CostNumber,
    crown: number,
    gemstone: CostNumber,
    localMat: CostNumber,
    talentBook: CostNumber,
    ascensionMat: CostNumber,
    eliteMat: CostNumber,
    commonMat: CostNumber
}

export interface CharacterCostObject {
    name: string,
    displayName?: string,
    fullName?: string,
    rarity: Rarity,
    element: Element,
    weapon: WeaponType,
    materials: CharacterMaterials
    costs: CharacterCost
}

export interface CharacterCost {
    mora: number[]
    characterXP: CostArray,
    bossMat: CostArray,
    weeklyBossMat: CostArray,
    crown: number[],
    gemstone: CostArray,
    localMat: CostArray,
    talentBook: CostArray,
    commonMat: CostArray
}

export interface WeaponCostObject {
    name: string,
    displayName?: string,
    rarity: Rarity,
    type: WeaponType,
    materials: WeaponMaterials
    costs: WeaponCost
}

export interface WeaponCost {
    mora: number,
    weaponXP: CostNumber,
    ascensionMat: CostNumber,
    eliteMat: CostNumber,
    commonMat: CostNumber
}

export interface PayloadCostObject {
    [material: string]: number | CostNumber
}