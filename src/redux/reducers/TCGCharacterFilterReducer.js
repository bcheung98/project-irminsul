const initialState = {
    element: [],
    weapon: [],
    faction: []
}

const TCGCharacterFilterReducer = (state = initialState, action) => {
    let { target, type } = action;
    if (target !== undefined && type.startsWith("SET_TCGCHAR")) {
        let targetButton = document.getElementById(`${target.toLowerCase()}-button`);
        targetButton.className === "filter-off" ? targetButton.className = "filter-on" : targetButton.className = "filter-off";
    }
    switch (type) {
        case "SET_TCGCHAR_ELEMENT_FILTERS":
            let tempElement = [...state.element];
            !state.element.includes(target) ? tempElement.push(target) : tempElement.splice(tempElement.indexOf(target), 1);
            let elementText = document.getElementById(`${type.split("_")[2].toLowerCase()}-filter-text`);
            elementText.className === "filter-text-on" && tempElement.length === 0 ? elementText.className = "filter-text-off" : elementText.className = "filter-text-on";
            return {
                ...state,
                element: tempElement
            }
        case "SET_TCGCHAR_CHARACTERWEAPON_FILTERS":
            let tempWeapon = [...state.weapon];
            !state.weapon.includes(target) ? tempWeapon.push(target) : tempWeapon.splice(tempWeapon.indexOf(target), 1);
            let weaponText = document.getElementById(`${type.split("_")[2].toLowerCase()}-filter-text`);
            weaponText.className === "filter-text-on" && tempWeapon.length === 0 ? weaponText.className = "filter-text-off" : weaponText.className = "filter-text-on";
            return {
                ...state,
                weapon: tempWeapon
            }
        case "SET_TCGCHAR_FACTION_FILTERS":
            let tempFaction = [...state.faction];
            !state.faction.includes(target) ? tempFaction.push(target) : tempFaction.splice(tempFaction.indexOf(target), 1);
            let factionText = document.getElementById(`${type.split("_")[2].toLowerCase()}-filter-text`);
            factionText.className === "filter-text-on" && tempFaction.length === 0 ? factionText.className = "filter-text-off" : factionText.className = "filter-text-on";
            return {
                ...state,
                faction: tempFaction
            }
        default:
            return state;
    }
}

export default TCGCharacterFilterReducer;