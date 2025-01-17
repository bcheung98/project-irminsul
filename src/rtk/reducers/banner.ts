import { createSlice } from "@reduxjs/toolkit";
import { startAppListening } from "helpers/hooks";
import {
    fetchCharacterBanners,
    fetchWeaponBanners,
    fetchChronicledWish,
    LoadingStatus,
} from "rtk/fetchData";
import { Banner, ChronicledWishBanner } from "types/banner";

export interface BannerState {
    status: LoadingStatus;
    characterBanners: Banner[];
    weaponBanners: Banner[];
    chronicledWish: ChronicledWishBanner[];
}

const storedCharacterBanners =
    localStorage.getItem("banners/character") || "null";
const storedWeaponBanners = localStorage.getItem("banners/weapon") || "null";
const storedChronicledWish =
    localStorage.getItem("banners/chronicled") || "null";

const initialState: BannerState = {
    status: "idle",
    characterBanners:
        storedCharacterBanners !== "null"
            ? JSON.parse(storedCharacterBanners)
            : [],
    weaponBanners:
        storedWeaponBanners !== "null" ? JSON.parse(storedWeaponBanners) : [],
    chronicledWish:
        storedChronicledWish !== "null" ? JSON.parse(storedChronicledWish) : [],
};

export const bannerSlice = createSlice({
    name: "banners",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCharacterBanners.pending, (state) => {
            state.status = "pending";
        });
        builder.addCase(fetchCharacterBanners.fulfilled, (state, action) => {
            if (JSON.stringify(action.payload) !== storedCharacterBanners) {
                state.characterBanners = action.payload;
            }
            state.status = "success";
        });
        builder.addCase(fetchCharacterBanners.rejected, (state) => {
            state.status = "error";
        });
        builder.addCase(fetchWeaponBanners.pending, (state) => {
            state.status = "pending";
        });
        builder.addCase(fetchWeaponBanners.fulfilled, (state, action) => {
            if (JSON.stringify(action.payload) !== storedWeaponBanners) {
                state.weaponBanners = action.payload;
            }
            state.status = "success";
        });
        builder.addCase(fetchWeaponBanners.rejected, (state) => {
            state.status = "error";
        });
        builder.addCase(fetchChronicledWish.pending, (state) => {
            state.status = "pending";
        });
        builder.addCase(fetchChronicledWish.fulfilled, (state, action) => {
            if (JSON.stringify(action.payload) !== storedChronicledWish) {
                state.chronicledWish = action.payload;
            }
            state.status = "success";
        });
        builder.addCase(fetchChronicledWish.rejected, (state) => {
            state.status = "error";
        });
    },
    selectors: {
        getBannerStatus: (state): LoadingStatus => state.status,
        selectCharacterBanners: (state): Banner[] => state.characterBanners,
        selectWeaponBanners: (state): Banner[] => state.weaponBanners,
        selectChronicledWish: (state): ChronicledWishBanner[] =>
            state.chronicledWish,
    },
});

export const {
    getBannerStatus,
    selectCharacterBanners,
    selectWeaponBanners,
    selectChronicledWish,
} = bannerSlice.selectors;

export default bannerSlice.reducer;

startAppListening({
    actionCreator: fetchCharacterBanners.fulfilled,
    effect: (action) => {
        const data = JSON.stringify(action.payload);
        if (data !== storedCharacterBanners) {
            localStorage.setItem("banners/character", data);
        }
    },
});

startAppListening({
    actionCreator: fetchWeaponBanners.fulfilled,
    effect: (action) => {
        const data = JSON.stringify(action.payload);
        if (data !== storedWeaponBanners) {
            localStorage.setItem("banners/weapon", data);
        }
    },
});

startAppListening({
    actionCreator: fetchChronicledWish.fulfilled,
    effect: (action) => {
        const data = JSON.stringify(action.payload);
        if (data !== storedChronicledWish) {
            localStorage.setItem("banners/chronicled", data);
        }
    },
});
