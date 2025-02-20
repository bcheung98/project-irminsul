import { talentMaterials } from "data/materials/talentMaterials";
import { weaponAscensionMaterials } from "data/materials/weaponAscensionMaterials";
import { Material } from "types/materials";
import { getMaterialKeyNames } from "./materials";

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

export const dropDates = ["Mon/Thu", "Tue/Fri", "Wed/Sat"];

export function materialDates(day: Weekday) {
    switch (day) {
        case "Monday":
        case "Thursday":
            return {
                characters: getMaterials(talentMaterials, 0),
                weapons: getMaterials(weaponAscensionMaterials, 0),
            };
        case "Tuesday":
        case "Friday":
            return {
                characters: getMaterials(talentMaterials, 1),
                weapons: getMaterials(weaponAscensionMaterials, 1),
            };
        case "Wednesday":
        case "Saturday":
            return {
                characters: getMaterials(talentMaterials, 2),
                weapons: getMaterials(weaponAscensionMaterials, 2),
            };
        default:
            return {
                characters: getMaterialKeyNames([...talentMaterials]),
                weapons: getMaterialKeyNames([...weaponAscensionMaterials]),
            };
    }
}

export function getMaterials(arr: readonly Material[], index: number) {
    const materials = arr.filter((mat) => mat.source === dropDates[index]);
    return getMaterialKeyNames(materials);
}
