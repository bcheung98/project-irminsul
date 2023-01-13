export const filterCharacters = (characters, filters, searchValue) => {
    let chars = [...characters];
    if (filters.element.length > 0) {
        chars = chars.filter(char => filters.element.includes(char.element));
    }
    if (filters.weapon.length > 0) {
        chars = chars.filter(char => filters.weapon.includes(char.weapon));
    }
    if (filters.rarity.length > 0) {
        chars = chars.filter(char => filters.rarity.includes(char.rarity));
    }
    if (filters.talent.length > 0) {
        chars = chars.filter(char => filters.talent.includes(char.materials.talentBook));
    }
    if (filters.commonMat.length > 0) {
        chars = chars.filter(char => filters.commonMat.includes(char.materials.commonMat));
    }
    if (filters.bossMat.length > 0) {
        chars = chars.filter(char => filters.bossMat.includes(char.materials.bossMat));
    }
    if (filters.weeklyBossMat.length > 0) {
        chars = chars.filter(char => filters.weeklyBossMat.includes(char.materials.weeklyBossMat));
    }
    if (filters.localMat.length > 0) {
        chars = chars.filter(char => filters.localMat.includes(char.materials.localMat));
    }
    if (filters.nation.length > 0) {
        chars = chars.filter(char => filters.nation.includes(char.nation));
    }
    if (searchValue !== "") {
        chars = chars.filter(char => char.name.toLowerCase().includes(searchValue.toLowerCase()))
    }

    return chars
}