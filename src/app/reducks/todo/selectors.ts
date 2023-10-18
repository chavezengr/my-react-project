import { createSelector } from "reselect";
import { TodosState } from "./model";

const todosSelector = (state: TodosState) => state;

export const getTodos = createSelector(
    [todosSelector],
    state => state.value
)