export const filterWeapons = (weaponsList, filters, searchValue) => {
    let weapons = [...weaponsList];
    if (filters.wep_weapon.length > 0) {
        weapons = weapons.filter(weapon => filters.wep_weapon.includes(weapon.type));
    }
    if (filters.wep_rarity.length > 0) {
        weapons = weapons.filter(weapon => filters.wep_rarity.includes(weapon.rarity));
    }
    if (filters.wep_substat.length > 0) {
        weapons = weapons.filter(weapon => filters.wep_substat.includes(weapon.stats.subStat));
    }
    if (filters.wep_ascMat.length > 0) {
        weapons = weapons.filter(weapon => filters.wep_ascMat.includes(weapon.materials.ascensionMat));
    }
    if (filters.wep_eliteMat.length > 0) {
        weapons = weapons.filter(weapon => filters.wep_eliteMat.includes(weapon.materials.eliteMat));
    }
    if (filters.wep_commonMat.length > 0) {
        weapons = weapons.filter(weapon => filters.wep_commonMat.includes(weapon.materials.commonMat));
    }
    if (searchValue !== "") {
        weapons = weapons.filter(weapon => weapon.name.toLowerCase().includes(searchValue.toLowerCase()))
    }
    return weapons
}