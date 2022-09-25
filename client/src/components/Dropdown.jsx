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

const Dropdown = ({ isDropdownOpen, closeDropdown, setIsAtp, isAtp }) => {
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
          <Link to='/atp' onClick={() => setIsAtp(true)}>
            <li>
              <AiOutlineMan className='icon' /> ATP
            </li>
          </Link>
          <Link to='/wta' onClick={() => setIsAtp(false)}>
            <li>
              <AiOutlineWoman className='icon' /> WTA
            </li>
          </Link>
          <Link to={isAtp ? '/atp' : '/wta'}>
            <li>
              <ImListNumbered className='icon' /> Rankings
            </li>
          </Link>
          <Link to={isAtp ? '/atp/tournaments' : '/wta/tournaments'}>
            <li>
              <AiFillTrophy className='icon' /> Tournaments
            </li>
          </Link>
          <Link to={isAtp ? '/atp/players' : '/wta/players'}>
            <li>
              <IoIosMan className='icon' /> Players
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
