import {
  UPDATE_NATIONAL_INTENSITY,
  UPDATE_REGIONAL_INTENSITY,
} from "../actions/actionTypes";

import { Action } from "../types";

const initialState = {
  nationalIntensity: null,
  regionalIntensity: null,
};

const carbonIntensityReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case UPDATE_NATIONAL_INTENSITY:
      return {
        ...state,
        nationalIntensity: action.payload,
      };
    case UPDATE_REGIONAL_INTENSITY:
      return {
        ...state,
        regionalIntensity: action.payload,
      };
    default:
      return state;
  }
};

export default carbonIntensityReducer;
