// const initialState = {
//     characterBanners: [],
//     weaponBanners: [],
//     chronicledWish: [],
//     requesting: false
// }

// const BannerReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "START_GETTING_CHAR_BANNERS_REQUEST":
//             return {
//                 ...state,
//                 characterBanners: [...state.characterBanners],
//                 requesting: true
//             }
//         case "GET_CHAR_BANNERS":
//             return {
//                 ...state,
//                 characterBanners: action.characterBanners,
//                 requesting: false
//             }
//         case "START_GETTING_WEAPON_BANNERS_REQUEST":
//             return {
//                 ...state,
//                 weaponBanners: [...state.weaponBanners],
//                 requesting: true
//             }
//         case "GET_WEAPON_BANNERS":
//             return {
//                 ...state,
//                 weaponBanners: action.weaponBanners,
//                 requesting: false
//             }
//         case "START_GETTING_CHRONICLED_WISH_REQUEST":
//             return {
//                 ...state,
//                 chronicledWish: [...state.chronicledWish],
//                 requesting: true
//             }
//         case "GET_CHRONICLED_WISH":
//             return {
//                 ...state,
//                 chronicledWish: action.chronicledWish,
//                 requesting: false
//             }
//         default:
//             return state;
//     }
// }

// export default BannerReducer;

import { createSlice } from "@reduxjs/toolkit"
import { fetchCharacterBanners, fetchWeaponBanners, fetchChronicledWish } from "../actions/fetch"
import { BannerData, ChronicledWishBannerData } from "../../types/BannerData"

interface State {
    loading: boolean,
    characterBanners: BannerData[],
    weaponBanners: BannerData[],
    chronicledWish: ChronicledWishBannerData[]
}

const initialState: State = {
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