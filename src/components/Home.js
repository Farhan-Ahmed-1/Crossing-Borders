import React, { useEffect } from 'react'
import logo from '../images/Rotating_earth.gif';
import './Home.css'
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

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
    <div className="Home">
      <img className='rotating-earth' src={logo} />
  <div className="content">
    <h4 className='text-yellow-500 my-8'>Welcome to </h4>
    <h1 className='title text-white text-6xl font-serif'>
      Global <span className="moments text-blue-700">Movements</span>
    </h1>
    <h3 className='subtitle text-2xl text-white mb-3'>Search for a better life &amp; a New Beginning </h3>
    <h5 className='para text-gray-300 mb-4'>
      Migration is a phenomenon that has been a part of human history for
      centuries. It involves the movement of people from one place to another,
      often in search of better opportunities, safety, or a new beginning.
      Whether it's economic migration, refugee migration, or cultural migration,
      people have always been on the move. Migration can be both voluntary and
      forced, and it often has significant impacts on both the individuals who
      migrate and the communities they leave behind. Despite its challenges and
      complexities, migration is an essential part of the human story and has
      helped shape the world as we know it today.
    </h5>
    <div>
      <Link to='/register' className="bottom text-purple-900 font-black bg-yellow-500 py-3 px-5 mr-20 rounded-xl hover:bg-yellow-300" type="button">
        Register
      </Link>
      <button className="bottom text-purple-900 font-black bg-yellow-500 py-3 px-6 rounded-xl hover:bg-yellow-300" type="button">
        
        {
          user&&user.email ? <span> <Link to="/map">Explore </Link></span> :
          <span> <Link to="/login">Explore </Link> </span>
        }
        {" "}
      </button>
    </div>
  </div>
  <Toaster />
</div>

  )
}

export default Home