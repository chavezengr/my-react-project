export interface TodosState {
    value: {
        name: string[],
        todoId: number
    }
}

export const initialState: TodosState = {
    value: {
        name: [],
        todoId: 0
    }
}