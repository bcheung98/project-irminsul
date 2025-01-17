import { talentBookNames } from "data/materials/talentMaterials";
import { weaponAscensionMaterialNames } from "data/materials/weaponAscensionMaterials";

export const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
] as const;

export type Weekday = (typeof weekdays)[number];

export const dropDates = ["(Mon/Thu)", "(Tue/Fri)", "(Wed/Sat)"];

export function materialDates(day: Weekday) {
    switch (day) {
        case "Monday":
        case "Thursday":
            return {
                characters: getMaterials(talentBookNames, 0),
                weapons: getMaterials(weaponAscensionMaterialNames, 0),
            };
        case "Tuesday":
        case "Friday":
            return {
                characters: getMaterials(talentBookNames, 1),
                weapons: getMaterials(weaponAscensionMaterialNames, 1),
            };
        case "Wednesday":
        case "Saturday":
            return {
                characters: getMaterials(talentBookNames, 2),
                weapons: getMaterials(weaponAscensionMaterialNames, 2),
            };
        default:
            return {
                characters: talentBookNames,
                weapons: weaponAscensionMaterialNames,
            };
    }
}

export function getMaterials<T extends string>(arr: T[], start: number) {
    const materials = [] as T[];
    for (let i = start; i < arr.length; i += 3) {
        materials.push(arr[i]);
    }
    return materials;
}
