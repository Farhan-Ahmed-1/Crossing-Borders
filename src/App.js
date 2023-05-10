import logo from './images/Rotating_earth.gif';
import './App.css';
import Navbar from './components/Navbar';
import SocialLInks from './components/SocialLInks';
import Map from './components/Map'
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
  <div className='App'>
      <Navbar/> 
      {/* <img src={logo} /> */}
      <Routes>
        <Route path='/map' element={<Map />} />
        <Route path='/social' element={<SocialLInks />} />
      </Routes>
    </div>
  );
}

export default App;
