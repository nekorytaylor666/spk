import { combineReducers, createStore } from 'redux';
import { NewProjectReducer } from './NewProjectStore/reducer/reducer';
const rootReducer = combineReducers({
	NewProjectReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
