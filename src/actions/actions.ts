import {
  UPDATE_NATIONAL_INTENSITY,
  UPDATE_REGIONAL_INTENSITY,
} from "./actionTypes";
import { IntensityPayload } from "../types";

export const updateNationalIntensity = (value: IntensityPayload) => {
  return {
    type: UPDATE_NATIONAL_INTENSITY,
    payload: value,
  };
};

export const updateRegionalIntensity = (value: IntensityPayload) => {
  return {
    type: UPDATE_REGIONAL_INTENSITY,
    payload: value,
  };
};
