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

Chart.register(CategoryScale);

function App() {
  const [user, setUser] = useState({});
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "magenta",
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });
  return (
  <div className='App'>
      <Navbar user={user} setUser={setUser}/>
      <Routes>
      <Route exact path='/' element={<Home />} />
        {user && user._id ? 
        <Route exact path='/' element={<Home />} />
        :
        <Route path='/login' element={<Login setUser={setUser} />} />
      }
        <Route path='/map' element={<Map />} />
        {/* <Route path='/social' element={<SocialLInks />} /> */}
        <Route path='/chart' element={<BarChart chartData={chartData}/>} />
        <Route path='/login' element={<Login setUser={setUser} user={setUser} />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
