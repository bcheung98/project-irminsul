import { createSlice } from "@reduxjs/toolkit"
import { fetchCharacterBanners, fetchWeaponBanners, fetchChronicledWish } from "../actions/fetch"
import { BannerData, ChronicledWishBannerData } from "../../types/banner/BannerData"
import { BannerRowData } from "../../types/banner/BannerRowData"

export interface BannerState {
    loading: boolean,
    characterBanners: BannerRowData[],
    weaponBanners: BannerRowData[],
    chronicledWish: BannerRowData[]
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
            let characterBanners: BannerRowData[] = []
            action.payload.map((version: BannerData) => Object.keys(version).slice(1).forEach((phase: string) => characterBanners.push({
                version: version.version,
                subVersion: `${version.version}.${phase.slice(-1)}`,
                startDate: (version[phase as keyof {}])["startDate"],
                endDate: (version[phase as keyof {}])["endDate"],
                banner: (version[phase as keyof {}])["banner"]
            } as BannerRowData)))
            state.characterBanners = characterBanners
            state.loading = false
        })
        builder.addCase(fetchCharacterBanners.rejected, (state) => {
            state.loading = false
        })
        builder.addCase(fetchWeaponBanners.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchWeaponBanners.fulfilled, (state, action) => {
            let weaponBanners: BannerRowData[] = []
            action.payload.map((version: BannerData) => Object.keys(version).slice(1).forEach((phase: string) => weaponBanners.push({
                version: version.version,
                subVersion: `${version.version}.${phase.slice(-1)}`,
                startDate: (version[phase as keyof {}])["startDate"],
                endDate: (version[phase as keyof {}])["endDate"],
                banner: (version[phase as keyof {}])["banner"]
            } as BannerRowData)))
            state.weaponBanners = weaponBanners
            state.loading = false
        })
        builder.addCase(fetchWeaponBanners.rejected, (state) => {
            state.loading = false
        })
        builder.addCase(fetchChronicledWish.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchChronicledWish.fulfilled, (state, action) => {
            let chronicledWishBanners: BannerRowData[] = []
            action.payload.map((version: ChronicledWishBannerData) => Object.keys(version).slice(1).forEach((phase: string) => chronicledWishBanners.push({
                version: version.version,
                subVersion: `${version.version}.${phase.slice(-1)}`,
                startDate: (version[phase as keyof {}])["startDate"],
                endDate: (version[phase as keyof {}])["endDate"],
                banner: (version[phase as keyof {}])["banner"]
            } as BannerRowData)))
            state.chronicledWish = chronicledWishBanners
            state.loading = false
        })
        builder.addCase(fetchChronicledWish.rejected, (state) => {
            state.loading = false
        })
    }
})

export default BannerSlice.reducer