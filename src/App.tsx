import { useState } from "react";
import "./App.css";
import DatePicker from "react-datepicker";
import { addDays } from "./helpers/dateHelpers";
import { NationalIntensity } from "./components/NationalIntensity";
import { RegionalIntensity } from "./components/RegionalIntensity";
import { useGetNationalIntensity } from "./hooks/useGetNationalIntensity";
import { useGetRegionalIntensity } from "./hooks/useGetRegionalIntensity";

function App() {
  const [showRegionalIntensity, setShowRegionalIntensity] =
    useState<boolean>(false);
  const [postcode, setPostcode] = useState<string>("");
  const [startDate, setStartDate] = useState(new Date());

  const {
    data: nationalIntensityData,
    isLoading,
    error,
  } = useGetNationalIntensity();

  const {
    fetchRegionalIntensity,
    data: regionalIntensityData,
    isLoading: loadingTom,
    error: errorTom,
  } = useGetRegionalIntensity();

  const loading = isLoading || loadingTom;
  const isError = error || errorTom;

  const handleClick = () => {
    setShowRegionalIntensity(true);
    fetchRegionalIntensity(postcode, startDate);
  };

  if (loading) {
    return <h1>LOADING</h1>;
  }
  if (isError) {
    return <h1>{error || errorTom}</h1>;
  }
  return (
    <div className="App">
      {showRegionalIntensity ? (
        <RegionalIntensity data={regionalIntensityData} />
      ) : (
        <NationalIntensity data={nationalIntensityData} />
      )}

      <div>
        <h4>Enter postcode</h4>
        <input value={postcode} onChange={(e) => setPostcode(e.target.value)} />
        <h4>Enter date</h4>
        <DatePicker
          selected={startDate}
          onChange={(date: any) => setStartDate(date)}
          dateFormat="dd/MM/yyyy"
          // it looks like theres only two days worth of data returned by the api
          includeDateIntervals={[{ start: addDays(-1), end: addDays(2) }]}
        />
        <br />
        <button onClick={handleClick}>Search</button>
      </div>
    </div>
  );
}

export default App;
