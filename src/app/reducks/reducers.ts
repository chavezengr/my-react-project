import counterReducer from './counter';
import todoReducer from './todo/slice';
import loadingReducer from './components/loading/slice';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer,
    loading: loadingReducer,
}
);