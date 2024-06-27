import { Country } from "../Types/country";

interface CountryCardProps {
  country: Country;
  handleSelectedCountry: (country: Country) => void;
}

const CountryCard: React.FC<CountryCardProps> = ({
  country,
  handleSelectedCountry,
}) => {
  return (
    <div onClick={() => handleSelectedCountry(country)}>
      <img src={country.flags.svg} style={{ width: "40px", height: "40px" }} />
      <h3>{country.name.common}</h3>
    </div>
  );
};

export default CountryCard;
