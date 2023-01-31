const initialState = {
    deck: {
        characterCards: [],
        actionCards: []
    }
}

const deckReducer = (state = initialState, action) => {
    let tempCharCardArr;
    let tempActionCardArr;
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
        case "ADD_ACTION_CARD":
            tempActionCardArr = [...state.deck.actionCards];
            state.deck.actionCards.filter(card => card === action.card).length < 2 && state.deck.actionCards.length < 30 && tempActionCardArr.push(action.card);
            return {
                ...state,
                deck: {
                    ...state.deck,
                    actionCards: tempActionCardArr.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
                }
            };
        case "REMOVE_ACTION_CARD":
            tempActionCardArr = [...state.deck.actionCards];
            tempActionCardArr.splice(tempActionCardArr.indexOf(action.card), 1)
            return {
                ...state,
                deck: {
                    ...state.deck,
                    actionCards: tempActionCardArr.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
                }
            };
        case "SAVE_DECK":
            if (action.deck.characterCards.length > 0 && action.deck.actionCards.length > 0) {
                let deckData = JSON.stringify(action.deck);
                let blob = new Blob([deckData], { type: "text/plain" });
                let URL = window.URL.createObjectURL(blob);
                let link = document.createElement("a");
                link.download = "deck.deck";
                link.href = URL;
                link.click();
                window.URL.revokeObjectURL(URL);
            }
            else {
                console.error("Cannot save an empty deck!");
            }
            return state;
        case "LOAD_DECK":
            return {
                ...state,
                deck: action.deck
            };
        default:
            return state;
    }
}

export default deckReducer;