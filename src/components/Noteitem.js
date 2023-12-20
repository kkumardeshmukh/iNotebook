import React from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/NoteContext'

function Noteitem(props) {

    const context = useContext(noteContext)

    const {deleteNote} = context

    const { note } = props
    return (
        // <div>
        //  { note.title}
        //  { note.description}
        // </div>


        <>

            <div className="col-md-3">
                <div className="card my-2"  >
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description}</p>
                        <div>
                            <i className="fa-solid fa-trash-can" onClick={()=>{deleteNote(note._id)}}/>
                            <i className="fa-solid fa-pen-to-square mx-2" /></div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Noteitem
