import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {BiWorld} from 'react-icons/bi'
import {HiOutlineBars3BottomRight} from 'react-icons/hi2'
import {FaHome, FaUserPlus} from 'react-icons/fa'
import {IoLogOut} from 'react-icons/io5'
import company from '../images/company.png'

export default function Navbar({ user, setUser }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const navigate = useNavigate();
  function handleLogout(){
    navigate('/');
    setUser({});
    window.location.reload();
  }
  return (
    <>
      {/* <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900"> */}
            {/* <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gradient-to-r from-emerald-800 via-yellow-300 to-sky-600"> */}
                  <nav className=" flex flex-wrap items-center justify-between bg-gradient-to-r from-slate-900 to-slate-700">


        <div className="container flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              to="/"
            >
              {/* Crossing Borders */}
              <div className="flex items-center justify-center">
                <img src={company} className="h-10 w-20 p-0 m-0"/><span>Global Movements</span>
              </div>
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <HiOutlineBars3BottomRight/>
            </button>
          </div>
          <div
            className={
              "ml-22 lg:flex flex-grow" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/"
                >
                  <FaHome className="text-lg" />
                  <span className="ml-2">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                {
                  user && user._id?
                  <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/map"
                >
                  <BiWorld className="text-lg"/>
                  <span className="ml-1">Map</span>
                </Link>
                :
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/login"
                >
                  <BiWorld className="text-lg"/>
                  <span className="ml-1">Map</span>
                </Link>
                }
              </li>
              <li className="nav-item">
                {user && user._id ?
                <button className="ml-2 px-3 py-2 font-black cursor-pointer flex items-center text-xs uppercase leading-snug text-white hover:opacity-75" onClick={handleLogout}>{`(${user.email}) `} <span className="mx-2">Logout</span> <IoLogOut className="text-xl" /></button>
                :
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/login"
                >
                  <FaUserPlus className="text-lg" />
                  <span className="ml-2">Login</span>
                </Link>
                
              }
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}