import React from 'react'
import logo from '../images/Rotating_earth.gif';
import './Home.css'

const Home = () => {
  return (
    <div className='Home'>
      <img src={logo} />
      <p>Hellto this is some text</p>
    </div>
  )
}

export default Home