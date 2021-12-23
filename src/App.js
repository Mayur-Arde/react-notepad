import React, { useState, useEffect } from 'react';
import NoteList from './components/NoteList';
import Search from './components/Search';
import Header from './components/Header';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [list, setList] = useState([
    {
      id: uuidv4(),
      text: 'First Demo Note',
      date: '16/12/2021',
    }
  ]);

  const [search, setSearch] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  // localStorage
	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes')
		);

		if (savedNotes) {
			setList(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes',
			JSON.stringify(list)
		);
	}, [list]);

  // darkMode
  const addNote = (text) => {
    const newDate = new Date();
    const newAddNote = {
      id: uuidv4(),
      text: text,
      date: newDate.toLocaleDateString(),
    };
    setList([...list, newAddNote]);
  };

  // delete notes 
  const deleteNote = (id) => {
    const newNote = list.filter((item) => item.id !== id);
    setList(newNote);
  };

  return (
    <div className={`${darkMode && 'darkMode'}`}>
      <div className="container">
        <Header handleDarkMode={setDarkMode}></Header>
        <Search handleSearch={setSearch}></Search>
        <NoteList
          list={list.filter((note) => note.text.toLowerCase().includes(search))}
          handleAddNote={addNote}
          handleDeleteNode={deleteNote}
        ></NoteList>
      </div>
    </div>
  );
}

export default App;
