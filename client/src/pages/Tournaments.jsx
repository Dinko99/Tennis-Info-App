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
    <div className='atp'>
      <main>
        <div className='tournaments'>
          <h1>List of tournaments in year 2022</h1>
          {tournaments.map((tournament) => {
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
      </main>
    </div>
  );
};

export default AtpTournaments;
