import logo from './logo.svg';
import './App.css';
import { useRef } from "react";

function App() {
  const colorTitle = useRef();
  const colorHex = useRef();

  const submit = (e) => {
    e.preventDefault();
    const currentColorTitle = colorTitle.current.value;
    const currentColorHex = colorHex.current.value;
    alert(`${currentColorTitle}, ${currentColorHex}`);
    colorTitle.current.value = '';
    colorHex.current.value = '';
  };

  return (
    <form onSubmit={submit}>
      <input
        ref={colorTitle}
        type="text"
        placeholder='color title...'
      />
      <input
        ref={colorHex}
        type='color'
      />
      <button>Add</button>
    </form>
  );
}

export default App;
