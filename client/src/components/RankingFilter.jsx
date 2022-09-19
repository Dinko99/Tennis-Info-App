const RankingFilter = ({ handleRankingsRange, rankingsRange }) => {
  return (
    <select value={rankingsRange} onChange={handleRankingsRange}>
      <option value='all'>all</option>
      <option value='top 100'>top 100</option>
      <option value='top 200'>top 100-200</option>
      <option value='top 200+'>top 200+</option>
    </select>
  );
};

export default RankingFilter;
