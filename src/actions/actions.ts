import {
  UPDATE_NATIONAL_INTENSITY,
  UPDATE_REGIONAL_INTENSITY,
} from "./actionTypes";

export const updateNationalIntensity = (value: any) => {
  return {
    type: UPDATE_NATIONAL_INTENSITY,
    payload: value,
  };
};

export const updateRegionalIntensity = (value: any) => {
  return {
    type: UPDATE_REGIONAL_INTENSITY,
    payload: value,
  };
};
