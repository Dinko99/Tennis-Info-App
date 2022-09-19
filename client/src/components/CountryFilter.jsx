const CountryFilter = ({ countries, handleFilterCountry }) => {
  return (
    <select onClick={handleFilterCountry}>
      <option defaultValue='All Countries'>All Countries</option>
      {countries
        .filter((country) => country !== '')
        .sort()
        .map((country, index) => {
          return (
            <option value={country} key={index}>
              {country}
            </option>
          );
        })}
    </select>
  );
};

export default CountryFilter;
