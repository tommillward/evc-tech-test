export type IntensityLevels = "low" | "very low" | "moderate" | "high";

export interface RegionalIntensityData {
  data: CarbonIntensityData;
}

export interface CarbonIntensityData {
  postcode?: string;
  data: PeriodIntensityData[];
}

export interface PeriodIntensityData {
  from: string;
  to: string;
  intensityIndex: IntensityLevels;
}

type ActionTypes = "UPDATE_NATIONAL_INTENSITY" | "UPDATE_REGIONAL_INTENSITY";

export type IntensityPayload =
  | RegionalIntensityData
  | CarbonIntensityData
  | null;

export interface Action {
  type: ActionTypes;
  payload: CarbonIntensityData | RegionalIntensityData;
}

export interface ReduxState {
  carbonIntensity: {
    regionalIntensity: RegionalIntensityData;
    nationalIntensity: CarbonIntensityData;
  };
}
