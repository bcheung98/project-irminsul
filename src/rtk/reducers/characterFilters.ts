import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CharacterAscensionStat } from "data/characterAscensionStats";
import { objectKeys } from "helpers/utils";
import { Element, Nation, Rarity, WeaponType } from "types/_common";
import {
    BossMaterial,
    CommonMaterialKeys,
    LocalMaterial,
    TalentMaterialKeys,
    WeeklyBossMaterial,
} from "types/materials";

export interface CharacterFilterState {
    element: Element[];
    weapon: WeaponType[];
    rarity: Rarity[];
    ascStat: CharacterAscensionStat[];
    talentBook: TalentMaterialKeys[];
    commonMat: CommonMaterialKeys[];
    bossMat: BossMaterial[];
    weeklyBossMat: WeeklyBossMaterial[];
    localMat: LocalMaterial[];
    nation: Nation[];
    gender: ("Male" | "Female")[];
}

const initialState: CharacterFilterState = {
    element: [],
    weapon: [],
    rarity: [],
    ascStat: [],
    talentBook: [],
    commonMat: [],
    bossMat: [],
    weeklyBossMat: [],
    localMat: [],
    nation: [],
    gender: [],
};

export const characterFilterSlice = createSlice({
    name: "characterFilters",
    initialState,
    reducers: {
        setElement: (state, action: PayloadAction<Element[]>) => {
            state.element = action.payload;
        },
        setWeapon: (state, action: PayloadAction<WeaponType[]>) => {
            state.weapon = action.payload;
        },
        setRarity: (state, action: PayloadAction<Rarity[]>) => {
            state.rarity = action.payload;
        },
        setAscensionStat: (
            state,
            action: PayloadAction<CharacterAscensionStat[]>
        ) => {
            state.ascStat = action.payload;
        },
        setTalentBook: (state, action: PayloadAction<TalentMaterialKeys[]>) => {
            state.talentBook = action.payload;
        },
        setCommonMat: (state, action: PayloadAction<CommonMaterialKeys[]>) => {
            state.commonMat = action.payload;
        },
        setBossMat: (state, action: PayloadAction<BossMaterial[]>) => {
            state.bossMat = action.payload;
        },
        setWeeklyBossMat: (
            state,
            action: PayloadAction<WeeklyBossMaterial[]>
        ) => {
            state.weeklyBossMat = action.payload;
        },
        setLocalMat: (state, action: PayloadAction<LocalMaterial[]>) => {
            state.localMat = action.payload;
        },
        setNation: (state, action: PayloadAction<Nation[]>) => {
            state.nation = action.payload;
        },
        setGender: (state, action: PayloadAction<("Male" | "Female")[]>) => {
            state.gender = action.payload;
        },
        clearFilters: (
            state,
            action: PayloadAction<keyof CharacterFilterState | undefined>
        ) => {
            if (!action.payload) {
                return initialState;
            } else {
                state[action.payload] = [];
            }
        },
    },
    selectors: {
        selectCharacterFilters: (state): CharacterFilterState => state,
        activeCharacterFilters: (state): boolean =>
            objectKeys(state).filter((filter) => state[filter].length).length >
            0,
    },
});

export const {
    setElement,
    setWeapon,
    setRarity,
    setAscensionStat,
    setTalentBook,
    setCommonMat,
    setBossMat,
    setWeeklyBossMat,
    setLocalMat,
    setNation,
    setGender,
    clearFilters,
} = characterFilterSlice.actions;

export const { selectCharacterFilters, activeCharacterFilters } =
    characterFilterSlice.selectors;

export default characterFilterSlice.reducer;
