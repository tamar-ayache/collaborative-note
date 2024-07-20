import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import "../App.css";

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('');
    const [versions, setVersions] = useState({});
    const [showVersions, setShowVersions] = useState(null);

    const fetchNotes = async () => {
        const notesSnapshot = await getDocs(collection(db, 'notes'));
        const notesList = notesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setNotes(notesList);
    };

    const fetchVersions = async (noteId) => {
        const versionsQuery = query(collection(db, `notes/${noteId}/versions`), orderBy('createdAt', 'desc'));
        const versionsSnapshot = await getDocs(versionsQuery);
        const versionsList = versionsSnapshot.docs.map(doc => doc.data());
        setVersions(prev => ({ ...prev, [noteId]: versionsList }));
    };

    const addNote = async () => {
        const noteDoc = await addDoc(collection(db, 'notes'), { text: newNote, createdAt: serverTimestamp() });
        setNewNote('');
        await addDoc(collection(db, `notes/${noteDoc.id}/versions`), { text: newNote, createdAt: serverTimestamp() });
        fetchNotes();
    };

    const deleteNote = async (id) => {
        const noteDoc = doc(db, 'notes', id);
        await deleteDoc(noteDoc);
        fetchNotes();
    };

    const editNote = async (id, newText) => {
        const noteDoc = doc(db, 'notes', id);
        await updateDoc(noteDoc, { text: newText });
        await addDoc(collection(db, `notes/${id}/versions`), { text: newText, createdAt: serverTimestamp() });
        fetchNotes();
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    return (
        <div className="container">
            <h1>Notes</h1>
            <div className="note-input">
                <input value={newNote} onChange={(e) => setNewNote(e.target.value)} placeholder="Add a note" />
                <button onClick={addNote}>Add Note</button>
            </div>
            <ul className="notes-list">
                {notes.map(note => (
                    <li key={note.id}>
                        <input value={note.text} onChange={(e) => editNote(note.id, e.target.value)} />
                        <div>
                            <button onClick={() => deleteNote(note.id)}>Delete</button>
                            <button className="show-versions" onClick={() => {
                                setShowVersions(note.id === showVersions ? null : note.id);
                                if (note.id !== showVersions) fetchVersions(note.id);
                            }}>
                                {note.id === showVersions ? 'Hide Versions' : 'Show Versions'}
                            </button>
                        </div>
                        {note.id === showVersions && (
                            <div>
                                {versions[note.id]?.map((version, index) => (
                                    <div key={index}>
                                        <span>{version.text} - {version.createdAt?.toDate().toLocaleString()}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Notes;
