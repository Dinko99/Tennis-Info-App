import { FiSearch } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { wtaOptions } from '../utils/fetchData';
import { Link } from 'react-router-dom';

const WtaPlayers = () => {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const fetchWtaPlayersSearch = () => {
    fetch(
      'https://ultimate-tennis1.p.rapidapi.com/rankings/wta/singles/50/current',
      wtaOptions
    )
      .then((response) => response.json())
      .then((response) => {
        const result = response.data;
        setResults(result);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchWtaPlayersSearch();
  }, [query]);

  const handleSearch = (q) => {
    setSearch(q);
    setQuery(q);
  };

  return (
    <div className='wta'>
      <main>
        <div className='players'>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type='text'
              autoFocus
              placeholder='Search For Players'
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
            ></input>
            <div className='search-button-bcg'>
              <FiSearch className='search-button' />
            </div>
          </form>
          <div className='searched-players'>
            {results.map((player) => {
              const fullName = player.name.toLowerCase().replace(/\s/g, '');
              if (query === '' || query.length <= 2) {
                return null;
              } else if (
                fullName.includes(query.toLowerCase().replace(/\s/g, ''))
              ) {
                return (
                  <Link
                    className='wta-searched-player'
                    to={`/wta/${player.ID}`}
                    key={player.ID}
                  >
                    {player.name}
                  </Link>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default WtaPlayers;
