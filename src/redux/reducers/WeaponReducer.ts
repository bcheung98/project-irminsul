import { createSlice } from "@reduxjs/toolkit"
import { fetchWeapons } from "../actions/fetch"
import { WeaponData } from "../../types/weapon/WeaponData"

export interface WeaponState {
    loading: boolean,
    weapons: WeaponData[]
}

const initialState: WeaponState = {
    loading: false,
    weapons: []
}

export const WeaponSlice = createSlice({
    name: "weapon weapons",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchWeapons.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchWeapons.fulfilled, (state, action) => {
            state.weapons = action.payload.sort((a, b) => a.name.localeCompare(b.name))
            state.loading = false
        })
        builder.addCase(fetchWeapons.rejected, (state) => {
            state.loading = false
        })
    }
})

export default WeaponSlice.reducer