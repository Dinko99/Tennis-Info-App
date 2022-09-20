import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';

const Players = () => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className='players'>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type='text'
          placeholder='Search For Players'
          onChange={handleSearch}
        ></input>
        <div className='search-button-bcg'>
          <FiSearch className='search-button' />
        </div>
      </form>
      <p>{search}</p>
    </div>
  );
};

export default Players;
