import React from 'react';
import { missions } from '../data/dummy';

export default function Missions() {
  return (
    <div className="bg-black/25">
      <div className="bg-gray-50 p-10 flex-col">
        <div className="flex p-4 rounded-md bg-black/80 text-white">
          <div className="w-40">
            <h1>Mission</h1>
          </div>
          <div className="md:w-[65%]">
            <h1>Description</h1>
          </div>
          <div className="flex items-center justify-center w-40">
            <h1>Status</h1>
          </div>
          <div className="flex items-center justify-center w-40">
            <h1>Action</h1>
          </div>
        </div>
        {missions.map((mission) => (
          <div className="flex flex-col md:flex-row bg-white p-4 items-center rounded-md shadow-md cursor-default" key={mission.id}>
            <div className="w-40 h-40 bg-slate-200 flex p-2 items-center justify-center rounded-tl-md rounded-bl-md">
              <h1>{mission.name}</h1>
            </div>
            <div className="flex h-40 md:w-[65%] p-4 bg-slate-100 items-center">
              <p>{mission.description}</p>
            </div>
            <div className="flex items-center h-40 w-40 justify-center bg-slate-200 p-4">
              <p className={`${mission.active ? 'bg-blue-500 text-white rounded-sm p-1' : 'bg-slate-400 text-white rounded-sm p-1'} `}>
                {mission.active ? 'Active Member' : 'Not a Member' }
              </p>
            </div>
            <div className="flex items-center h-40 w-40 justify-center p-4 bg-slate-200 rounded-tr-md rounded-br-md">
              {mission.active ? (
                <button type="button" className="bg-red-400 text-red-800 rounded-md p-1 cursor-pointer">Leave Mission</button>
              ) : (
                <button type="button" className="bg-green-400 text-green-800 rounded-md p-1 cursor-pointer">Join Mission</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
