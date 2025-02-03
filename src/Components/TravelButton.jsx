import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';
const TravelButton = () => {
const {loggedInUser, setLoggedInUser}=useUser();

  const navigate = useNavigate();

  const handleToPast = () => {
    navigate('/era'); 
  };

  const handleToFuture = () => {
    if (loggedInUser) {
      navigate('/letterPage');
    }
    else {
      navigate('/login');
    }
  };


  return (
    <div className="travel-buttons">
      <button className="time-travel-button">Time to Travel</button>
      <div className="sub-buttons">
        <button className="to-past-button" onClick={handleToPast}>To Past</button>
        <button className="to-future-button" onClick={handleToFuture}>To Future</button>
      </div>
    </div>
  );
};

export default TravelButton;
