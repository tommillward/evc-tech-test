import { ChargingAdvice } from "./ChargingAdvice";
import {
  currentIntensity,
  nextBestChargingPeriod,
} from "../helpers/carbonIntensityHelpers";

interface NationalIntensityProps {
  data: any;
}

export const NationalIntensity = ({ data }: NationalIntensityProps) => {
  const currentNationalIntensity = currentIntensity(data);
  const nextBestNationalChargingPeriod = nextBestChargingPeriod(data);

  return (
    <>
      <h1>National Intensity</h1>
      <h2>Current Carbon Intensity:</h2>
      <p>{currentNationalIntensity}</p>
      <ChargingAdvice
        currentIntensityLevel={currentNationalIntensity}
        bestChargingPeriod={nextBestNationalChargingPeriod}
      />
    </>
  );
};
