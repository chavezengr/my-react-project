import { AnyAction, createAction, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const increments = createAction<number>('counter/increment')
const decrements = createAction<number>('counter/decrement')
const incrementByAmounts = createAction<number>('counter/incrementByAmount')

function isActionWithNumberPayload(action: AnyAction): action is PayloadAction<number> {
    return typeof action.payload === 'number'
}

export const actions = { increments, decrements, incrementByAmounts, isActionWithNumberPayload }