import { useSelector } from "react-redux";
import { ChargingAdvice } from "./ChargingAdvice";
import {
  currentIntensity,
  nextBestChargingPeriod,
} from "../helpers/carbonIntensityHelpers";
import { ReduxState } from "../types";

export const RegionalIntensity = () => {
  const regionalIntensityData = useSelector(
    (state: ReduxState) => state.carbonIntensity.regionalIntensity
  );
  if (regionalIntensityData === null) {
    return <p>No postcode found</p>;
  }

  const currentRegionalIntensity = currentIntensity(regionalIntensityData);
  const nextBestRegionalChargingPeriod = nextBestChargingPeriod(
    regionalIntensityData
  );

  return (
    <>
      <h1>Regional Carbon Intensity</h1>
      <h2>Current Intensity for {regionalIntensityData.data.postcode}:</h2>
      <h3>{currentRegionalIntensity}</h3>
      <ChargingAdvice
        currentIntensityLevel={currentRegionalIntensity}
        bestChargingPeriod={nextBestRegionalChargingPeriod}
      />
    </>
  );
};
