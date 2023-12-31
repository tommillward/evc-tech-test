import { useState, useEffect } from "react";
import { getNationalCarbonIntensity } from "../service";
import { useDispatch } from "react-redux";
import { updateNationalIntensity } from "../actions/actions";
import { transformNationalIntensityData } from "../helpers/carbonIntensityHelpers";

export const useGetNationalIntensity = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    getNationalCarbonIntensity()
      .then((response) => {
        dispatch(
          updateNationalIntensity(transformNationalIntensityData(response.data))
        );
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [dispatch]);

  return {
    isLoading,
    error,
  };
};
