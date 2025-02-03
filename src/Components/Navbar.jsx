import { Link } from 'react-router-dom';
import logoSunflower from '../assets/images/logosunflower.jpg';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { FaUserAstronaut } from 'react-icons/fa';
import { useUser } from './UserContext';

const Navbar = () => {
  const [notes, setNotes] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchNotes = async () => {
      if (!token) {
        return;
      }

      try {
        const response = await axios.get('http://localhost:8080/api/future-notes', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const currentDate = new Date();
        const filteredNotes = response.data.notes.filter(
          (note) => new Date(note.date) <= currentDate // Show only notes with dates less than or equal to today
        );
        setNotes(filteredNotes.length);
      } catch (error) {
        console.error(error.response?.data || error);
      }
    };

    fetchNotes();
  }, [token]);

  const { loggedInUser, setLoggedInUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess('User Logged out');
    setLoggedInUser('');
    setNotes(0);
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };
  const handleSeen = (e) => {
   
    setNotes(0);
   
  };

  // Login user check
  const handleUnlockPast = () => {
    setNotes(0);
    if (loggedInUser) {
      navigate('/saved-notes'); // Redirect to saved notes page
    } else {
      navigate('/login'); // Redirect to login page
    }
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img src={logoSunflower} alt="Logo Sunflower" className="logo-image" />
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/era" className="nav-link">
            Era
          </Link>
        </li>
        <li>
          <div className="popover__wrapper">
            <a href="#">
             
              {notes > 0 ? <button className="notification-dot"></button> : null}
              <div>
                <FaUserAstronaut className="userButton" />
              </div>
            </a>
            <div className="popover__content">
              <div className="modal-area">
                <div className="welcomeMsg">
                  <p>Welcome {loggedInUser || "Guest"}</p>
                </div>
                {loggedInUser ? (
                  <button className='modalButton' onClick={handleLogout}>Logout</button>
                ) : (
                  <button className='modalButton' onClick={() => navigate('/login')}>Login</button>
                )}{notes > 0 ? <button className="notification-dot1" onClick={handleSeen}></button> : null}
                <button className='modalButton' onClick={handleUnlockPast}>Unlock the Past</button>
                
              </div>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;