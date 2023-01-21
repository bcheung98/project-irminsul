import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk";

import characterReducer from "./reducers/characterReducer";
import weaponReducer from "./reducers/weaponReducer";
import characterFilterReducer from "./reducers/characterFilterReducer";
import weaponFilterReducer from "./reducers/weaponFilterReducer";
import bannerReducer from "./reducers/bannerReducer";

const rootReducer = combineReducers({
    characters: characterReducer,
    characterFilters: characterFilterReducer,
    weapons: weaponReducer,
    weaponFilters: weaponFilterReducer,
    banners: bannerReducer,
})

const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunk)
)

export default createStore(
    rootReducer,
    composedEnhancer
)