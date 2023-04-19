import React from 'react';
import logo from '../assets/images/planet.png';

export default function Footer() {
  return (
    <footer className="flex flex-col text-white text-xs md:text-base md:flex-row items-center justify-center bg-slate-900 gap-10 fixed bottom-0 w-screen h-10 font-montserrat">
      <div className="flex gap-2 items-center">
        <img src={logo} alt="logo" className="w-8 invert" />
        <p className="text-xs md:text-base">Created by Microverse Inc under license</p>
      </div>
    </footer>
  );
}
