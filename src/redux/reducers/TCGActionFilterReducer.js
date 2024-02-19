const initialState = {
    type: [],
    subType: []
}

const TCGActionFilterReducer = (state = initialState, action) => {
    let { target, type } = action;
    if (target !== undefined && type.startsWith("SET_TCGACTION")) {
        let targetButton = document.getElementById(`tcg-action-${target.toLowerCase()}-button`);
        if (type === "SET_TCGACTION_TYPE_FILTERS") {
            targetButton.className === "filter-button-off" ? targetButton.className = "filter-button-on" : targetButton.className = "filter-button-off";
        }
        else {
            targetButton.className === "filter-off" ? targetButton.className = "filter-on" : targetButton.className = "filter-off";
        }
    }
    switch (type) {
        case "SET_TCGACTION_TYPE_FILTERS":
            let tempType = [...state.type];
            !state.type.includes(target) ? tempType.push(target) : tempType.splice(tempType.indexOf(target), 1);
            let typeText = document.getElementById(`action-${type.split("_")[2].toLowerCase()}-filter-text`);
            typeText.className === "filter-text-on" && tempType.length === 0 ? typeText.className = "filter-text-off" : typeText.className = "filter-text-on";
            return {
                ...state,
                type: tempType
            }
        case "SET_TCGACTION_SUBTYPE_FILTERS":
            let tempSubType = [...state.subType];
            !state.subType.includes(target) ? tempSubType.push(target) : tempSubType.splice(tempSubType.indexOf(target), 1);
            let subTypeText = document.getElementById(`action-${type.split("_")[2].toLowerCase()}-filter-text`);
            subTypeText.className === "filter-text-on" && tempSubType.length === 0 ? subTypeText.className = "filter-text-off" : subTypeText.className = "filter-text-on";
            return {
                ...state,
                subType: tempSubType
            }
        default:
            return state;
    }
}

export default TCGActionFilterReducer;