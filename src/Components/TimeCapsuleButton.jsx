import timeCap from "../assets/images/timeCapsule.png"
import { useUser } from './UserContext';
import { useNavigate } from "react-router-dom";
const TimeCapsuleButton = () => {
  const navigate = useNavigate();
  const { loggedInUser, setLoggedInUser } = useUser();

   const handleFutureButton = () => {
    if (loggedInUser) {
      navigate('/letterPage');
    }
    else {
      navigate('/login');
    }
  };
  return (

    <button title="" className="futureButton" onClick={handleFutureButton}>
      <img className="futureImg" src={timeCap} />
    </button>
  );
};

export default TimeCapsuleButton;
