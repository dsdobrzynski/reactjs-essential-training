import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App( { library }) {
  const [emotion, setEmotion] = useState("excited");
  
  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("blah")}>
        blah
      </button>
      <button onClick={() => setEmotion("frustrated")}>
        frustrated
      </button>
    </div>
  );
}

export default App;
