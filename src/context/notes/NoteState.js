import React from "react";
import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const s1 = {
        "name":"harry",
        "class":"5B"
    }
    
    const [state, setState] = useState(s1);
    const update = ()=>{
        setTimeout(() => {

           setState({
            "name":"krantikumar",
            "class":"5A"
           })
            
        },1500 );
    }


    return(

        <NoteContext.Provider value= {{state, update}}>

           {props.children}

        </NoteContext.Provider>

    )
}
export default NoteState;