import logo from './images/Rotating_earth.gif';
import './App.css';
import Navbar from './components/Navbar';
import SocialLInks from './components/SocialLInks';


function App() {
  return (
  <div className='App'>
      <Navbar/> 
      <img src={logo} />
      <SocialLInks/>
    </div>
  );
}

export default App;
