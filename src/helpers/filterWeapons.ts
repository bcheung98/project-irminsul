import { Weapon } from "types/weapon";
import { WeaponFilterState } from "reducers/weaponFilters";
import { BrowserSettings } from "reducers/browser";

export function filterWeapons(
    weapons: Weapon[],
    filters: WeaponFilterState,
    searchValue: string,
    sortSettings: BrowserSettings
) {
    let weps = [...weapons];
    if (filters.weaponType.length > 0) {
        weps = weps.filter((weapon) =>
            filters.weaponType.includes(weapon.type)
        );
    }
    if (filters.rarity.length > 0) {
        weps = weps.filter((weapon) => filters.rarity.includes(weapon.rarity));
    }
    if (filters.substats.length > 0) {
        weps = weps.filter((weapon) =>
            filters.substats.includes(weapon.stats.subStat)
        );
    }
    if (filters.ascensionMat.length > 0) {
        weps = weps.filter((weapon) =>
            filters.ascensionMat.includes(weapon.materials.weaponAscensionMat)
        );
    }
    if (filters.eliteMat.length > 0) {
        weps = weps.filter((weapon) =>
            filters.eliteMat.includes(weapon.materials.eliteMat)
        );
    }
    if (filters.commonMat.length > 0) {
        weps = weps.filter((weapon) =>
            filters.commonMat.includes(weapon.materials.commonMat)
        );
    }
    if (searchValue !== "") {
        weps = weps.filter(
            (wep) =>
                wep.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                wep.displayName
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
        );
    }

    switch (sortSettings.sortBy) {
        case "name":
            weps = weps.sort((a, b) =>
                a.displayName.localeCompare(b.displayName)
            );
            break;
        case "rarity":
            weps = weps.sort(
                (a, b) =>
                    b.rarity - a.rarity ||
                    a.displayName.localeCompare(b.displayName)
            );
            break;
        case "weapon":
            weps = weps.sort(
                (a, b) =>
                    a.type.localeCompare(b.type) ||
                    a.displayName.localeCompare(b.displayName)
            );
            break;
        case "release":
            weps = weps.sort(
                (a, b) =>
                    b.id - a.id || a.displayName.localeCompare(b.displayName)
            );
            break;
        case "element":
            break;
    }

    if (sortSettings.sortDirection === "desc") {
        weps = weps.reverse();
    }

    return weps;
}
