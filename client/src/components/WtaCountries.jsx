const WtaCountries = ({
  countries,
  filterWtaCountry,
  handleFilterWtaCountry,
}) => {
  return (
    <select value={filterWtaCountry} onChange={handleFilterWtaCountry}>
      <option value='All Countries'>All Countries</option>
      {countries.sort().map((country, index) => {
        return (
          <option value={country} key={index}>
            {country}
          </option>
        );
      })}
    </select>
  );
};

export default WtaCountries;
