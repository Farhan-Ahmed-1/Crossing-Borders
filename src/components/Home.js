import React, { useEffect } from 'react'
import logo from '../images/Rotating_earth.gif';
import './Home.css'
import toast, { Toaster } from 'react-hot-toast';

const notify = (user) => {
  if(user && user.email){
    toast.success('Welcome '+user.email);
  }
  else{
    toast('Welcome Please Login 😄');
  }
}
const Home = ({user}) => {
  useEffect(() => {
    notify(user);
  }, [])
  
  return (
    <div className='Home'>
      <img src={logo} />
      <p>Hellto this is some text</p>
      <Toaster />
    </div>
  )
}

export default Home