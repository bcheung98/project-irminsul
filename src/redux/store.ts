import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { combineReducers } from "redux"

import ThemeReducer from "./reducers/ThemeReducer"
import CharacterReducer from "./reducers/CharacterReducer"
import WeaponReducer from "./reducers/WeaponReducer"
import CharacterFilterReducer from "./reducers/CharacterFilterReducer"
import WeaponFilterReducer from "./reducers/WeaponFilterReducer"
import ArtifactReducer from "./reducers/ArtifactReducer"
import BannerReducer from "./reducers/BannerReducer"
import AscensionPlannerReducer from "./reducers/AscensionPlannerReducer"
import TCGReducer from "./reducers/TCGReducer"
import TCGCharacterFilterReducer from "./reducers/TCGCharacterFilterReducer"
import TCGActionFilterReducer from "./reducers/TCGActionFilterReducer"
import DeckReducer from "./reducers/DeckReducer"

const rootReducer = combineReducers({
    theme: ThemeReducer,
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

const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store