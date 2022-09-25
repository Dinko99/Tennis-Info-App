import '../styles/Wta.scss';
import RankingsHeader from '../components/RankingsHeader';
import WtaRankingRow from '../components/WtaRankingRow';
import WtaCountries from '../components/WtaCountries';
import { wtaOptions } from '../utils/fetchData';
import { useState, useEffect } from 'react';
import { BiRefresh } from 'react-icons/bi';

const Wta = () => {
  const [data, setData] = useState([]);
  const [wtaRankings, setWtaRankings] = useState([]);
  const [filterWtaCountry, setFilterWtaCountry] = useState('All Countries');
  let countries = [];
  const countryWtaFilter = data.filter(
    (player) => player.country === filterWtaCountry
  );

  data.map((player) => {
    countries.push(player.country);
  });
  countries = Array.from(new Set(countries));

  const fetchWtaRankings = () => {
    fetch(
      'https://ultimate-tennis1.p.rapidapi.com/rankings/wta/singles/50/current',
      wtaOptions
    )
      .then((response) => response.json())
      .then((response) => {
        const rankings = response.data;
        setData(rankings);
        setWtaRankings(rankings);
      })
      .catch((err) => console.error(err));
  };

  const refreshFilters = () => {
    setFilterWtaCountry('All Countries');
  };

  const handleFilterWtaCountry = (e) => {
    setFilterWtaCountry(e.target.value);
  };

  useEffect(() => {
    if (filterWtaCountry === 'All Countries') {
      setWtaRankings(data);
    } else {
      setWtaRankings(countryWtaFilter);
    }
  }, [filterWtaCountry]);

  useEffect(() => {
    fetchWtaRankings();
  }, []);

  return (
    <div className='wta'>
      <main>
        <div className='rankings-filter'>
          <select>
            <option value='all'>all players</option>
          </select>
          <WtaCountries
            countries={countries}
            handleFilterWtaCountry={handleFilterWtaCountry}
            filterWtaCountry={filterWtaCountry}
          />
          <BiRefresh className='refresh-icon' onClick={refreshFilters} />
        </div>
        <RankingsHeader />
        {wtaRankings.map((player) => {
          return <WtaRankingRow player={player} key={player.ID} />;
        })}
      </main>
    </div>
  );
};

export default Wta;
