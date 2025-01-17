import { createSlice } from "@reduxjs/toolkit";
import { isUnreleasedContent } from "helpers/utils";
import { startAppListening } from "helpers/hooks";
import { fetchWeapons, LoadingStatus } from "rtk/fetchData";
import { Weapon } from "types/weapon";

export interface WeaponState {
    status: LoadingStatus;
    weapons: Weapon[];
}

const storedWeapons = localStorage.getItem("data/weapons") || "null";

const storedSettings = localStorage.getItem("settings") || "{}";
const { unreleasedContent = false } = JSON.parse(storedSettings);

const initialState: WeaponState = {
    status: "idle",
    weapons: storedWeapons !== "null" ? JSON.parse(storedWeapons) : [],
};

export const weaponSlice = createSlice({
    name: "weapons",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchWeapons.pending, (state) => {
            state.status = "pending";
        });
        builder.addCase(fetchWeapons.fulfilled, (state, action) => {
            let payload = action.payload;
            if (!unreleasedContent) {
                payload = payload.filter((item) =>
                    isUnreleasedContent(item.release.version)
                );
            }
            if (JSON.stringify(payload) !== storedWeapons) {
                state.weapons = payload;
            }
            state.status = "success";
        });
        builder.addCase(fetchWeapons.rejected, (state) => {
            state.status = "error";
        });
    },
    selectors: {
        selectWeapons: (state): Weapon[] => state.weapons,
    },
});

export const { selectWeapons } = weaponSlice.selectors;

export default weaponSlice.reducer;

startAppListening({
    actionCreator: fetchWeapons.fulfilled,
    effect: (action) => {
        let payload = action.payload;
        if (!unreleasedContent) {
            payload = payload.filter((item) =>
                isUnreleasedContent(item.release.version)
            );
        }
        const data = JSON.stringify(payload);
        if (data !== storedWeapons) {
            localStorage.setItem("data/weapons", data);
        }
    },
});
