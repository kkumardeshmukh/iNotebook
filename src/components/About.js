import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/NoteContext'

function About(props) {
 const a = useContext(noteContext)
 useEffect(() => {
  
  a.update()
 }, []);


  return (
    <div>
      this is About {a.state.name} who is in {a.state.class}
    </div>
  )
}

export default About
