import { MaterialsData } from "../MaterialsData"
import { WeaponStatsData } from "./WeaponStatsData"
import { VersionData } from "../VersionData"

export type WeaponData = {
    id: number,
    name: string,
    displayName?: string,
    rarity: number,
    type: string,
    stats: WeaponStatsData,
    materials: MaterialsData,
    description: string,
    release: VersionData
}