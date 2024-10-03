import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { CustomTheme } from "../../types/Theme"

import { defaultTheme } from "../../themes/defaultTheme"
import { legacyTheme } from "../../themes/legacyTheme"

export const themes = [
    { name: "Legacy", theme: legacyTheme },
    { name: "Default", theme: defaultTheme },
]

export interface ThemeState {
    themeIndex: number,
    theme: CustomTheme
}

const initialState: ThemeState = {
    themeIndex: localStorage.getItem("theme") === null ? 0 : Number(localStorage.getItem("theme")),
    theme: themes[Number(localStorage.getItem("theme"))].theme
}

export const ThemeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<number | null>) => {
            let index
            if (action.payload === null) {
                index = 0
            }
            else {
                index = action.payload
            }
            state.themeIndex = index
            state.theme = themes[index].theme
            localStorage.setItem("theme", index.toString())
        }
    }
})

export const { setTheme } = ThemeSlice.actions
export default ThemeSlice.reducer