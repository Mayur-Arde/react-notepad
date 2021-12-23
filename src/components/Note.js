import React from 'react';
import {MdDeleteForever} from 'react-icons/md';

function Note({id, text, date,handleDeleteNode}) {
  return (
    <div className='note'>
      <span>{text}</span>
      <div className='note-footer'>
        <small>{date}</small>
        <MdDeleteForever onClick={()=> handleDeleteNode(id)} className='delete-note'></MdDeleteForever>
      </div>
    </div>
  )
}

export default Note
