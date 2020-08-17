import {
  createStore,
  combineReducers
} from "redux";
import meetingsReducer from "./meetingsReducer";
import filtersReducer from "./filtersReducer";





/* =================================================
=========== STORE CONFIGURATION ================
================================================= */
export default () => {
  const store = createStore(
    combineReducers({
      meetings: meetingsReducer,
      filters: filtersReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};