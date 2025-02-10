import { useState } from 'react';
import axios from 'axios';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { BASE_URL, CLOUDINARY_URL } from '../Constants/Constants';

const FutureNote = () => {
  const [openCalendar, setOpenCalendar] = useState(false); 
  const [selectedDate, setSelectedDate] = useState(null);
  const [message, setMessage] = useState(""); 
  const token = localStorage.getItem('token'); 

  const toggleCalendar = () => {
    setOpenCalendar(prev => !prev); 
  };

  const handleDateChange = (newValue) => {
    setSelectedDate(newValue); 
  };

  const handleSave = async () => {
    if (!message || !selectedDate) {
      alert('Please write a message and select a future date!');
      setOpenCalendar(false);
      return;
    }

    if (!token) {
      alert('Please log in to save your note!');
      return;
    }

    try {
      const response = await axios.post(
        `${BASE_URL}/api/future-notes`,
        {
          message,
          date: selectedDate.toISOString(), 
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        }
      );

      alert('Future note saved successfully!');
      setMessage(''); 
      setSelectedDate(null); 
      setOpenCalendar(false); 
    } catch (error) {
      console.error(error.response?.data || error);
      alert('There was an error saving your note: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <>
      <div className="msgContainer">
        <img height="auto" width="auto" src={`${CLOUDINARY_URL}letter_ctdfpq`} className="letterHead" alt="Letter Head" />

        <div className="msgBody">
          <textarea
            name="postContent"
            rows={4}
            cols={40}
            placeholder="Write your note here!"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        {/* Button to Open/Close the Calendar */}
        <button  className="sendButton" aria-label="Send Button" onClick={toggleCalendar}>
          <img height="auto" width="auto" src={`${CLOUDINARY_URL}send_icnvjb`} alt="Send" />
        </button>
      </div>

      {/* Calendar Popup */}
      {openCalendar && (
        <div className="calendarPopup">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Select a date"
              value={selectedDate}
              onChange={handleDateChange}
              disablePast
            />
          </LocalizationProvider>
          <button className="saveNoteButton" aria-label="Save Button" onClick={handleSave}>Save Note</button>
        </div>
      )}
    </>
  );
};

export default FutureNote;
