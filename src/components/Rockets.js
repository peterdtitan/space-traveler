import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bookRocket, cancelRocket } from '../redux/rockets/rocketsSlice';

export default function Rockets() {
  const { rockets } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-50 p-10 flex-col gap-y-8">
      {rockets.length !== 0 ? (
        <div className="flex flex-col gap-10 p-2 rounded-md pb-20">
          {rockets.map((rocket) => (
            <div className="flex flex-col md:flex-row gap-4  bg-white p-4 rounded-md shadow-md" key={rocket.rocketId}>
              <div className="border-2 rounded-md p-2 flex items-center justify-center bg-[]">
                <img src={rocket.rocketImages[0]} alt="rocket" className="w-48" />
              </div>
              <div className="flex flex-col gap-y-2 md:w-[60%] pb-4">
                <h1 className="text-2xl font-bold">{rocket.rocketName}</h1>
                {rocket.isBooked ? (
                  <p className="text-green-600 text-xs p-2 rounded-full bg-green-300 w-[70px]">Reserved</p>
                ) : null}
                <p className="text-gray-500">{rocket.description}</p>
                {rocket.isBooked ? (
                  <button
                    type="button"
                    onClick={() => dispatch(cancelRocket(rocket.rocketId))}
                    className="bg-red-400 text-red-800 w-[30%] mt-4 rounded-md p-1 cursor-pointer"
                  >
                    Cancel Reservation
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => dispatch(bookRocket(rocket.rocketId))}
                    className="bg-green-400 text-green-800 w-[30%] mt-4 rounded-md p-1 cursor-pointer"
                  >
                    Reserve Rocket
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )
        : null}
    </div>
  );
}
