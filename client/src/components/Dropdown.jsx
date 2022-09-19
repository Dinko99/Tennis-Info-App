import '../styles/Dropdown.scss';
import { Link } from 'react-router-dom';
import { IoIosMan } from 'react-icons/io';
import {
  AiFillHome,
  AiFillTrophy,
  AiOutlineWoman,
  AiOutlineMan,
} from 'react-icons/ai';
import { ImListNumbered } from 'react-icons/im';

const Dropdown = ({ isDropdownOpen, closeDropdown, setTab }) => {
  return (
    <>
      <div
        className={isDropdownOpen ? 'overlay show-overlay' : 'overlay'}
        onClick={closeDropdown}
      ></div>
      <div className={isDropdownOpen ? 'dropdown show-dropdown' : 'dropdown'}>
        <ul>
          <Link to='/'>
            <li>
              <AiFillHome className='icon' /> Home
            </li>
          </Link>
          <Link to='/atp'>
            <li>
              <AiOutlineMan className='icon' /> ATP
            </li>
          </Link>
          <Link to='/wta'>
            <li>
              <AiOutlineWoman className='icon' /> WTA
            </li>
          </Link>
          <li onClick={() => setTab('Rankings')}>
            <ImListNumbered className='icon' /> Rankings
          </li>
          <li onClick={() => setTab('Tournaments')}>
            <AiFillTrophy className='icon' /> Tournaments
          </li>
          <li onClick={() => setTab('Players')}>
            <IoIosMan className='icon' /> Players
          </li>
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
