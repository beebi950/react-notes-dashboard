import { useContext,useState,useMemo } from "react";
import { NotesContext } from "../context/NotesContext";

function NotesList(){
    const {notes} =useContext(NotesContext);
    const [selected,setSelected] = useState(null);

    const totalNotes =useMemo(() => {
        return notes.length;
    },[notes]);

    return(
        <div>
            <h3>Total Notes are: {totalNotes}</h3>

            <ul>
                {notes.map((note,index) => (
                    <li 
                    key={index}
                    onClick ={() => setSelected(index)}
                    style={{
                        background: selected === index ? "pink" : "white",
                        cursor:"pointer",
                        padding:"5px",
                        margin:"5px"
                    }}>

                        {note}

                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NotesList;