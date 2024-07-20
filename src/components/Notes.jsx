// src/components/Notes.js
import React, { useState, useEffect } from 'react';
// import { firestore } from '../firebase';

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('');

    // useEffect(() => {
    //     const unsubscribe = firestore.collection('notes').onSnapshot(snapshot => {
    //         const notesData = [];
    //         snapshot.forEach(doc => notesData.push({ ...doc.data(), id: doc.id }));
    //         setNotes(notesData);
    //     });
    //
    //     return unsubscribe;
    //     return true;
    // }, []);

    const addNote = async (e) => {
        e.preventDefault();
        //await firestore.collection('notes').add({ content: newNote });
        setNotes((notes) => [...notes, { content: newNote, id: notes.length + 1 }])
        setNewNote('');
    };

    return (
        <div className="notes-container">
            <form onSubmit={addNote}>
                <input
                    type="text"
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    placeholder="New Note"
                />
                <button type="submit">Add Note</button>
            </form>
            <ul>
                {notes.map(note => (
                    <li key={note.id} className="note-card">
                        <p>{note.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Notes;
