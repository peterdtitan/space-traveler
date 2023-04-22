import React from 'react';
import { useSelector } from 'react-redux';

export default function Profile() {
  const { missions } = useSelector((state) => state.missions);
  const { rockets } = useSelector((state) => state.rockets);

  const joinedMissions = missions.filter((mission) => mission.isJoined);
  const reservedRockets = rockets.filter((rocket) => rocket.isBooked);

  return (
    <div className="profileContainer">
      <div className="missionContainer">
        <h2>My Missions</h2>
        <div className="pmData">
          {joinedMissions.length > 0 ? (
            joinedMissions.map((mission) => <p key={mission.id}>{mission.name}</p>)
          ) : (
            <p>No Missions Joined!</p>
          )}
        </div>
      </div>
      <div className="rocketContainer">
        <h2>My Rockets</h2>
        <div className="prData">
          {reservedRockets.length > 0 ? (
            reservedRockets.map((rocket) => <p key={rocket.id}>{rocket.rocketName}</p>)
          ) : (
            <p>No Rockets Reserved!</p>
          )}
        </div>
        <br />
      </div>
    </div>
  );
}
