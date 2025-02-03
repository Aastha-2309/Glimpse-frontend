import { Link } from 'react-router-dom';
import About from './About';  
import Era from './Era';   
import Subscription from './Subscription'; 
import TravelButton from './TravelButton'; 
import logoSunflower from '../assets/images/logosunflower.jpg'; 
import TimeCapsuleButton from './TimeCapsuleButton';
import Navbar from './Navbar';
import { ToastContainer } from 'react-toastify';
import astronaut from '../assets/images/astronaut.jpg'


const Home = () => {
  return (
    <>
   
    <div className='homePage'>
      

      <div id="home" className="sec">
        <div>
          <img src={astronaut} alt="Astronaut" className="centered-image" />
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
