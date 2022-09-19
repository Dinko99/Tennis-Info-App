const RankingsRow = ({ player }) => {
  return (
    <div className='atp-rankings-row' key={player.id}>
      <p>{player.ranking}</p>
      <p>{player.full_name}</p>
      <p>{player.ranking_points}</p>
      <p
        className={parseInt(player.movement) < 0 ? 'negative' : 'positive'}
        style={{
          color: player.movement === '' && '#000',
          fontWeight: player.movement === '' && '400',
        }}
      >
        {player.movement === '' ? '--' : player.movement}
      </p>
      <p>{player.country}</p>
    </div>
  );
};

export default RankingsRow;
