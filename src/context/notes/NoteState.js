import React from "react";
import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []


  const [notes, setNotes] = useState(notesInitial);


  // get all note
  const getNotes = async() => {


    //API call

    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU3ODJmZTRiMTFmMGY0NTkxYTgxNmIxIn0sImlhdCI6MTcwMjM3OTA2Mn0.YLL6Yaq6rTjKqMtYs21HrZfHEh9-h-9FIWn2z1THNLc"
      }
    });
   

   const json = await response.json()
  console.log(json)
setNotes(json)

  }







  // Add a note
  const addNote = async(title, description, tag) => {


    //API call

    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU3ODJmZTRiMTFmMGY0NTkxYTgxNmIxIn0sImlhdCI6MTcwMjM3OTA2Mn0.YLL6Yaq6rTjKqMtYs21HrZfHEh9-h-9FIWn2z1THNLc"
      },
      body: JSON.stringify({title, description, tag})
    });
   

    const note = {
      "_id": "65796b60881f1ae4bce1edc0",
      "user": "65782fe4b11f0f4591a816b1",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-12-13T08:29:20.846Z",
      "__v": 0
    }

    setNotes(notes.concat(note))


  }

  // Delete a note 

  const deleteNote = (id) => {

    console.log("deleting a note with the id" + id)
    const newNotes = notes.filter((note) => { return note._id !== id })

    setNotes(newNotes)


  }


  // Edit a note 

  const editNote = async (id, title, description, tag) => {

    //API call

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU3ODJmZTRiMTFmMGY0NTkxYTgxNmIxIn0sImlhdCI6MTcwMjM3OTA2Mn0.YLL6Yaq6rTjKqMtYs21HrZfHEh9-h-9FIWn2z1THNLc"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = response.json()


    //logic to edit in client 

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];

      if (element._id === id) {
        element.title = title
        element.description = description
        element.tag = tag
      }

    }
  }


  return (

    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>

      {props.children}

    </NoteContext.Provider>

  )
}
export default NoteState;