const initialState = {
    deck: {
        characterCards: [],
        actionCards: []
    }
}

const deckReducer = (state = initialState, action) => {
    let tempCharCardArr;
    switch (action.type) {
        case "ADD_CHAR_CARD":
            tempCharCardArr = [...state.deck.characterCards];
            !state.deck.characterCards.includes(action.card) && state.deck.characterCards.length < 3 && tempCharCardArr.push(action.card);
            return {
                ...state,
                deck: {
                    ...state.deck,
                    characterCards: tempCharCardArr
                }
            };
        case "REMOVE_CHAR_CARD":
            tempCharCardArr = [...state.deck.characterCards];
            tempCharCardArr.splice(tempCharCardArr.indexOf(action.card), 1);
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