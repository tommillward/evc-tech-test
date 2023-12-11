export type IntensityLevels = "low" | "very low" | "moderate" | "high";

export interface RegionalIntensityInterface {
  data: RegionalIntensityData;
}

export interface RegionalIntensityData {
  regionid: number;
  dnoregion: string;
  shortname: string;
  postcode: string;
  data: IntensityData[];
}

export interface IntensityData {
  from: string;
  to: string;
  intensity: Intensity;
  generationmix: Generationmix[];
}

export interface Generationmix {
  fuel: string;
  perc: number;
}

export interface Intensity {
  forecast: number;
  index: IntensityLevels;
}
