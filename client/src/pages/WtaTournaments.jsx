import { useState, useEffect } from 'react';
import { wtaOptions } from '../utils/fetchData';

const WtaTournaments = () => {
  const [tournaments, setTournaments] = useState([]);

  const fetchWtaTournaments = () => {
    fetch(
      'https://ultimate-tennis1.p.rapidapi.com/tournament_list/wta/2022',
      wtaOptions
    )
      .then((response) => response.json())
      .then((response) => {
        const tournamentsData = response.Tournaments;
        setTournaments(tournamentsData);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchWtaTournaments();
  }, []);

  return (
    <div className='wta'>
      <main>
        <div className='tournaments'>
          <h1>List of tournaments in year 2022</h1>
          {tournaments.map((tournament, index) => {
            return (
              <div
                className='tournament'
                style={{ borderBottom: '1px solid #753a88' }}
                key={index}
              >
                <div className='tournament-name'>
                  <h2 style={{ color: '#753a88' }}>
                    {tournament['Full Name']}
                  </h2>
                  <p>
                    {tournament.city}, {tournament.country}
                  </p>
                </div>
                <h3>{tournament.startDate}</h3>
                <h3>{tournament.surface}</h3>
                <h3>${tournament.prizeMoney.toLocaleString('en-US')}</h3>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default WtaTournaments;
