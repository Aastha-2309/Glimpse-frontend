import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL, CLOUDINARY_URL } from '../Constants/Constants';

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
        const response = await axios.get(`${BASE_URL}/api/future-notes`, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });

        const currentDate = new Date();
        const filteredNotes = response.data.notes.filter((note) =>
          new Date(note.date) <= currentDate 
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
   
      <div className="msgContainer">
        <img src={`${CLOUDINARY_URL}letter_ctdfpq`} className="letterHead" alt="Letter Head" />

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
  
  );
};

export default SavedNotes;
