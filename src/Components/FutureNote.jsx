import React, { useState } from 'react';
import axios from 'axios';
import letter from '../assets/images/letter.png';
import send from "../assets/images/send.png";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const FutureNote = () => {
  const [openCalendar, setOpenCalendar] = useState(false); // Manage calendar visibility
  const [selectedDate, setSelectedDate] = useState(null); // Manage selected date
  const [message, setMessage] = useState(""); // Manage message content
  const token = localStorage.getItem('token'); // Assuming token is stored in localStorage

  const toggleCalendar = () => {
    setOpenCalendar(prev => !prev); // Toggle calendar visibility
  };

  const handleDateChange = (newValue) => {
    setSelectedDate(newValue); // Update selected date
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
        'https://13.233.75.216/api/api/future-notes',
        {
          message,
          date: selectedDate.toISOString(), // Convert to ISO string for consistency
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Token sent as Bearer in Authorization header
          },
        }
      );

      alert('Future note saved successfully!');
      setMessage(''); // Clear the message field after saving
      setSelectedDate(null); // Clear the selected date after saving
      setOpenCalendar(false); // Close the calendar popup after saving
    } catch (error) {
      console.error(error.response?.data || error);
      alert('There was an error saving your note: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <>
      <div className="msgContainer">
        <img src={letter} className="letterHead" alt="Letter Head" />

        {/* Textarea for Message */}
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
        <button className="sendButton" onClick={toggleCalendar}>
          <img src={send} alt="Send" />
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
          <button className="saveNoteButton" onClick={handleSave}>Save Note</button>
        </div>
      )}
    </>
  );
};

export default FutureNote;
