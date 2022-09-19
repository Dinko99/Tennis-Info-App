const CountryFilter = ({ countries, handleFilterCountry, filterCountry }) => {
  return (
    <select value={filterCountry} onChange={handleFilterCountry}>
      <option value='All Countries'>All Countries</option>
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
