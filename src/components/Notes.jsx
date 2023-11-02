import React from 'react';
import Info from './Info';
import NoteView from './NoteView';

const Notes = ({
  selectedNote,
  isMobile,
  display,
  setDisplay,
  createNoteBtnClick,
  setSelectedNote,
}) => {
  return (
    <React.Fragment>
      {selectedNote && selectedNote.notes ? (
        <NoteView
          id={selectedNote.id}
          name={selectedNote.name}
          color={selectedNote.color}
          notes={selectedNote.notes}
          isMobile={isMobile}
          display={display}
          setDisplay={setDisplay}
          selectedNote={selectedNote}
          setSelectedNote={setSelectedNote}
        />
      ) : (
        <Info
          createNoteBtnClick={createNoteBtnClick}
          isMobile={isMobile}
          selectedNote={selectedNote}
        />
      )}
    </React.Fragment>
  );
};

export default Notes;
