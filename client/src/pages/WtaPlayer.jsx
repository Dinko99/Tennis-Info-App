import { useParams } from 'react-router-dom';
import { wtaOptions } from '../utils/fetchData';
import { useState, useEffect } from 'react';

const WtaPlayer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  const fetchWtaPlayer = () => {
    fetch(
      `https://ultimate-tennis1.p.rapidapi.com/player_stats/wta/${id}/2022`,
      wtaOptions
    )
      .then((response) => response.json())
      .then((response) => {
        const player = response.player_data[0];
        setItem(player);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchWtaPlayer();
  }, []);
  return (
    <div className='wta'>
      <div className='player'>
        <div className='player-header'>
          <h1>{item.fullName}</h1>
          <h2>{item.Nationality}</h2>
        </div>
        <div className='player-info'>
          <p>Brithday: {item.dateOfBirth}</p>
          <p>Rank: {item.Current_Rank}</p>
          <p>Match Count: {item.MatchCount}</p>
          <p>Aces: {item.Aces}</p>
          <p>Double Faults: {item.Double_Faults}</p>
          <p>Brake Points: {item.Break_Point_Chances}</p>
        </div>
      </div>
    </div>
  );
};

export default WtaPlayer;
