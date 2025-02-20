import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { WeaponSubStat } from "data/weaponStats";
import { objectKeys } from "helpers/utils";
import { Rarity, WeaponType } from "types/_common";
import {
    CommonMaterial,
    EliteMaterial,
    WeaponAscensionMaterial,
} from "types/materials";

export interface WeaponFilterState {
    weaponType: WeaponType[];
    rarity: Rarity[];
    substats: WeaponSubStat[];
    ascensionMat: WeaponAscensionMaterial[];
    eliteMat: EliteMaterial[];
    commonMat: CommonMaterial[];
}

const initialState: WeaponFilterState = {
    weaponType: [],
    rarity: [],
    substats: [],
    ascensionMat: [],
    eliteMat: [],
    commonMat: [],
};

export const weaponFilterSlice = createSlice({
    name: "weaponFilters",
    initialState,
    reducers: {
        setWeaponType: (state, action: PayloadAction<WeaponType[]>) => {
            state.weaponType = action.payload;
        },
        setRarity: (state, action: PayloadAction<Rarity[]>) => {
            state.rarity = action.payload;
        },
        setSubstat: (state, action: PayloadAction<WeaponSubStat[]>) => {
            state.substats = action.payload;
        },
        setAscensionMat: (
            state,
            action: PayloadAction<WeaponAscensionMaterial[]>
        ) => {
            state.ascensionMat = action.payload;
        },
        setEliteMat: (state, action: PayloadAction<EliteMaterial[]>) => {
            state.eliteMat = action.payload;
        },
        setCommonMat: (state, action: PayloadAction<CommonMaterial[]>) => {
            state.commonMat = action.payload;
        },
        clearFilters: (
            state,
            action: PayloadAction<keyof WeaponFilterState | undefined>
        ) => {
            if (!action.payload) {
                return initialState;
            } else {
                state[action.payload] = [];
            }
        },
    },
    selectors: {
        selectWeaponFilters: (state): WeaponFilterState => state,
        activeWeaponFilters: (state): boolean =>
            objectKeys(state).filter((filter) => state[filter].length).length >
            0,
    },
});

export const {
    setWeaponType,
    setRarity,
    setSubstat,
    setAscensionMat,
    setEliteMat,
    setCommonMat,
    clearFilters,
} = weaponFilterSlice.actions;

export const { selectWeaponFilters, activeWeaponFilters } =
    weaponFilterSlice.selectors;

export default weaponFilterSlice.reducer;
