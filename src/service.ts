import axios from "axios";
import { nowISO } from "./helpers/dateHelpers";

export const getNationalCarbonIntensity = () =>
  axios.get(`https://api.carbonintensity.org.uk/intensity/${nowISO}/fw48h`);

export const getRegionalCarbonIntensity = (postcode: string, startDate: Date) =>
  axios.get(
    `https://api.carbonintensity.org.uk/regional/intensity/${startDate.toISOString()}/fw48h/postcode/${postcode}`
  );
