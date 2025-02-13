import { createSlice } from "@reduxjs/toolkit";
import { isUnreleasedContent } from "helpers/utils";
import { fetchArtifacts, LoadingStatus } from "rtk/fetchData";
import { listenerMiddleware } from "rtk/middleware";
import { Artifact } from "types/artifact";

export interface ArtifactState {
    status: LoadingStatus;
    artifacts: Artifact[];
}

const storedArtifacts = localStorage.getItem("data/artifacts") || "null";
localStorage.removeItem("artifacts");

const storedSettings = localStorage.getItem("settings") || "{}";
const { unreleasedContent = false } = JSON.parse(storedSettings);

const initialState: ArtifactState = {
    status: "idle",
    artifacts: storedArtifacts !== "null" ? JSON.parse(storedArtifacts) : [],
};

export const artifactSlice = createSlice({
    name: "artifacts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchArtifacts.pending, (state) => {
            state.status = "pending";
        });
        builder.addCase(fetchArtifacts.fulfilled, (state, action) => {
            let payload = action.payload;
            if (!unreleasedContent) {
                payload = payload.filter((item) =>
                    isUnreleasedContent(item.release.version)
                );
            }
            if (JSON.stringify(action.payload) !== storedArtifacts) {
                state.artifacts = payload;
            }
            state.status = "success";
        });
        builder.addCase(fetchArtifacts.rejected, (state) => {
            state.status = "error";
        });
    },
    selectors: {
        selectArtifacts: (state): Artifact[] => state.artifacts,
    },
});

export default artifactSlice.reducer;

export const { selectArtifacts } = artifactSlice.selectors;

listenerMiddleware.startListening({
    actionCreator: fetchArtifacts.fulfilled,
    effect: (action) => {
        let payload = action.payload;
        if (!unreleasedContent) {
            payload = payload.filter((item) =>
                isUnreleasedContent(item.release.version)
            );
        }
        const data = JSON.stringify(payload);
        if (data !== storedArtifacts) {
            localStorage.setItem("data/artifacts", data);
        }
    },
});
