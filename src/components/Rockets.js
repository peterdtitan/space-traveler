import React from 'react';
import logo from '../assets/images/planet.png';
import { rockets } from '../data/dummy';

export default function Rockets() {
  return (

    <div className="bg-gray-50 p-10 flex-col gap-y-20">
      {rockets.map((rocket) => (
        <div className="flex flex-col md:flex-row gap-4  bg-white p-4 rounded-md shadow-md" key={rocket.id}>
          <div className="border-2 rounded-md p-2">
            <img src={logo} alt="rocket" className="w-48" />
          </div>
          <div className="flex flex-col gap-y-2 md:w-[60%]">
            <h1 className="text-2xl font-bold">{rocket.name}</h1>
            <p className="text-gray-500">{rocket.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
