import { useState, useEffect } from 'react';
import ResetRankings from './ResetRankings';
import RankingFilter from './RankingFilter';
import CountryFilter from './CountryFilter';

const Filters = ({
  setRankingsRange,
  data,
  setFilterCountry,
  filterCountry,
  setRankings,
  rankingsRange,
}) => {
  let countries = [];
  const countryFilter = data.filter(
    (player) => player.country === filterCountry
  );

  data.map((player) => {
    countries.push(player.country);
  });
  countries = Array.from(new Set(countries));

  const handleRankingsRange = (e) => {
    setRankingsRange(e.target.value);
    setFilterCountry('All Countries');
  };

  const handleFilterCountry = (e) => {
    setFilterCountry(e.target.value);
  };

  useEffect(() => {
    if (filterCountry === 'All Countries') {
      setRankings(data.slice(0, 100));
    } else {
      setRankings(countryFilter);
    }
  }, [filterCountry]);

  return (
    <div className='rankings-filter'>
      <RankingFilter
        handleRankingsRange={handleRankingsRange}
        rankingsRange={rankingsRange}
      />
      <CountryFilter
        handleFilterCountry={handleFilterCountry}
        countries={countries}
        filterCountry={filterCountry}
      />
      <ResetRankings
        setFilterCountry={setFilterCountry}
        setRankingsRange={setRankingsRange}
      />
    </div>
  );
};

export default Filters;
