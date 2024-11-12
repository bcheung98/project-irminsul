import { CharacterMaterials } from "./materials"
import { Skill, SkillWithScaling } from "./skill"
import { Rarity, Element, WeaponType, Nation } from "./_common"
import { CharacterAscensionStats } from "data/CharacterAscensionStats"
import { Version } from "./version"

export interface CharacterProps {
    character: Character
}

export interface Character {
    id: number,
    name: string,
    fullName?: string,
    displayName?: string,
    title: string,
    rarity: Rarity,
    element: Element,
    arkhe?: "Ousia" | "Pneuma",
    weapon: WeaponType,
    talents: CharacterTalents,
    constellation: CharacterConstellations,
    stats: CharacterStats,
    materials: CharacterMaterials,
    description: string,
    birthday: string,
    gender: "Male" | "Female",
    nation: Nation | "Outlander",
    outfits: CharacterOutfit,
    voiceActors: {
        en: string,
        jp: string
    },
    release: Version
}

export interface CharacterTalents {
    attack: SkillWithScaling,
    skill: SkillWithScaling,
    burst: SkillWithScaling,
    altsprint?: SkillWithScaling,
    a1passive: Skill,
    a4passive: Skill,
    nightsoulpassive?: Skill,
    utilpassive: Skill,
    passive?: Skill
}

export interface CharacterConstellations {
    name: string,
    c1: Skill,
    c2: Skill,
    c3: Skill,
    c4: Skill,
    c5: Skill,
    c6: Skill
}

export interface CharacterStats {
    ascensionStat: keyof typeof CharacterAscensionStats,
    hp: number[],
    atk: number[],
    def: number[]
}

export interface CharacterOutfit {
    name: string,
    displayName?: string,
    rarity: Rarity,
    description: string
}