import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk";

import CharacterReducer from "./reducers/CharacterReducer";
import WeaponReducer from "./reducers/WeaponReducer";
import CharacterFilterReducer from "./reducers/CharacterFilterReducer";
import WeaponFilterReducer from "./reducers/WeaponFilterReducer";
import ArtifactReducer from "./reducers/ArtifactReducer";
import BannerReducer from "./reducers/BannerReducer";
import AscensionPlannerReducer from "./reducers/AscensionPlannerReducer";
import TCGReducer from "./reducers/TCGReducer";
import TCGCharacterFilterReducer from "./reducers/TCGCharacterFilterReducer";
import TCGActionFilterReducer from "./reducers/TCGActionFilterReducer";
import DeckReducer from "./reducers/DeckReducer";

const rootReducer = combineReducers({
    characters: CharacterReducer,
    characterFilters: CharacterFilterReducer,
    weapons: WeaponReducer,
    weaponFilters: WeaponFilterReducer,
    artifacts: ArtifactReducer,
    banners: BannerReducer,
    ascensionPlanner: AscensionPlannerReducer,
    cards: TCGReducer,
    cardCharFilters: TCGCharacterFilterReducer,
    cardActionFilters: TCGActionFilterReducer,
    deck: DeckReducer
})

const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunk)
)

export default createStore(
    rootReducer,
    composedEnhancer
)