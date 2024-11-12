export interface Materials {
    talentBook?: string,
    bossMat?: string,
    localMat?: string,
    commonMat?: string,
    weeklyBossMat?: string
    ascensionMat?: string,
    eliteMat?: string
}

export type CharacterMaterials = Required<Pick<Materials, "talentBook" | "bossMat" | "localMat" | "commonMat" | "weeklyBossMat">>
export type WeaponMaterials = Required<Pick<Materials, "ascensionMat" | "eliteMat" | "commonMat">>