import { IntensityLevels } from "../types";
import { acceptedIntensityLevels } from "../constants";
import { isoToUtcString } from "../helpers/dateHelpers";

interface CharingAdviceProps {
  currentIntensityLevel: IntensityLevels;
  bestChargingPeriod?: any;
}

export const ChargingAdvice = ({
  currentIntensityLevel,
  bestChargingPeriod,
}: CharingAdviceProps) => {
  if (acceptedIntensityLevels.includes(currentIntensityLevel)) {
    return <p>Now's a great time to charge</p>;
  }
  if (!bestChargingPeriod) {
    return (
      <p>
        There are no periods in the next 48 hours that have a Low or Very Low
        carbon intensity
      </p>
    );
  }
  return (
    <>
      <p>{`The best time to charge will be at ${isoToUtcString(
        bestChargingPeriod.from
      )}`}</p>
      <p>{`As the Carbon Intensity level will be ${bestChargingPeriod.intensity.index}`}</p>
    </>
  );
};
