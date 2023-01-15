const initialState = {
    weapons: [],
    requesting: false
}

const weaponReducer = (state = initialState, action) => {
    switch (action.type) {
        case "START_GETTING_WEAPONS_REQUEST":
            return {
                ...state,
                weapons: [...state.weapons],
                requesting: true
            }
        case "GET_WEAPONS":
            return {
                ...state,
                weapons: action.weapons.sort((a, b) => a.name.localeCompare(b.name)),
                requesting: false
            }
        default:
            return state;
    }
}

export default weaponReducer;