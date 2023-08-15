const initialState = {
    cards: [],
    requesting: false
}

const TCGReducer = (state = initialState, action) => {
    switch (action.type) {
        case "START_GETTING_CARDS_REQUEST":
            return {
                ...state,
                cards: [...state.cards],
                requesting: true
            }
        case "GET_CARDS":
            return {
                ...state,
                cards: action.cards,
                requesting: false
            }
        default:
            return state;
    }
}

export default TCGReducer;