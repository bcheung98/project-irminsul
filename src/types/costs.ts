import { characterLevel, characterSkill, weaponLevel } from "data/levelUpCosts";
import { NestedKeyOf, Rarity } from "./_common";
import {
    BossMaterial,
    CharacterXPMaterial,
    CommonMaterial,
    EliteMaterial,
    Gemstone,
    LocalMaterial,
    TalentMaterial,
    WeaponAscensionMaterial,
    WeaponXPMaterial,
    WeeklyBossMaterial,
} from "./materials";
import { Character } from "./character";
import { Weapon } from "./weapon";

export type CostObjectKeys =
    | NestedKeyOf<TotalCostObject>
    | keyof typeof characterLevel
    | keyof typeof characterSkill
    | keyof ReturnType<typeof weaponLevel>
    | "Credit"
    | "Crown";

export type TotalCostObjectKeys = keyof TotalCostObject;

export interface TotalCostObject {
    credits: Record<"Credit", number>;
    characterXP: Record<CharacterXPMaterial, number>;
    weaponXP: Record<WeaponXPMaterial, number>;
    bossMat: Record<BossMaterial, number>;
    weeklyBossMat: Record<WeeklyBossMaterial, number>;
    crown: Record<"Crown", number>;
    gemstone: Record<Gemstone, number>;
    localMat: Record<LocalMaterial, number>;
    talentBook: Record<TalentMaterial, number>;
    weaponAscensionMat: Record<WeaponAscensionMaterial, number>;
    eliteMat: Record<EliteMaterial, number>;
    commonMat: Record<CommonMaterial, number>;
}

export type PayloadCostObject = Record<
    TotalCostObjectKeys,
    Record<CostObjectKeys, number>
>;

export enum CostObjectSourceIndex {
    level,
    attack,
    skill,
    burst,
}

export interface CostSliderData {
    start: number;
    stop: number;
    selected: boolean;
}

export type CostSliderValues = Record<
    keyof typeof CostObjectSourceIndex,
    CostSliderData
>;

export type CharacterCostSliderValues = CostSliderValues;
export type WeaponCostSliderValues = Pick<CostSliderValues, "level">;

export interface PayloadData extends Partial<CostSliderData> {
    rarity?: Rarity;
}

export interface UpdateCostsPayload {
    name: string;
    type: keyof typeof CostObjectSourceIndex;
    data: PayloadData;
}

export interface CharacterCost {
    credits: Record<"Credit", number[]>;
    characterXP: Record<CharacterXPMaterial, number[]>;
    bossMat: Record<BossMaterial, number[]>;
    weeklyBossMat: Record<WeeklyBossMaterial, number[]>;
    crown: Record<"Crown", number[]>;
    gemstone: Record<Gemstone, number[]>;
    localMat: Record<LocalMaterial, number[]>;
    talentBook: Record<TalentMaterial, number[]>;
    commonMat: Record<CommonMaterial, number[]>;
}

export interface CharacterCostObject
    extends Pick<
        Character,
        "name" | "fullName" | "rarity" | "element" | "weapon"
    > {
    costs: CharacterCost;
    values: CharacterCostSliderValues;
}

export interface WeaponCost {
    credits: Record<"Credit", number>;
    weaponXP: Record<WeaponXPMaterial, number>;
    weaponAscensionMat: Record<WeaponAscensionMaterial, number>;
    eliteMat: Record<EliteMaterial, number>;
    commonMat: Record<CommonMaterial, number>;
}

export interface WeaponCostObject
    extends Pick<Weapon, "name" | "displayName" | "rarity" | "type"> {
    costs: WeaponCost;
    values: WeaponCostSliderValues;
}
