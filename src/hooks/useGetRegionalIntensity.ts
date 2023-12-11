import { useState } from "react";
import { getRegionalCarbonIntensity } from "../service";

interface RegionalIntensityInterface {
  isLoading: boolean;
  data: any | null;
  error: string | null;
  fetchRegionalIntensity: (postcode: string, startDate: Date) => void;
}

export const useGetRegionalIntensity = (): RegionalIntensityInterface => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  //useCallback??
  const fetchRegionalIntensity = (postcode: string, startDate: Date) => {
    setIsLoading(true);
    getRegionalCarbonIntensity(postcode, startDate)
      .then((response) => {
        setData(response.data);
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
    data,
    error,
  };
};
