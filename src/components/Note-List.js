import React from 'react';
import Note from './Note';
import Add_Note from './Add_Note';
function NoteList({list, handleAddNote,handleDeleteNode}) {
  return (
    <div className='note-list'>
      {list.map((note)=>{
        const {id, text, date} = note;
        return <Note key={id} id={id} text={text} date={date} handleDeleteNode={handleDeleteNode}/>
      })}
      <Add_Note handleAddNote= {handleAddNote} />
    </div>
  )
}

export default NoteList
