import {useState,useContext,useRef,useEffect} from "react";
import { NotesContext } from "../context/NotesContext";

function NoteInput(){
    const [input,setInput] =useState("");
    const {notes,setNotes}=useContext(NotesContext);

    const inputRef = useRef(null);

    useEffect(()=> {
        inputRef.current.focus();
    },[]);

    const addNote =() => {
        if(input.trim() === "" )return;

        setNotes([...notes,input]);
        setInput("");
    };

    return(
        <div>
            <input ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Write a note" 
            />

            <button onClick={addNote}>Add Note</button>

        </div>
    );
}

export default NoteInput;