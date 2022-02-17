import { configureStore, combineReducers } from '@reduxjs/toolkit';
import * as reducers from './ducks';

const rootReducer = combineReducers(reducers);

const store = configureStore({ reducer: rootReducer });

export default store;
window.__store__ = store;
