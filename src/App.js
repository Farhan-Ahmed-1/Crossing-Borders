import logo from './images/Rotating_earth.gif';
import './App.css';
import Navbar from './components/Navbar';


function App() {
  return (
  <div className='App'>
      <Navbar/> 
      <img src={logo} />
    </div>
  );
}

export default App;
