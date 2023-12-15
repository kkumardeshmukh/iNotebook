import React from 'react'
import noteContext from '../context/notes/NoteContext'
import { useContext } from 'react'
import Noteitem from '../Noteitem'
import Addnote from './Addnote'


function Notes() {

    const context = useContext(noteContext)

    const { notes, addNote} = context
    return (
        <>
            <Addnote/>
            <div className="container">
            <div className="row my-3">
                <h3 className='my-5'>YOUR NOTES IN DATA BASE</h3>
                {notes.map((note) => {
                    return <Noteitem note= {note} key={note._id}/>
                })}
            </div>
            </div>
        </>
    )
}

export default Notes
