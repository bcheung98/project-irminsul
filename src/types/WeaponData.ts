export type WeaponData = {
    id: number,
    name: string,
    displayName?: string,
    rarity: number,
    type: string,
    stats: {
        atk: string,
        subStat: string,
        passive: {
            name: string,
            description: string,
            scaling: string[][]
        }
    },
    materials: {
        ascensionMat: string,
        eliteMat: string,
        commonMat: string
    },
    description: string,
    release: {
        version: string
    }
}
