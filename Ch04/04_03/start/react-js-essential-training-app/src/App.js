import logo from './logo.svg';
import './App.css';

const [firstCity, secondCity] = ["Chicago", "Minneapolis", "St. Paul", "Des Moines"];

console.log(firstCity);
console.log(secondCity);

function App( { library }) {
  return (
    <div className="App">
      <h1>Hello Doug! Have fun with {library}!</h1>
    </div>
  );
}

export default App;
