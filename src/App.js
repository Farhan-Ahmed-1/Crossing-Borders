import './App.css';
import Navbar from './components/Navbar';
import SocialLInks from './components/SocialLInks';
import Map from './components/Map'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "./utils/Data";
import BarChart from './Charts/BarChart';
import Login from './login-register/login';
import Register from './login-register/register';
import WhatsThis from './components/WhatsThis';

Chart.register(CategoryScale);

function App() {
  const [user, setUser] = useState("");
  const [country, setCountry] = useState("");
  return (
  <div className='App'>
      <Navbar user={user} setUser={setUser}/>
      <Routes>
      <Route exact path='/' element={<Home user={user} />} />
      <Route path='/map' element={<Map setCountry={setCountry} country={country}/>} />
        
        {/* <Route path='/social' element={<SocialLInks />} /> */}
        <Route path='/chart' element={<BarChart country={country}/>} />
        <Route path='/login' element={<Login setUser={setUser} user={setUser} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/whatsthis' element={<WhatsThis />} />
      </Routes>
    </div>
  );
}

export default App;
