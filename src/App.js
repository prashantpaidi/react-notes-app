import './App.css';
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Notes from './components/Notes';
import CreateNote from './components/CreateNote';

function App() {
  // State variables initialization
  const [noteGroups, setNoteGroups] = useState(
    localStorage.getItem('noteGroups')
      ? JSON.parse(localStorage.getItem('noteGroups'))
      : []
  );

  const [createNoteBtnClick, setCreatecreateNoteBtnClick] = useState(false);

  const [selectedNote, setSelectedNote] = useState({});

  const [newNoteGroup, setNewNoteGroup] = useState({
    id: '',
    name: '',
    notes: [],
    color: '',
  });
  console.log(Object.keys(selectedNote).length);

  return (
    <React.Fragment>
      <div className='App flex flex-row'>
        {/* Sidebar component for managing note groups */}
        <Sidebar
          setCreatecreateNoteBtnClick={setCreatecreateNoteBtnClick}
          noteGroups={noteGroups}
          setSelectedNote={setSelectedNote}
          selectedNote={selectedNote}
        />

        {/* Main content to view and interact with notes */}
        <Notes
          selectedNote={selectedNote}
          createNoteBtnClick={createNoteBtnClick}
          setSelectedNote={setSelectedNote}
        />
      </div>

      {/* Component for creating new note groups */}
      <CreateNote
        createNoteBtnClick={createNoteBtnClick}
        setCreatecreateNoteBtnClick={setCreatecreateNoteBtnClick}
        noteGroups={noteGroups}
        setNewNoteGroup={setNewNoteGroup}
        setNoteGroups={setNoteGroups}
      />
    </React.Fragment>
  );
}

export default App;
