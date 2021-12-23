import React, { useState } from 'react';
import { MdOutlineAddCircleOutline } from 'react-icons/md';

function AddNote({ handleAddNote }) {
  const [newNote, setNewNote] = useState('');
  const charcterLimit = 200;
  const handleAdd = (e) => {
    if (charcterLimit - e.target.value.length >= 0) {
      setNewNote(e.target.value);
    }
  };

  const handleSubmit = () => {
    if (newNote.trim().length > 0) {
      handleAddNote(newNote);
      setNewNote('');
    }
  };

  return (
    <div className="note new">
      <textarea
        cols="30"
        rows="10"
        className="textarea"
        placeholder='Type to add note....'
        value={newNote}
        onChange={handleAdd}
      ></textarea>
      <div className="note-footer">
        <small>{charcterLimit - newNote.length} remaining</small>
        <MdOutlineAddCircleOutline
          type="button"
          className="btn"
          onClick={handleSubmit}
        ></MdOutlineAddCircleOutline>
      </div>
    </div>
  );
}

export default AddNote;
