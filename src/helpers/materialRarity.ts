import { TotalCostObjectKeys } from "types/costs";

export const materialRarity: Record<TotalCostObjectKeys, [number, number]> = {
    credits: [3, 3],
    characterXP: [2, 4],
    weaponXP: [1, 3],
    bossMat: [4, 4],
    weeklyBossMat: [5, 5],
    crown: [5, 5],
    gemstone: [2, 5],
    localMat: [1, 1],
    talentBook: [2, 4],
    commonMat: [1, 3],
    weaponAscensionMat: [2, 5],
    eliteMat: [2, 4],
};
