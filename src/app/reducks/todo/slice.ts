import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { initialState } from "./model";

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodos: (state, action: PayloadAction<string>) => {
            state.value.name.push(action.payload)
            state.value.todoId += 1
            return state;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addTodos,  } = todoSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.todo.value

export default todoSlice.reducer