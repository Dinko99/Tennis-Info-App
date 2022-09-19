import { useEffect, useState } from 'react';

const RankingsFilter = ({ setRankingsRange, data }) => {
  let countries = [];

  const handleRankingsRange = (e) => {
    setRankingsRange(e.target.value);
  };

  data.map((player) => {
    countries.push(player.country);
  });
  countries = new Set(countries);

  console.log(countries);

  return (
    <div className='rankings-filter'>
      <select onClick={handleRankingsRange}>
        <option value='top 100'>top 100</option>
        <option value='top 200'>top 100-200</option>
        <option value='top 200+'>top 200+</option>
      </select>
      <select>
        <option value='all countries'>All Countries</option>
        {/* {
         data.map((country)=> {
          return <option></option>
         })
        } */}
      </select>
    </div>
  );
};

export default RankingsFilter;
