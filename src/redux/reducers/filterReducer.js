const initialState = {
    element: [],
    weapon: [],
    rarity: [],
    talent: [],
    commonMat: [],
    bossMat: [],
    weeklyBossMat: [],
    localMat: [],
    nation: []
}

const filterReducer = (state = initialState, action) => {
    let { target, type } = action;
    if (target !== undefined) {
        let targetButton;
        if (target === "4" || target === "5") {
            targetButton = document.getElementById(`${target}-button`);
        }
        else {
            targetButton = document.getElementById(`${target.toLowerCase()}-button`);
        }
        targetButton.className === "filter-off" ? targetButton.className = "filter-on" : targetButton.className = "filter-off";
    }
    switch (type) {
        case "SET_ELEMENT_FILTERS":
            let tempElement = [...state.element];
            !state.element.includes(target) ? tempElement.push(target) : tempElement.splice(tempElement.indexOf(target), 1);
            let elementText = document.getElementById(`${type.split("_")[1].toLowerCase()}-filter-text`);
            elementText.className === "filter-text-on" && tempElement.length === 0 ? elementText.className = "filter-text-off" : elementText.className = "filter-text-on";
            return {
                ...state,
                element: tempElement
            }
        case "SET_WEAPON_FILTERS":
            let tempWeapon = [...state.weapon];
            !state.weapon.includes(target) ? tempWeapon.push(target) : tempWeapon.splice(tempWeapon.indexOf(target), 1);
            let weaponText = document.getElementById(`${type.split("_")[1].toLowerCase()}-filter-text`);
            weaponText.className === "filter-text-on" && tempWeapon.length === 0 ? weaponText.className = "filter-text-off" : weaponText.className = "filter-text-on";
            return {
                ...state,
                weapon: tempWeapon
            }
        case "SET_RARITY_FILTERS":
            let tempRarity = [...state.rarity];
            !state.rarity.includes(parseInt(target)) ? tempRarity.push(parseInt(target)) : tempRarity.splice(tempRarity.indexOf(parseInt(target)), 1);
            let rarityText = document.getElementById(`${type.split("_")[1].toLowerCase()}-filter-text`);
            rarityText.className === "filter-text-on" && tempRarity.length === 0 ? rarityText.className = "filter-text-off" : rarityText.className = "filter-text-on";
            return {
                ...state,
                rarity: tempRarity
            }
        case "SET_TALENT_FILTERS":
            let tempTalent = [...state.talent];
            !state.talent.includes(target) ? tempTalent.push(target) : tempTalent.splice(tempTalent.indexOf(target), 1);
            let talentText = document.getElementById(`${type.split("_")[1].toLowerCase()}-filter-text`);
            talentText.className === "filter-text-on" && tempTalent.length === 0 ? talentText.className = "filter-text-off" : talentText.className = "filter-text-on";
            return {
                ...state,
                talent: tempTalent
            }
        case "SET_COMMON_MAT_FILTERS":
            let tempCommonMat = [...state.commonMat];
            !state.commonMat.includes(target) ? tempCommonMat.push(target) : tempCommonMat.splice(tempCommonMat.indexOf(target), 1);
            let commonMatText = document.getElementById(`${type.split("_")[1].toLowerCase()}-filter-text`);
            commonMatText.className === "filter-text-on" && tempCommonMat.length === 0 ? commonMatText.className = "filter-text-off" : commonMatText.className = "filter-text-on";
            return {
                ...state,
                commonMat: tempCommonMat
            }
        case "SET_BOSS_MAT_FILTERS":
            let tempBossMat = [...state.bossMat];
            !state.bossMat.includes(target) ? tempBossMat.push(target) : tempBossMat.splice(tempBossMat.indexOf(target), 1);
            let bossText = document.getElementById(`${type.split("_")[1].toLowerCase()}-filter-text`);
            bossText.className === "filter-text-on" && tempBossMat.length === 0 ? bossText.className = "filter-text-off" : bossText.className = "filter-text-on";
            return {
                ...state,
                bossMat: tempBossMat
            }
        case "SET_WEEKLYBOSS_MAT_FILTERS":
            let tempWeeklyBossMat = [...state.weeklyBossMat];
            !state.weeklyBossMat.includes(target) ? tempWeeklyBossMat.push(target) : tempWeeklyBossMat.splice(tempWeeklyBossMat.indexOf(target), 1);
            let weeklyBossText = document.getElementById(`${type.split("_")[1].toLowerCase()}-filter-text`);
            weeklyBossText.className === "filter-text-on" && tempWeeklyBossMat.length === 0 ? weeklyBossText.className = "filter-text-off" : weeklyBossText.className = "filter-text-on";
            return {
                ...state,
                weeklyBossMat: tempWeeklyBossMat
            }
        case "SET_LOCAL_MAT_FILTERS":
            let tempLocalMat = [...state.localMat];
            !state.localMat.includes(target) ? tempLocalMat.push(target) : tempLocalMat.splice(tempLocalMat.indexOf(target), 1);
            let localText = document.getElementById(`${type.split("_")[1].toLowerCase()}-filter-text`);
            localText.className === "filter-text-on" && tempLocalMat.length === 0 ? localText.className = "filter-text-off" : localText.className = "filter-text-on";
            return {
                ...state,
                localMat: tempLocalMat
            }
        case "SET_NATION_FILTERS":
            let tempNation = [...state.nation];
            !state.nation.includes(target) ? tempNation.push(target) : tempNation.splice(tempNation.indexOf(target), 1);
            let nationText = document.getElementById(`${type.split("_")[1].toLowerCase()}-filter-text`);
            nationText.className === "filter-text-on" && tempNation.length === 0 ? nationText.className = "filter-text-off" : nationText.className = "filter-text-on";
            return {
                ...state,
                nation: tempNation
            }
        default:
            return state
    }
}

export default filterReducer;