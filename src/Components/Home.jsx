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
          {/* <img width="800" height="600" src={`${CLOUDINARY_URL}astronaut_dplspn`} alt="Astronaut" className="centered-image" /> */}
          <img
  src="https://res.cloudinary.com/djjmj40t9/image/upload/dpr_auto,f_auto,q_auto,w_600,h_400/v1739207107/astronaut_dplspn"
  srcSet="
    https://res.cloudinary.com/djjmj40t9/image/upload/dpr_auto,f_auto,q_auto,w_300,h_200/v1739207107/astronaut_dplspn 300w,
    https://res.cloudinary.com/djjmj40t9/image/upload/dpr_auto,f_auto,q_auto,w_600,h_400/v1739207107/astronaut_dplspn 600w,
    https://res.cloudinary.com/djjmj40t9/image/upload/dpr_auto,f_auto,q_auto,w_900,h_600/v1739207107/astronaut_dplspn 900w
  "
  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 70vw, 600px"
  alt="Astronaut"
  className="centered-image"
  width="400"
  height="600"
  loading="eager"
/>

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
