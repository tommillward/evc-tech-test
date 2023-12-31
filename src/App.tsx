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

  const { isLoading: loadingNational, error: nationalError } =
    useGetNationalIntensity();

  const {
    fetchRegionalIntensity,
    isLoading: loadingRegional,
    error: regionalError,
  } = useGetRegionalIntensity();

  const isLoading = loadingNational || loadingRegional;
  const isError = nationalError || regionalError;

  const handleClick = () => {
    setShowRegionalIntensity(true);
    fetchRegionalIntensity(postcode, startDate);
  };

  if (isLoading) {
    return <h1>LOADING</h1>;
  }
  if (isError) {
    return <h1>{nationalError || regionalError}</h1>;
  }
  return (
    <div className="App">
      {showRegionalIntensity ? <RegionalIntensity /> : <NationalIntensity />}

      <div>
        <h4>Enter postcode</h4>
        <input value={postcode} onChange={(e) => setPostcode(e.target.value)} />
        <h4>Enter date</h4>
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          dateFormat="dd/MM/yyyy"
          // it looks like theres only two days worth of data returned by the api
          // so let's lock the dates that can be selected
          includeDateIntervals={[{ start: addDays(-1), end: addDays(2) }]}
        />
        <br />
        <button disabled={!postcode} onClick={handleClick}>
          Search
        </button>
      </div>
    </div>
  );
}

export default App;
