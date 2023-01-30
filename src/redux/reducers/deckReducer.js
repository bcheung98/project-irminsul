const initialState = {
    deck: {
        characterCards: [],
        actionCards: []
    }
}

const deckReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CHAR_CARD":
            let tempCharCardArr = [...state.deck.characterCards];
            !state.deck.characterCards.includes(action.card) && state.deck.characterCards.length < 3 && tempCharCardArr.push(action.card);
            return {
                ...state,
                deck: {
                    ...state.deck,
                    characterCards: tempCharCardArr
                }
            };
        default:
            return state;
    }
}

export default deckReducer;