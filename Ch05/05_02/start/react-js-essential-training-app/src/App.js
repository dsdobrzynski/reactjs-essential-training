import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [colorTitle, setColorTitle] = useState('');
  const [colorHex, setColorHex] = useState('#000000');

  const submit = (e) => {
    e.preventDefault();
    alert(`${colorTitle}, ${colorHex}`);
    setColorTitle('');
    setColorHex('#000000');
  };

  return (
    <form onSubmit={submit}>
      <input
        value={colorTitle}
        placeholder='color title...'
        onChange={(event) =>
          setColorTitle(event.target.value)
        }
        type="text"
      />
      <input
        value={colorHex}
        type='color'
        onChange={(event) => setColorHex(event.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default App;
