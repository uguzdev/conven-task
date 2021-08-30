import { combineReducers, createStore } from "redux";

import PropertiesReducer from "./reducers/PropertiesReducer";

const rootReducer = combineReducers({
  properties: PropertiesReducer,
});

const store = createStore(rootReducer);

export default store;

export type RootState = ReturnType<typeof rootReducer>;
