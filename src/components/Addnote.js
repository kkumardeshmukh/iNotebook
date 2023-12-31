import React , {useState} from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/NoteContext'

function Addnote() {
    const context = useContext(noteContext)

    const {addNote} = context

    const [note, setNote] = useState({title:"",description:"",tag:"default" });

    const handleClick = (e)=>{
        e.preventDefault()

        addNote(note.title, note.description, note.tag)
    }

    const onChange = (e)=>{

        setNote({...note, [e.target.name]:e.target.value})
    }

    
    return (
        <div className='container my-3'>
            <h3> ADD YOUR NOTE</h3>

            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" onChange={onChange}/>
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleClick}>ADD NOTES</button>
            </form>
        </div>
    )
}

export default Addnote
