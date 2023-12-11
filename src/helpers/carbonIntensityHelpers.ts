import { acceptedIntensityLevels } from "../constants";

export const currentIntensity = (data: any) => data.data[0].intensity.index;

export const nextBestChargingPeriod = (data: any) =>
  data.data.find((rec: any) =>
    acceptedIntensityLevels.includes(rec.intensity.index)
  );
