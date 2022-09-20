import { tournamentOptions } from '../utils/fetchData';
import { useState, useEffect } from 'react';

const AtpTournaments = () => {
  const [tournaments, setTournaments] = useState([]);

  const fetchAtpTournaments = () => {
    fetch(
      'https://ultimate-tennis1.p.rapidapi.com/tournament_list/atp/2022/atpgs',
      tournamentOptions
    )
      .then((response) => response.json())
      .then((response) => {
        const tournamentsData = response.Tournaments;
        setTournaments(tournamentsData);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchAtpTournaments();
  }, []);

  return (
    <div className='tournaments'>
      {tournaments.map((tournament) => {
        const surface = tournament.Surface;
        const surfaceArr = surface.split(' ');
        return (
          <div className='tournament' key={tournament.ID}>
            <div className='tournament-name'>
              <h2>{tournament['Tournament Name']}</h2>
              <p>{tournament.Location}</p>
            </div>
            <h3>{tournament.Timestamp}</h3>
            <h3>{tournament.Surface}</h3>
            <h3>{tournament['Total Prize Money']}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default AtpTournaments;
