import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get(`${process.env.REACT_APP_NOTE_TAKING_APP_BACKEND_URL}/api/notes`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      setNotes(response.data);
    }).catch(error => {
      console.log('Error fetching notes', error);
    });
  }, []);

  const renderNotes = () => notes.map(note => (
    <div key={note._id}>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
    </div>
  ));

  return <div>{renderNotes()}</div>;
};

export default Dashboard;