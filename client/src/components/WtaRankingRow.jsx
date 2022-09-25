const WtaRankingRow = ({ player }) => {
  return (
    <div className='atp-rankings-row'>
      <p>{player.ranking}</p>
      <p>{player.name}</p>
      <p>{player.points}</p>
      <p
        className={parseInt(player.movement) < 0 ? 'negative' : 'positive'}
        style={{
          color: player.movement === 0 && '#000',
          fontWeight: player.movement === 0 && '400',
        }}
      >
        {player.movement === 0 ? '--' : player.movement}
      </p>
      <p>{player.country}</p>
    </div>
  );
};

export default WtaRankingRow;
