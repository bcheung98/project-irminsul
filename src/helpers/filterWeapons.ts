import { WeaponFilterState } from "reducers/weaponFilters";
import { Weapon } from "types/weapon";

export function filterWeapons(
    weapons: Weapon[],
    filters: WeaponFilterState,
    searchValue: string
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
    return weps;
}
