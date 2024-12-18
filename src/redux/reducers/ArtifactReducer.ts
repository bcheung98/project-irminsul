import { createSlice } from "@reduxjs/toolkit"
import { fetchArtifacts } from "../actions/fetch"
import { Artifact } from "types/artifact"

export interface ArtifactState {
    loading: boolean,
    artifacts: Artifact[]
}

const initialState: ArtifactState = {
    loading: false,
    artifacts: []
}

export const ArtifactSlice = createSlice({
    name: "artifact artifacts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchArtifacts.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchArtifacts.fulfilled, (state, action) => {
            state.artifacts = action.payload.sort((a, b) => b.rarity - a.rarity || a.name.localeCompare(b.name))
            state.loading = false
        })
        builder.addCase(fetchArtifacts.rejected, (state) => {
            state.loading = false
        })
    }
})

export default ArtifactSlice.reducer