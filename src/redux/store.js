import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk";

import characterReducer from "./reducers/characterReducer";
import filterReducer from "./reducers/filterReducer";

const rootReducer = combineReducers({
    characters: characterReducer,
    filters: filterReducer
})

const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunk)
)

export default createStore(
    rootReducer,
    composedEnhancer
)