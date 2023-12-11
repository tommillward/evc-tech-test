import { RegionalIntensityInterface } from "../types";
import { ChargingAdvice } from "./ChargingAdvice";
import {
  currentIntensity,
  nextBestChargingPeriod,
} from "../helpers/carbonIntensityHelpers";

interface RegionalIntensityProps {
  data: RegionalIntensityInterface | null;
}

export const RegionalIntensity = ({ data }: RegionalIntensityProps) => {
  if (data === null) {
    return <p>No postcode found</p>;
  }

  const currentRegionalIntensity = currentIntensity(data.data);
  const nextBestRegionalChargingPeriod = nextBestChargingPeriod(data.data);

  return (
    <>
      <h1>Regional Carbon Intensity</h1>
      <h2>Current Intensity for {data.data.postcode}:</h2>
      <p>{currentRegionalIntensity}</p>
      <ChargingAdvice
        currentIntensityLevel={currentRegionalIntensity}
        bestChargingPeriod={nextBestRegionalChargingPeriod}
      />
    </>
  );
};
