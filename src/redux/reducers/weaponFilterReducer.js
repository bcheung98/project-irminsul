const initialState = {
    wep_weapon: [],
    wep_rarity: []
}

const weaponFilterReducer = (state = initialState, action) => {
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
        default:
            return state

    }
}

export default weaponFilterReducer;