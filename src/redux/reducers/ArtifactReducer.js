const initialState = {
    artifacts: [],
    requesting: false
}

const ArtifactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "START_GETTING_ARTIFACTS_REQUEST":
            return {
                ...state,
                artifacts: [...state.artifacts],
                requesting: true
            }
        case "GET_ARTIFACTS":
            return {
                ...state,
                artifacts: action.artifacts.sort((a, b) => b.rarity - a.rarity || a.name.localeCompare(b.name)),
                requesting: false
            }
        default:
            return state;
    }
}

export default ArtifactReducer;