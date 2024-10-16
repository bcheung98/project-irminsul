import { createSlice } from "@reduxjs/toolkit"
import { fetchCharacterBanners, fetchWeaponBanners, fetchChronicledWish } from "../actions/fetch"
import { BannerData, ChronicledWishBannerData } from "../../types/banner/BannerData"

export interface BannerState {
    loading: boolean,
    characterBanners: BannerData[],
    weaponBanners: BannerData[],
    chronicledWish: ChronicledWishBannerData[]
}

const initialState: BannerState = {
    loading: false,
    characterBanners: [],
    weaponBanners: [],
    chronicledWish: []
}

export const BannerSlice = createSlice({
    name: "banner banners",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCharacterBanners.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchCharacterBanners.fulfilled, (state, action) => {
            state.characterBanners = action.payload
            state.loading = false
        })
        builder.addCase(fetchCharacterBanners.rejected, (state) => {
            state.loading = false
        })
        builder.addCase(fetchWeaponBanners.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchWeaponBanners.fulfilled, (state, action) => {
            state.weaponBanners = action.payload
            state.loading = false
        })
        builder.addCase(fetchWeaponBanners.rejected, (state) => {
            state.loading = false
        })
        builder.addCase(fetchChronicledWish.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchChronicledWish.fulfilled, (state, action) => {
            state.chronicledWish = action.payload
            state.loading = false
        })
        builder.addCase(fetchChronicledWish.rejected, (state) => {
            state.loading = false
        })
    }
})

export default BannerSlice.reducer