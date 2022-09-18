import '../styles/Navbar.scss';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { IoMdArrowDropdown } from 'react-icons/io';

const Navbar = ({ toggleDropdown }) => {
  return (
    <nav>
      <div className='nav-wrapper'>
        <div className='logo'>
          <img src={Logo} alt='Logo' />
          <h1>TennisInfo</h1>
        </div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>Rankings</li>
          <li>Tournaments</li>
          <li>Players</li>
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
