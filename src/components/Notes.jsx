import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot } from 'firebase/firestore';

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('');

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'notes'), (snapshot) => {
            const notesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setNotes(notesData);
        });

        return () => unsubscribe();
    }, []);

    const handleCreateNote = async () => {
        try {
            await addDoc(collection(db, 'notes'), { content: newNote, timestamp: new Date() });
            setNewNote('');
        } catch (error) {
            console.error("Error adding note: ", error);
        }
    };

    const handleUpdateNote = async (id, content) => {
        const noteRef = doc(db, 'notes', id);
        try {
            await updateDoc(noteRef, { content, timestamp: new Date() });
        } catch (error) {
            console.error("Error updating note: ", error);
        }
    };

    const handleDeleteNote = async (id) => {
        const noteRef = doc(db, 'notes', id);
        try {
            await deleteDoc(noteRef);
        } catch (error) {
            console.error("Error deleting note: ", error);
        }
    };

    return (
        <div>
            <h1>Notes</h1>
            <input
                type="text"
                placeholder="New Note"
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
            />
            <button onClick={handleCreateNote}>Add Note</button>
            <ul>
                {notes.map(note => (
                    <li key={note.id}>
            <textarea
                value={note.content}
                onChange={(e) => handleUpdateNote(note.id, e.target.value)}
            />
                        <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Notes;
