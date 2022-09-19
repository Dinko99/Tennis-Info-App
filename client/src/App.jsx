import './styles/global/variables.scss';
import './App.scss';
import './styles/global/base.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import Atp from './pages/Atp';
import Wta from './pages/Wta';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import { useState, useEffect } from 'react';

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let location = useLocation();

  useEffect(() => {
    closeDropdown();
  }, [location.pathname]);

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  if (isDropdownOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible';
  }

  return (
    <>
      {location.pathname === '/' ? null : (
        <Navbar toggleDropdown={toggleDropdown} location={location} />
      )}
      {location.pathname !== '/' && (
        <Dropdown
          isDropdownOpen={isDropdownOpen}
          closeDropdown={closeDropdown}
        />
      )}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/atp' element={<Atp />} />
        <Route path='/wta' element={<Wta />} />
      </Routes>
    </>
  );
}

export default App;
