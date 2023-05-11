import './App.css';
import Navbar from './components/Navbar';
import SocialLInks from './components/SocialLInks';
import Map from './components/Map'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';


function App() {
  return (
  <div className='App'>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/map' element={<Map />} />
        <Route path='/social' element={<SocialLInks />} />
      </Routes>
    </div>
  );
}

export default App;
