import React from 'react';
import logo from '../assets/images/planet.png';

export default function Footer() {
  return (
    <div className="w-full absolute bottom-0 flex bg-black/80 justify-center items-center p-2 text-sm text-white">
      <div className="flex gap-2 items-center">
        <img src={logo} alt="logo" className="w-8 invert" />
        <p className="text-xs md:text-base">Created by Microverse Inc under license</p>
      </div>
    </div>
  );
}
