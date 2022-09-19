import { BiRefresh } from 'react-icons/bi';

const ResetRankings = ({ setFilterCountry, setRankingsRange }) => {
  const refreshFilters = () => {
    setFilterCountry('All Countries');
    setRankingsRange('top 100');
  };

  return <BiRefresh className='refresh-icon' onClick={refreshFilters} />;
};

export default ResetRankings;
