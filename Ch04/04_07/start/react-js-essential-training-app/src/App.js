import logo from './logo.svg';
import './App.css';
import { useReducer } from "react";

function App( { library }) {
  const [checked0, setChecked0] = useReducer(
    (checked0) => !checked0,
    false
  );
  return (
    <div className="App">
      <input
        type="checkbox"
        value={checked0}
        onChange={setChecked0}
      />
      <label>
        {checked0 ? "Checked" : "not checked"}
      </label>
    </div>
  );
}

export default App;
