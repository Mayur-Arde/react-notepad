import React from 'react';
import Note from './Note';
// import Add-Note from './Add-Note';
import AddNote from './AddNote';
function NoteList({list, handleAddNote,handleDeleteNode}) {
  return (
    <div className='note-list'>
      {list.map((note)=>{
        const {id, text, date} = note;
        return <Note key={id} id={id} text={text} date={date} handleDeleteNode={handleDeleteNode}/>
      })}
      <AddNote handleAddNote= {handleAddNote} />
    </div>
  )
}

export default NoteList
