import React from "react";
import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "657865f53f24cef357d371d9",
          "user": "65782fe4b11f0f4591a816b1",
          "title": "my note",
          "description": "this is my note 1",
          "tag": "personal",
          "date": "2023-12-12T13:53:57.923Z",
          "__v": 0
        },
        {
          "_id": "657865f63f24cef357d371db",
          "user": "65782fe4b11f0f4591a816b1",
          "title": "my note",
          "description": "this is my note 1",
          "tag": "personal",
          "date": "2023-12-12T13:53:58.100Z",
          "__v": 0
        },
        {
          "_id": "657865f63f24cef357d371dd",
          "user": "65782fe4b11f0f4591a816b1",
          "title": "my note",
          "description": "this is my note 1",
          "tag": "personal",
          "date": "2023-12-12T13:53:58.258Z",
          "__v": 0
        },
        {
          "_id": "657865f63f24cef357d371df",
          "user": "65782fe4b11f0f4591a816b1",
          "title": "my note",
          "description": "this is my note 1",
          "tag": "personal",
          "date": "2023-12-12T13:53:58.783Z",
          "__v": 0
        },
        {
          "_id": "65796b60881f1ae4bce1edc0",
          "user": "65782fe4b11f0f4591a816b1",
          "title": "my note",
          "description": "this is my note 1",
          "tag": "personal",
          "date": "2023-12-13T08:29:20.846Z",
          "__v": 0
        }
      ]


      const [notes, setNotes] = useState(notesInitial);

    // Add a note
    const addNote = (title, description, tag)=>{

        const note= {
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

    const deleteNote = ()=>{

        
    }


    // Edit a note 

    const editNote = ()=>{

        
    }


    return(

        <NoteContext.Provider value= {{notes, addNote, deleteNote, editNote}}>

           {props.children}

        </NoteContext.Provider>

    )
}
export default NoteState;