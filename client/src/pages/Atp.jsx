import '../styles/Atp.scss';
import { useState, useEffect } from 'react';
import { atpOptions } from '../utils/fetchData';
import RankingsHeader from '../components/RankingsHeader';
import RankingsRow from '../components/RankingsRow';
import RankingsFilter from '../components/RankingsFilter';

const Atp = () => {
  const [data, setData] = useState([]);
  const [rankings, setRankings] = useState([]);
  const [rankingsRange, setRankingsRange] = useState('top 100');
  const top100 = data.slice(0, 100);
  const top200 = data.slice(100, 200);
  const top300 = data.slice(200, 300);

  const fetchAtpRankings = () => {
    fetch('https://tennis-live-data.p.rapidapi.com/rankings/ATP', atpOptions)
      .then((response) => response.json())
      .then((response) => {
        const rankingsData = response.results.rankings;
        setData(rankingsData);
        setRankings(rankingsData.slice(0, 100));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchAtpRankings();
  }, []);

  useEffect(() => {
    if (rankingsRange === 'top 100') {
      setRankings(top100);
    } else if (rankingsRange === 'top 200') {
      setRankings(top200);
    } else {
      setRankings(top300);
    }
  }, [rankingsRange]);

  return (
    <div className='atp'>
      <main>
        <RankingsFilter
          rankingsRange={rankingsRange}
          setRankingsRange={setRankingsRange}
          rankings={rankings}
          data={data}
        />
        <RankingsHeader />
        {rankings.map((player) => {
          return <RankingsRow player={player} key={player.id} />;
        })}
      </main>
    </div>
  );
};

export default Atp;
