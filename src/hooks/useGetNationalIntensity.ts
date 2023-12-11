import { useState, useEffect } from "react";
import { getNationalCarbonIntensity } from "../service";
export const useGetNationalIntensity = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    getNationalCarbonIntensity()
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  return {
    isLoading,
    data,
    error,
  };
};
