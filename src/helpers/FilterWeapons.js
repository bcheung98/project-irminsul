export const filterWeapons = (weaponsList, filters, searchValue) => {
    let weapons = [...weaponsList];
    if (searchValue !== "") {
        weapons = weapons.filter(weapon => weapon.name.toLowerCase().includes(searchValue.toLowerCase()))
    }

    return weapons
}