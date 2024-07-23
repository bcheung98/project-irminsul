import { CharacterTalentsData } from "./CharacterTalentsData"
import { CharacterConstellationData } from "./CharacterConstellationData"
import { CharacterStatsData } from "./CharacterStatsData"
import { MaterialsData } from "../MaterialsData"
import { CharacterOutfitData } from "./CharacterOutfitData"
import { CharacterVAData } from "./CharacterVAData"
import { VersionData } from "../VersionData"

export type CharacterData = {
    id: number,
    name: string,
    fullName?: string,
    title: string,
    rarity: number,
    element: string,
    weapon: string,
    talents: CharacterTalentsData,
    constellation: CharacterConstellationData,
    stats: CharacterStatsData,
    materials: MaterialsData,
    description: string,
    birthday: string,
    gender: string,
    nation: string,
    outfits: CharacterOutfitData[],
    voiceActors: CharacterVAData,
    release: VersionData
}