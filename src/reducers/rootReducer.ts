import { combineReducers } from "redux";
import carbonIntensityReducer from "./reducer";

const rootReducer = combineReducers({
  carbonIntensity: carbonIntensityReducer,
});

export default rootReducer;
