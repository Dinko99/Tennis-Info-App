import '../styles/Atp.scss';
import { useState, useEffect } from 'react';
import { atpOptions } from '../utils/fetchData';

const Atp = () => {
  const [data, setData] = useState([]);
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    const fetchAtpRankings = () => {
      fetch('https://tennis-live-data.p.rapidapi.com/rankings/ATP', atpOptions)
        .then((response) => response.json())
        .then((response) => {
          const rankingsData = response.results.rankings;
          setData(rankingsData);
        })
        .catch((err) => console.error(err));
    };

    fetchAtpRankings();
  }, []);

  return (
    <div className='atp'>
      <main>
        <div className='atp-rankings-header'>
          <p>Rank</p>
          <p>Player</p>
          <p>Ranking Points</p>
          <p>Rank Diff</p>
          <p>Country</p>
        </div>
        {data
          .filter((player) => player.ranking_points > 100)
          .slice(0, 100)
          .map((player) => {
            return (
              <div className='atp-rankings-row' key={player.id}>
                <p>{player.ranking}</p>
                <p>{player.full_name}</p>
                <p>{player.ranking_points}</p>
                <p
                  className={
                    parseInt(player.movement) < 0 ? 'negative' : 'positive'
                  }
                  style={{
                    color: player.movement === '' && '#000',
                    fontWeight: player.movement === '' && '400',
                  }}
                >
                  {player.movement === '' ? '00' : player.movement}
                </p>
                <p>{player.country}</p>
              </div>
            );
          })}
      </main>
    </div>
  );
};

export default Atp;
