import React, { useEffect, useState } from 'react';
import axios from 'axios';
import letter from '../assets/images/letter.png';

const SavedNotes = () => {
  const [notes, setNotes] = useState([]); 
  const token = localStorage.getItem('token'); 

  useEffect(() => {
    const fetchNotes = async () => {
      if (!token) {
        alert('Please log in to view your saved notes!');
        return;
      }

      try {
        const response = await axios.get('https://13.233.75.216/api/api/future-notes', {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });

        const currentDate = new Date();
        const filteredNotes = response.data.notes.filter((note) =>
          new Date(note.date) <= currentDate // Show only notes with dates less than or equal to today
        );

        setNotes(filteredNotes);
      } catch (error) {
        console.error(error.response?.data || error);
        alert('There was an error fetching your notes: ' + (error.response?.data?.message || error.message));
      }
    };

    fetchNotes();
  }, [token]);

  return (
    <div>
      <div className="msgContainer">
        <img src={letter} className="letterHead" alt="Letter Head" />

        {/* Display saved notes */}
        <div  className="savedMessage">
          {notes.length === 0 ? (
            <p>No messages available to display.</p>
          ) : (
            <ul>
              {notes.map((note) => (
                <li key={note._id}>
               {note.message}
                  
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SavedNotes;
