import { WeaponSubstats } from "data/WeaponSubstats"
import { Rarity, WeaponType } from "./_common"
import { Skill, SkillWithScaling } from "./skill"
import { WeaponMaterials } from "./materials"
import { Version } from "./version"

export interface WeaponProps {
    weapon: Weapon
}

export interface Weapon {
    id: number,
    name: string,
    displayName?: string,
    rarity: Rarity,
    type: WeaponType,
    stats: WeaponStats,
    materials: WeaponMaterials,
    description: string,
    release: Version
}

export interface WeaponStats {
    atk: string,
    subStat: keyof typeof WeaponSubstats,
    passive: {
        name: string,
        description: string,
        scaling?: string[][]
    }
}