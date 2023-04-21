import React from 'react';
import { useSelector } from 'react-redux';

export default function Profile() {
  const { missions } = useSelector((state) => state.missions);
  const { rockets } = useSelector((state) => state.rockets);

  return (
    <div className="profileContainer">
      <div className="missionContainer">
        <h2>My Missions</h2>
        <div className="pmData">
          {missions.map((mission) => (
            <p key={mission.id}>{mission.name}</p>
          ))}
        </div>
      </div>
      <div className="rocketContainer">
        <h2>My Rockets</h2>
        <div className="prData">
          {rockets.map((rocket) => (
            <p key={rocket.id}>{rocket.rocketName}</p>
          ))}
        </div>
        <br />
      </div>
    </div>
  );
}
