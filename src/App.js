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

Chart.register(CategoryScale);

function App() {
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
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/map' element={<Map />} />
        {/* <Route path='/social' element={<SocialLInks />} /> */}
        <Route path='/chart' element={<BarChart chartData={chartData}/>} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
