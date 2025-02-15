import { objectKeys } from "./utils";
import { materialRarity } from "./materialRarity";
import {
    characterXPMaterials,
    weaponXPMaterials,
} from "data/materials/xpMaterials";
import { formatWeeklyBossMaterials } from "data/materials/weeklyBossMaterials";
import { formatTalentBooks } from "data/materials/talentMaterials";
import { commonMaterials } from "data/materials/commonMaterials";
import { Rarity } from "types/_common";
import {
    CharacterCost,
    TotalCostObject,
    TotalCostObjectKeys,
} from "types/costs";
import {
    BossMaterial,
    TalentMaterial,
    WeaponAscensionMaterial,
    WeeklyBossMaterial,
} from "types/materials";
import { gemstones } from "data/materials/gemstones";
import { formatWeaponAscensionMaterials } from "data/materials/weaponAscensionMaterials";
import { formatBossMaterials } from "data/materials/bossMaterials";
import { eliteMaterials } from "data/materials/eliteMaterials";

export interface MaterialCostData {
    name: string;
    rarity: Rarity;
    cost: number;
    img: string;
}

export function createMaterialCostData(costs: TotalCostObject) {
    const materials: MaterialCostData[] = [];
    const costArray: number[] = [];
    objectKeys(costs).forEach((material) => {
        const [minRarity, maxRarity] = materialRarity[material];
        let rarity = minRarity;
        objectKeys(costs[material]).forEach((mat) => {
            costArray.push(costs[material][mat]);
            let { name, img } = getMaterialData(material, mat);
            costs[material][mat] &&
                materials.push({
                    name: name,
                    rarity: rarity as Rarity,
                    cost: costs[material][mat],
                    img: img,
                });
            rarity += 1;
            if (rarity > maxRarity) {
                rarity = minRarity;
            }
        });
    });
    return materials;
}

function getMaterialData(
    key: TotalCostObjectKeys,
    material = ""
): { name: string; rarity?: Rarity; img: string } {
    switch (key) {
        case "credits":
            return { name: "Credits", img: "Mora" };
        case "characterXP":
            return {
                name: characterXPMaterials[
                    `${material}` as keyof typeof characterXPMaterials
                ],
                img: `xp/${material}`,
            };
        case "weaponXP":
            return {
                name: weaponXPMaterials[
                    `${material}` as keyof typeof weaponXPMaterials
                ],
                img: `xp/${material}`,
            };
        case "bossMat":
            return {
                name: formatBossMaterials(material as BossMaterial),
                img: `boss/${material}`,
            };
        case "weeklyBossMat":
            return {
                name: formatWeeklyBossMaterials(material as WeeklyBossMaterial),
                img: `weekly/${material}`,
            };
        case "crown":
            return {
                name: "Crown of Insight",
                img: "Crown of Insight",
            };
        case "gemstone":
            let gems =
                gemstones[material.slice(0, -1) as keyof typeof gemstones];
            return {
                name: gems[material as keyof typeof gems],
                img: `gemstone/${material}`,
            };
        case "localMat":
            return {
                name: material,
                img: `local/${material}`,
            };
        case "talentBook":
            return {
                name: formatTalentBooks(material as TalentMaterial),
                img: `talent/${material}`,
            };
        case "commonMat":
            let commonMats =
                commonMaterials[
                    material.slice(0, -1) as keyof typeof commonMaterials
                ];
            return {
                name: commonMats[material as keyof typeof commonMats],
                img: `common/${material}`,
            };
        case "weaponAscensionMat":
            return {
                name: formatWeaponAscensionMaterials(
                    material as WeaponAscensionMaterial
                ),
                img: `weapon/${material}`,
            };
        case "eliteMat":
            let eliteMats =
                eliteMaterials[
                    material.slice(0, -1) as keyof typeof eliteMaterials
                ];
            return {
                name: eliteMats[material as keyof typeof eliteMats],
                img: `elite/${material}`,
            };
    }
}

export function reduceMaterialCosts(costs: CharacterCost) {
    const result = {
        credits: {
            Credit: 0,
        },
        characterXP: {
            CharacterXP1: 0,
            CharacterXP2: 0,
            CharacterXP3: 0,
        },
        weaponXP: {
            WeaponXP1: 0,
            WeaponXP2: 0,
            WeaponXP3: 0,
        },
        bossMat: {},
        weeklyBossMat: {},
        crown: {
            Crown: 0,
        },
        gemstone: {},
        localMat: {},
        talentBook: {},
        commonMat: {},
    } as TotalCostObject;
    objectKeys(costs).forEach((material) => {
        objectKeys(costs[material]).forEach((mat) => {
            (result[material][mat] as number) = (
                costs[material][mat] as number[]
            ).reduce((a, c) => a + c);
        });
    });
    return result;
}
