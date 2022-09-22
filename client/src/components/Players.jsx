import { FiSearch } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { atpSearchOptions } from '../utils/fetchData';

const Players = () => {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const fetchPlayersSearch = () => {
    fetch(
      `https://tennis-live-data.p.rapidapi.com/players/ATP`,
      atpSearchOptions
    )
      .then((response) => response.json())
      .then((response) => {
        const result = response.results.players;
        setResults(result);
        // console.log(result[0].full_name.replace(/\s/g, ''));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchPlayersSearch();
  }, [query]);

  const handleSearch = (q) => {
    setSearch(q);
    setQuery(q);
  };

  return (
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
          const fullName = player.full_name.toLowerCase().replace(/\s/g, '');
          if (query === '' || query.length <= 2) {
            return null;
          } else if (
            fullName.includes(query.toLowerCase().replace(/\s/g, ''))
          ) {
            return (
              <a href='#' key={player.id}>
                {player.full_name}
              </a>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default Players;
