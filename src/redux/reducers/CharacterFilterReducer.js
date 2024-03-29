const initialState = {
    element: [],
    weapon: [],
    rarity: [],
    ascStat: [],
    talent: [],
    commonMat: [],
    bossMat: [],
    weeklyBossMat: [],
    localMat: [],
    nation: [],
    gender: []
}

const CharacterFilterReducer = (state = initialState, action) => {
    let { target, type } = action;
    if (target !== undefined && type.startsWith("SET_CHAR")) {
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
        case "SET_CHAR_ELEMENT_FILTERS":
            let tempElement = [...state.element];
            !state.element.includes(target) ? tempElement.push(target) : tempElement.splice(tempElement.indexOf(target), 1);
            let elementText = document.getElementById(`${type.split("_")[2].toLowerCase()}-filter-text`);
            elementText.className === "filter-text-on" && tempElement.length === 0 ? elementText.className = "filter-text-off" : elementText.className = "filter-text-on";
            return {
                ...state,
                element: tempElement
            }
        case "SET_CHAR_WEAPON_FILTERS":
            let tempWeapon = [...state.weapon];
            !state.weapon.includes(target) ? tempWeapon.push(target) : tempWeapon.splice(tempWeapon.indexOf(target), 1);
            let weaponText = document.getElementById(`${type.split("_")[2].toLowerCase()}-filter-text`);
            weaponText.className === "filter-text-on" && tempWeapon.length === 0 ? weaponText.className = "filter-text-off" : weaponText.className = "filter-text-on";
            return {
                ...state,
                weapon: tempWeapon
            }
        case "SET_CHAR_RARITY_FILTERS":
            let tempRarity = [...state.rarity];
            !state.rarity.includes(parseInt(target)) ? tempRarity.push(parseInt(target)) : tempRarity.splice(tempRarity.indexOf(parseInt(target)), 1);
            let rarityText = document.getElementById(`${type.split("_")[2].toLowerCase()}-filter-text`);
            rarityText.className === "filter-text-on" && tempRarity.length === 0 ? rarityText.className = "filter-text-off" : rarityText.className = "filter-text-on";
            return {
                ...state,
                rarity: tempRarity
            }
        case "SET_CHAR_ASCSTAT_FILTERS":
            let tempStat = [...state.ascStat];
            !state.ascStat.includes(target) ? tempStat.push(target) : tempStat.splice(tempStat.indexOf(target), 1);
            let statText = document.getElementById(`${type.split("_")[2].toLowerCase()}-filter-text`);
            statText.className === "filter-text-on" && tempStat.length === 0 ? statText.className = "filter-text-off" : statText.className = "filter-text-on";
            return {
                ...state,
                ascStat: tempStat
            }
        case "SET_CHAR_TALENT_FILTERS":
            let tempTalent = [...state.talent];
            !state.talent.includes(target) ? tempTalent.push(target) : tempTalent.splice(tempTalent.indexOf(target), 1);
            let talentText = document.getElementById(`${type.split("_")[2].toLowerCase()}-filter-text`);
            talentText.className === "filter-text-on" && tempTalent.length === 0 ? talentText.className = "filter-text-off" : talentText.className = "filter-text-on";
            return {
                ...state,
                talent: tempTalent
            }
        case "SET_CHAR_COMMON_MAT_FILTERS":
            let tempCommonMat = [...state.commonMat];
            !state.commonMat.includes(target) ? tempCommonMat.push(target) : tempCommonMat.splice(tempCommonMat.indexOf(target), 1);
            let commonMatText = document.getElementById(`${type.split("_")[2].toLowerCase()}-filter-text`);
            commonMatText.className === "filter-text-on" && tempCommonMat.length === 0 ? commonMatText.className = "filter-text-off" : commonMatText.className = "filter-text-on";
            return {
                ...state,
                commonMat: tempCommonMat
            }
        case "SET_CHAR_BOSS_MAT_FILTERS":
            let tempBossMat = [...state.bossMat];
            !state.bossMat.includes(target) ? tempBossMat.push(target) : tempBossMat.splice(tempBossMat.indexOf(target), 1);
            let bossText = document.getElementById(`${type.split("_")[2].toLowerCase()}-filter-text`);
            bossText.className === "filter-text-on" && tempBossMat.length === 0 ? bossText.className = "filter-text-off" : bossText.className = "filter-text-on";
            return {
                ...state,
                bossMat: tempBossMat
            }
        case "SET_CHAR_WEEKLYBOSS_MAT_FILTERS":
            let tempWeeklyBossMat = [...state.weeklyBossMat];
            !state.weeklyBossMat.includes(target) ? tempWeeklyBossMat.push(target) : tempWeeklyBossMat.splice(tempWeeklyBossMat.indexOf(target), 1);
            let weeklyBossText = document.getElementById(`${type.split("_")[2].toLowerCase()}-filter-text`);
            weeklyBossText.className === "filter-text-on" && tempWeeklyBossMat.length === 0 ? weeklyBossText.className = "filter-text-off" : weeklyBossText.className = "filter-text-on";
            return {
                ...state,
                weeklyBossMat: tempWeeklyBossMat
            }
        case "SET_CHAR_LOCAL_MAT_FILTERS":
            let tempLocalMat = [...state.localMat];
            !state.localMat.includes(target) ? tempLocalMat.push(target) : tempLocalMat.splice(tempLocalMat.indexOf(target), 1);
            let localText = document.getElementById(`${type.split("_")[2].toLowerCase()}-filter-text`);
            localText.className === "filter-text-on" && tempLocalMat.length === 0 ? localText.className = "filter-text-off" : localText.className = "filter-text-on";
            return {
                ...state,
                localMat: tempLocalMat
            }
        case "SET_CHAR_NATION_FILTERS":
            let tempNation = [...state.nation];
            !state.nation.includes(target) ? tempNation.push(target) : tempNation.splice(tempNation.indexOf(target), 1);
            let nationText = document.getElementById(`${type.split("_")[2].toLowerCase()}-filter-text`);
            nationText.className === "filter-text-on" && tempNation.length === 0 ? nationText.className = "filter-text-off" : nationText.className = "filter-text-on";
            return {
                ...state,
                nation: tempNation
            }
        case "SET_CHAR_GENDER_FILTERS":
            let tempGender = [...state.gender];
            !state.gender.includes(target) ? tempGender.push(target) : tempGender.splice(tempGender.indexOf(target), 1);
            let genderText = document.getElementById(`${type.split("_")[2].toLowerCase()}-filter-text`);
            genderText.className === "filter-text-on" && tempGender.length === 0 ? genderText.className = "filter-text-off" : genderText.className = "filter-text-on";
            return {
                ...state,
                gender: tempGender
            }
        default:
            return state
    }
}

export default CharacterFilterReducer;