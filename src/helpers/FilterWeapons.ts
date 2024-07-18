import { WeaponFilterState } from "../redux/reducers/WeaponFilterReducer"

export function filterWeapons(weaponsList: any, filters: WeaponFilterState, searchValue: string) {
    let weapons = [...weaponsList]
    if (filters.weaponType.length > 0) {
        weapons = weapons.filter(weapon => filters.weaponType.includes(weapon.type))
    }
    if (filters.rarity.length > 0) {
        weapons = weapons.filter(weapon => filters.rarity.includes(weapon.rarity.toString()))
    }
    if (filters.substats.length > 0) {
        weapons = weapons.filter(weapon => filters.substats.includes(weapon.stats.subStat))
    }
    if (filters.ascensionMat.length > 0) {
        weapons = weapons.filter(weapon => filters.ascensionMat.includes(weapon.materials.ascensionMat))
    }
    if (filters.eliteMat.length > 0) {
        weapons = weapons.filter(weapon => filters.eliteMat.includes(weapon.materials.eliteMat))
    }
    if (filters.commonMat.length > 0) {
        weapons = weapons.filter(weapon => filters.commonMat.includes(weapon.materials.commonMat))
    }
    if (searchValue !== "") {
        weapons = weapons.filter(weapon => weapon.name.toLowerCase().includes(searchValue.toLowerCase()))
    }
    return weapons
}