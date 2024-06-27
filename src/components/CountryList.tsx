import React from "react";
import { getCountries } from "./../api/countries";
import { Country } from "../Types/country";

const CountryList: React.FC = () => {
  const [countries, setCountries] = React.useState<Country[]>([]);
  React.useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data: Country[] = await getCountries();
        setCountries(data);
      } catch (error) {
        alert(error);
      }
    };
    fetchCountries();
  }, []);
  console.log(countries);
  return <></>;
};

export default CountryList;
