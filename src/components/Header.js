import React from 'react'
import {BsToggles} from 'react-icons/bs';

function Header({handleDarkMode}) {
  return (
    <div className='header'>
      <h1>NOTES</h1>
      <BsToggles className='toggle' onClick={()=> handleDarkMode((dark)=> !dark)}/>
    </div>
  )
}

export default Header
