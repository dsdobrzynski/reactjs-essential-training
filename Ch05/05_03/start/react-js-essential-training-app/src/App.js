import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return [
    {
      value,
      onChange: (e) => setValue(e.target.value)
    },
    () => setValue(initialValue)
  ]
}

function App() {
  const [colorTitleProps, resetColorTitle] = useInput('');
  const [colorHexProps, resetColorHex] = useState('#000000');

  const submit = (e) => {
    e.preventDefault();
    alert(`${colorTitleProps.value}, ${colorHexProps.value}`);
    resetColorTitle();
    resetColorHex();
  };

  return (
    <form onSubmit={submit}>
      <input
        {...colorTitleProps}
        placeholder='color title...'
        type="text"
      />
      <input
        {...colorHexProps}
        type='color'
      />
      <button>Add</button>
    </form>
  );
}

export default App;
