import { TCGTalentsData } from "./TCGTalentsData"
import { TCGKeywordsData } from "./TCGKeywordsData"
import { TCGSplashData } from "./TCGSplashData"
import { VersionData } from "./VersionData"

export type TCGCharacterCardData = {
    name: string,
    displayName?: string,
    fullName?: string,
    element: string,
    weapon: string,
    factions: string[],
    arkhe?: string,
    hp: number,
    talents: TCGTalentsData,
    keywords: TCGKeywordsData[],
    splash: TCGSplashData,
    release: VersionData
}

export type TCGActionCardData = {
    name: string,
    displayName?: string,
    type: string,
    subType: string,
    combatAction?: boolean,
    character?: string,
    cost: string,
    description: string,
    keywords: TCGKeywordsData[],
    splash: TCGSplashData,
    release: VersionData
}

export type TCGCardData = {
    name: string,
    displayName?: string,
    fullName?: string,
    element: string,
    weapon: string,
    factions: string[],
    arkhe?: string,
    hp: number,
    talents: TCGTalentsData,
    keywords: TCGKeywordsData[],
    splash: TCGSplashData,
    release: VersionData
    type: string,
    subType: string,
    combatAction?: boolean,
    character?: string,
    cost: string,
    description: string,
}