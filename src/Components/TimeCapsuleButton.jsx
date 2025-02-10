
import { CLOUDINARY_URL } from "../Constants/Constants";
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
      <img height="auto" width="auto" className="futureImg" src={`${CLOUDINARY_URL}timeCapsule_cktqsu`} />
    </button>
  );
};

export default TimeCapsuleButton;
