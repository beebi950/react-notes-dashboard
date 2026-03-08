import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";

function App() {
  return(
    <div>
      <h1>Notes Dashboard</h1>

      <NoteInput></NoteInput>
      <NoteList></NoteList>
    </div>
  );
}

export default App;