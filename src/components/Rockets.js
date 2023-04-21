import React from 'react';
import { useSelector } from 'react-redux';

export default function Rockets() {
  const { rockets } = useSelector((state) => state.rockets);

  return (
    <div className="bg-gray-50 p-10 flex-col gap-y-8">
      {rockets.length !== 0 ? (
        <div className="flex flex-col gap-10 p-2 rounded-md pb-20">
          {rockets.map((rocket) => (
            <div className="flex flex-col md:flex-row gap-4  bg-white p-4 rounded-md shadow-md" key={rocket.rocketId}>
              <div className="border-2 rounded-md p-2 flex items-center justify-center">
                <img src={rocket.rocketImages[0]} alt="rocket" className="w-48" />
              </div>
              <div className="flex flex-col gap-y-2 md:w-[60%]">
                <h1 className="text-2xl font-bold">{rocket.rocketName}</h1>
                <p className="text-gray-500">{rocket.description}</p>
              </div>
            </div>
          ))}
        </div>
      )
        : null}
    </div>
  );
}
