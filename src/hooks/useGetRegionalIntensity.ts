import { useState } from "react";
import { getRegionalCarbonIntensity } from "../service";
import { useDispatch } from "react-redux";
import { updateRegionalIntensity } from "../actions/actions";

interface RegionalIntensityInterface {
  isLoading: boolean;
  error: string | null;
  fetchRegionalIntensity: (postcode: string, startDate: Date) => void;
}

export const useGetRegionalIntensity = (): RegionalIntensityInterface => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const fetchRegionalIntensity = (postcode: string, startDate: Date) => {
    setIsLoading(true);
    getRegionalCarbonIntensity(postcode, startDate)
      .then((response) => {
        dispatch(updateRegionalIntensity(response.data));
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  };

  return {
    fetchRegionalIntensity,
    isLoading,
    error,
  };
};
