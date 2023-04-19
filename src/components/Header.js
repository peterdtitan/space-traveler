import React from 'react';
import logo from '../assets/images/planet.png';

export default function Header() {
  return (
    <div className="w-full flex bg-black/80 justify-center md:justify-between items-center py-4 px-6">
      <div className="flex gap-2 items-center">
        <img src={logo} alt="logo" className="md:w-12 w-8 invert" />
        <h1 className="text-sm md:text-3xl text-white">Space Travelers&apos; Hub</h1>
      </div>

      <div className="md:flex justify-between hidden">
        <div className="flex gap-4 p-2 border-r-[2px] border-white">
          <button type="button" className="text-white bg-black/80 hover:bg-black/60 p-2 rounded-md hover:text-black hover:bg-yellow-500">Rockets</button>
          <button type="button" className="text-white bg-black/80 hover:bg-black/60 p-2 rounded-md hover:text-black hover:bg-yellow-500 ">Missions</button>
        </div>
        <div className="p-2 hidden md:flex">
          <button type="button" className="text-white bg-black/80 hover:bg-black/60 p-2 rounded-md hover:text-black hover:bg-yellow-500">My Profile</button>
        </div>
      </div>
    </div>
  );
}
