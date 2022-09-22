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
      <main>
        <div className='player'>
          <h1>{item.full_name}</h1>
          <h2>{item.country}</h2>
          <p>{item.ranking}</p>
          <p>{item.ranking_points}</p>
          <p>{item.race_ranking}</p>
        </div>
      </main>
    </div>
  );
};

export default Player;
