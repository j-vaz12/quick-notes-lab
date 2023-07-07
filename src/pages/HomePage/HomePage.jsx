import {useState} from 'react';

export default function HomePage( {notes, addNote} ) {
  // console.log(notes)
  const [newNote, setNewNote] = useState({
    text: ''
  })
  
  function handelChange(evt) {
    const newNoteData = {...newNote, [evt.target.name]: evt.target.value};
    setNewNote(newNoteData);
  }

  function handelAddNote(evt) {
    evt.preventDefault();
    addNote(newNote);
    setNewNote({text: ''})
  }
  return (
    <>
      <h1>Home Page</h1>
      <form onSubmit={handelAddNote}>
        <label> Notes</label>
        <input name="text" value={newNote.text} onChange={handelChange}/>
        <button>Add Note</button>
      </form>
      
      <ul>

      {notes.map(n => (<li key={n._id} >{n.text}</li>))}
      </ul>
    </>
  );

  }
