import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/Missions/missionsSlice';

export default function Missions() {
  const { missions } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

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
        {missions.length !== 0 ? (
          <div className="flex flex-col gap-8 mt-2">
            {missions.map((mission) => (
              <div className="flex flex-col md:flex-row p-4 flex-grow flex-shrink items-center rounded-md shadow-md cursor-default bg-slate-200" key={mission.id}>
                <div className="w-40 flex p-2 items-center justify-center bg-red-100 font-semibold">
                  <h1>{mission.name}</h1>
                </div>
                <div className="flex md:w-[65%] p-4 items-center bg-yellow-50 border-l-[0.5px] border-r-[0.5px] border-black">
                  <p>{mission.description}</p>
                </div>
                <div className="flex items-center w-40 justify-center p-4">
                  {mission.isJoined ? (
                    <p className="bg-green-500 text-white rounded-md p-1">
                      Active Member
                    </p>
                  ) : (
                    <p className="bg-red-500 text-white rounded-md p-1">
                      Not A Member
                    </p>
                  )}
                </div>
                <div className="flex items-center h-40 w-40 justify-center p-4 rounded-tr-md rounded-br-md">
                  {mission.isJoined ? (
                    <button
                      type="button"
                      onClick={() => dispatch(leaveMission(mission.id))}
                      className="bg-red-400 text-red-800 rounded-md p-1 cursor-pointer"
                    >
                      Leave Mission
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => dispatch(joinMission(mission.id))}
                      className="bg-green-400 text-green-800 rounded-md p-1 cursor-pointer"
                    >
                      Join Mission
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
