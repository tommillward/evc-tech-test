import { acceptedIntensityLevels } from "../constants";

export const currentIntensity = (data: any) => data.data[0].intensityIndex;

export const nextBestChargingPeriod = (data: any) =>
  data.data.find((period: any) =>
    acceptedIntensityLevels.includes(period.intensityIndex)
  );

export const transformRegionalIntensityData = (intensityData: any) => {
  if (!intensityData) {
    return null;
  }
  return {
    postcode: intensityData.data.postcode,
    data: intensityData.data.data.map((period: any) => {
      return {
        to: period.to,
        from: period.from,
        intensityIndex: period.intensity.index,
      };
    }),
  };
};

export const transformNationalIntensityData = (intensityData: any) => {
  return {
    data: intensityData.data.map((period: any) => {
      return {
        to: period.to,
        from: period.from,
        intensityIndex: period.intensity.index,
      };
    }),
  };
};
