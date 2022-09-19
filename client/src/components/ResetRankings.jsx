import { BiRefresh } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const ResetRankings = () => {
  const navigate = useNavigate();

  const refreshPage = () => {
    navigate(0);
  };

  return <BiRefresh className='refresh-icon' onClick={refreshPage} />;
};

export default ResetRankings;
