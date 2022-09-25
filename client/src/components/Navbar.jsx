import '../styles/Navbar.scss';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { IoMdArrowDropdown } from 'react-icons/io';

const Navbar = ({ toggleDropdown, isAtp, setIsAtp }) => {
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
          <li className={isAtp ? 'none' : ''}>
            <Link to='/atp' onClick={() => setIsAtp(true)}>
              ATP
            </Link>
          </li>
          <li className={!isAtp ? 'none' : ''}>
            <Link to='/wta' onClick={() => setIsAtp(false)}>
              WTA
            </Link>
          </li>
          <li>
            <Link to={isAtp ? '/atp' : '/wta'}>Rankings</Link>
          </li>
          <li>
            <Link to={isAtp ? '/atp/tournaments' : '/wta/tournaments'}>
              Tournaments
            </Link>
          </li>
          <li>
            <Link to={isAtp ? '/atp/players' : '/wta/players'}>Players</Link>
          </li>
          <li onClick={toggleDropdown}>
            More <IoMdArrowDropdown />
          </li>
        </ul>
        <FiSearch className='search-icon' />
      </div>
    </nav>
  );
};

export default Navbar;
