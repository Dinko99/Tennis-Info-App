import '../styles/Home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <Link to='/atp'>
        <h1>ATP</h1>
      </Link>
      <Link to='/wta'>
        <h1>WTA</h1>
      </Link>
    </div>
  );
};

export default Home;
