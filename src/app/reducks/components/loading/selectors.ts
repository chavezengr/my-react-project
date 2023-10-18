import { createSelector } from "reselect";
import { LoadingState } from "./model";

const loadingSelector = (state: LoadingState) => state;

export const getLoadingState = createSelector(
    [loadingSelector],
    state => state.value
)

export const getLoadingText = createSelector(
    [loadingSelector],
    state => state.text
)