import '../styles/Navbar.scss';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { IoMdArrowDropdown } from 'react-icons/io';

const Navbar = ({ toggleDropdown, location, setTab }) => {
  return (
    <nav>
      <div className='nav-wrapper'>
        <div className='logo'>
          <img src={Logo} alt='Logo' />
          <Link to='/'>
            <h1>TennisInfo</h1>
          </Link>
        </div>
        <ul>
          <li>
            {(location.pathname === '/wta' && <Link to='/atp'>ATP</Link>) ||
              (location.pathname === '/atp' && <Link to='/wta'>WTA</Link>)}
          </li>
          <li onClick={() => setTab('Rankings')}>Rankings</li>
          <li onClick={() => setTab('Tournaments')}>Tournaments</li>
          <li onClick={() => setTab('Players')}>Players</li>
          <li onClick={toggleDropdown}>
            More <IoMdArrowDropdown />
          </li>
        </ul>
        <FiSearch className='search-icon' onClick={() => setTab('Players')} />
      </div>
    </nav>
  );
};

export default Navbar;
