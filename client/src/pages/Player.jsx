import { useParams } from 'react-router-dom';
import { atpOptions } from '../utils/fetchData';
import { useState, useEffect } from 'react';

const Player = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  const fetchPlayer = () => {
    fetch(`https://tennis-live-data.p.rapidapi.com/player/${id}`, atpOptions)
      .then((response) => response.json())
      .then((response) => {
        const player = response.results.player;
        setItem(player);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchPlayer();
  }, []);
  return (
    <div className='atp'>
      <div className='player'>
        <div className='player-header'>
          <h1>{item.full_name}</h1>
          <h2>{item.country}</h2>
        </div>
        <div className='player-info'>
          <p>Rank: {item.ranking}</p>
          <p>Rank Points: {item.ranking_points}</p>
          <p>Race Rank: {item.race_ranking}</p>
          <p>Race Points: {item.race_points}</p>
          <p>Rank Movement: {item.ranking_movement}</p>
          <p>Race Movement: {item.race_movement}</p>
        </div>
      </div>
    </div>
  );
};

export default Player;
