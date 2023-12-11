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
  console.log(regionalIntensityData);
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
      <p>{currentRegionalIntensity}</p>
      <ChargingAdvice
        currentIntensityLevel={currentRegionalIntensity}
        bestChargingPeriod={nextBestRegionalChargingPeriod}
      />
    </>
  );
};
