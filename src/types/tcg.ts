import { tcgWeaponTypes, tcgFactions, tcgActionCardTypes, tcgActionCardSubTypes } from "data/tcg"
import { Element, WeaponType } from "./_common"
import { Skill } from "./skill"
import { Version } from "./version"

export type TCGWeaponType = typeof tcgWeaponTypes[number]
export type TCGFaction = typeof tcgFactions[number]
export type TCGActionCardType = typeof tcgActionCardTypes[number]
export type TCGActionCardSubType = typeof tcgActionCardSubTypes[number]

export interface TCGCard {
    name: string,
    displayName?: string,
    fullName?: string,
    splash: {
        title: string,
        description: string
    },
    release: Version
}

export interface TCGCharacterCard extends TCGCard {
    element: Element,
    weapon: TCGWeaponType,
    factions: TCGFaction[],
    arkhe?: "Ousia" | "Pneuma",
    hp: number,
    talents: TCGTalents,
    keywords: TCGKeyword[]
}

export interface TCGActionCard extends TCGCard {
    type: TCGActionCardType,
    subType: TCGActionCardSubType | "",
    weaponType?: WeaponType,
    combatAction?: boolean,
    character?: string,
    cost: string,
    description: string
}

export interface TCGSkill extends Skill {
    cost?: string,
    energy?: number,
}

export interface TCGTalents {
    attack: TCGSkill,
    skill: TCGSkill,
    burst: TCGSkill,
    passive?: TCGSkill
}

export interface TCGKeyword extends TCGSkill {
    tag: string,
    type?: string
}