import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { initialState } from "./model";

export const loadingSlice = createSlice({
    name: 'laoding',
    initialState,
    reducers: {
        hideLoadingAction: (state) => {
            state.value = false
            state.text = ''
            return state
        },
        showLoadingAction: (state, action: PayloadAction<string>) => {
            state.value = true
            state.text = action.payload
            return state
        },                              
    },
});

// Action creators are generated for each case reducer function
export const { hideLoadingAction, showLoadingAction } = loadingSlice.actions


// Other code such as selectors can use the imported `RootState` type
export const selectLoadingAction = (state: RootState) => state.counter.value

export default loadingSlice.reducer