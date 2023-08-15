const initialState = {
    wep_weapon: [],
    wep_rarity: [],
    wep_substat: [],
    wep_ascMat: [],
    wep_eliteMat: [],
    wep_commonMat: []
}

const WeaponFilterReducer = (state = initialState, action) => {
    let { target, type } = action;
    if (target !== undefined && type.startsWith("SET_WEP")) {
        let targetButton;
        if (target === "4" || target === "5") {
            targetButton = document.getElementById(`wep-${target}-button`);
        }
        else {
            targetButton = document.getElementById(`wep-${target.toLowerCase()}-button`);
        }
        targetButton.className === "filter-off" ? targetButton.className = "filter-on" : targetButton.className = "filter-off";
    }
    switch (type) {
        case "SET_WEP_WEAPON_FILTERS":
            let tempWeapon = [...state.wep_weapon];
            !state.wep_weapon.includes(target) ? tempWeapon.push(target) : tempWeapon.splice(tempWeapon.indexOf(target), 1);
            let weaponText = document.getElementById(`wep-${type.split("_")[2].toLowerCase()}-filter-text`);
            weaponText.className === "filter-text-on" && tempWeapon.length === 0 ? weaponText.className = "filter-text-off" : weaponText.className = "filter-text-on";
            return {
                ...state,
                wep_weapon: tempWeapon
            }
        case "SET_WEP_RARITY_FILTERS":
            let tempRarity = [...state.wep_rarity];
            !state.wep_rarity.includes(parseInt(target)) ? tempRarity.push(parseInt(target)) : tempRarity.splice(tempRarity.indexOf(parseInt(target)), 1);
            let rarityText = document.getElementById(`wep-${type.split("_")[2].toLowerCase()}-filter-text`);
            rarityText.className === "filter-text-on" && tempRarity.length === 0 ? rarityText.className = "filter-text-off" : rarityText.className = "filter-text-on";
            return {
                ...state,
                wep_rarity: tempRarity
            }
        case "SET_WEP_SUBSTAT_FILTERS":
            let tempSubstat = [...state.wep_substat];
            !state.wep_substat.includes(target) ? tempSubstat.push(target) : tempSubstat.splice(tempSubstat.indexOf(target), 1);
            let substatText = document.getElementById(`wep-${type.split("_")[2].toLowerCase()}-filter-text`);
            substatText.className === "filter-text-on" && tempSubstat.length === 0 ? substatText.className = "filter-text-off" : substatText.className = "filter-text-on";
            return {
                ...state,
                wep_substat: tempSubstat
            }
        case "SET_WEP_ASCMAT_FILTERS":
            let tempAscMat = [...state.wep_ascMat];
            !state.wep_ascMat.includes(target) ? tempAscMat.push(target) : tempAscMat.splice(tempAscMat.indexOf(target), 1);
            let ascMatText = document.getElementById(`wep-${type.split("_")[2].toLowerCase()}-filter-text`);
            ascMatText.className === "filter-text-on" && tempAscMat.length === 0 ? ascMatText.className = "filter-text-off" : ascMatText.className = "filter-text-on";
            return {
                ...state,
                wep_ascMat: tempAscMat
            }
        case "SET_WEP_ELITEMAT_FILTERS":
            let tempEliteMat = [...state.wep_eliteMat];
            !state.wep_eliteMat.includes(target) ? tempEliteMat.push(target) : tempEliteMat.splice(tempEliteMat.indexOf(target), 1);
            let eliteMatText = document.getElementById(`wep-${type.split("_")[2].toLowerCase()}-filter-text`);
            eliteMatText.className === "filter-text-on" && tempEliteMat.length === 0 ? eliteMatText.className = "filter-text-off" : eliteMatText.className = "filter-text-on";
            return {
                ...state,
                wep_eliteMat: tempEliteMat
            }
        case "SET_WEP_COMMON_MAT_FILTERS":
            let tempCommonMat = [...state.wep_commonMat];
            !state.wep_commonMat.includes(target) ? tempCommonMat.push(target) : tempCommonMat.splice(tempCommonMat.indexOf(target), 1);
            let commonMatText = document.getElementById(`wep-${type.split("_")[2].toLowerCase()}-filter-text`);
            commonMatText.className === "filter-text-on" && tempCommonMat.length === 0 ? commonMatText.className = "filter-text-off" : commonMatText.className = "filter-text-on";
            return {
                ...state,
                wep_commonMat: tempCommonMat
            }
        default:
            return state

    }
}

export default WeaponFilterReducer;