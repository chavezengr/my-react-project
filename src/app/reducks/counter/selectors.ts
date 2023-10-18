import { createSelector } from "reselect";
import { CounterState } from "./model";

const countSelector = (state: CounterState) => state;

export const getCount = createSelector(
    [countSelector],
    state => state.value,
)