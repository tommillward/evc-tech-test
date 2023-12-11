import { useSelector } from "react-redux";
import { ChargingAdvice } from "./ChargingAdvice";
import {
  currentIntensity,
  nextBestChargingPeriod,
} from "../helpers/carbonIntensityHelpers";

export const NationalIntensity = () => {
  const nationalIntensityData = useSelector(
    (state: any) => state.carbonIntensity.nationalIntensity
  );

  const currentNationalIntensity = currentIntensity(nationalIntensityData);
  const nextBestNationalChargingPeriod = nextBestChargingPeriod(
    nationalIntensityData
  );

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
