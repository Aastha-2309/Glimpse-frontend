import About from './About';  
import Era from './Era';   
import Subscription from './Subscription'; 
import TravelButton from './TravelButton'; 
import TimeCapsuleButton from './TimeCapsuleButton';
import { ToastContainer } from 'react-toastify';
import { CLOUDINARY_URL } from '../Constants/Constants';


const Home = () => {
  return (
    <>
   
    <div className='homePage'>
      

      <div id="home" className="sec">
        <div>
          <img height="auto" width="auto" src={`${CLOUDINARY_URL}astronaut_dplspn`} alt="Astronaut" className="centered-image" />
        </div>
        <TravelButton />
        <TimeCapsuleButton/>
      </div>

      <div id="about" className="section">
        <About />
      </div>

      <div id="era" className="section">
        <Era />
      </div>

      <div id="subscription" className="section">
        <Subscription />
      </div>

      <ToastContainer className="toastt" />


    </div>
    </>
  );
};

export default Home;
