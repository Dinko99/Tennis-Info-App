import './styles/global/variables.scss';
import './App.scss';
import './styles/global/base.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import Atp from './pages/Atp';
import Wta from './pages/Wta';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  let location = useLocation();

  return (
    <>
      {location.pathname === '/' ? null : <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/atp' element={<Atp />} />
        <Route path='/wta' element={<Wta />} />
      </Routes>
    </>
  );
}

export default App;
