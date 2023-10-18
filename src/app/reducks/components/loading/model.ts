export interface LoadingState {
    value: boolean,
    text: string
}

export const initialState: LoadingState = {
    value: false,
    text: ""
}