import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App( { library }) {
  const [emotion0, setEmotion0] = useState("excited");
  const [emotion1, setEmotion1] = useState("exhausted");
  
  useEffect(() => {
    console.log(`It's ${emotion0} right now`);
  }, [emotion0]);

  useEffect(() => {
    console.log(`It's ${emotion1} right now`);
  }, [emotion1]);

  return (
    <div className="App">
      <h1>Current emotion is {emotion0}</h1>
      <button onClick={() => setEmotion0("blah")}>
        blah
      </button>
      <button onClick={() => setEmotion0("frustrated")}>
        frustrated
      </button>
      <h2>
        Current secondary emotion is {emotion1}.
      </h2>
      <button onClick={() => setEmotion1("thankful")}>
        thankful
      </button>
    </div>
  );
}

export default App;
