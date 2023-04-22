import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/planet.png';

export default function Header() {
  return (
    <nav className="w-full flex bg-black/80 justify-center md:justify-between items-center py-4 px-6">
      <div className="flex gap-2 items-center">
        <img src={logo} alt="logo" className="md:w-12 w-8 invert" />
        <h1 className="text-sm md:text-3xl text-white">Space Travelers&apos; Hub</h1>
      </div>

      <div className="md:flex justify-between hidden">
        <div className="flex gap-4 p-2 border-r-[2px] border-white">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'text-yellow-500 p-2 rounded-md underline underline-offset-4' : 'text-white p-2 rounded-md')}
          >
            Rockets
          </NavLink>
          <NavLink
            to="/missions"
            className={({ isActive }) => (isActive ? 'text-yellow-500 p-2 rounded-md underline underline-offset-4' : 'text-white p-2 rounded-md')}
          >
            Missions
          </NavLink>
        </div>
        <div className="p-2 hidden md:flex">
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? 'text-yellow-500 p-2 rounded-md underline underline-offset-4' : 'text-white p-2 rounded-md')}
          >
            My Profile
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
