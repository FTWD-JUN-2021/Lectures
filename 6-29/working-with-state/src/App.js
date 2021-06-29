import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import List from './List'
const sports = [
  { name: 'Football', players: 11 },
  { name: 'Cricket', players: 11 },
  { name: 'Tennis', players: 2 },
  { name: 'Soccer', players: 11 },
  { name: 'Basketball', players: 5 },
  { name: 'Hockey', players: 6 }

]




function App() {

  let [counter, setCounter] = useState(0)

  const up = () => {
    counter++
    setCounter(counter)
  }

  const down = () => {
    counter--
    setCounter(counter)
  }
  return (
    <div className="App">
      <h4>Counter using state with Hooks</h4>
      <h2>{counter}</h2>

      <button onClick={up} >Up</button>
      <button onClick={down}>Down</button>

      <List sports={sports} />


    </div>
  );
}



// let counter = 0;
// document.querySelector("button").onclick = function(){
//   counter++; 
//   document.querySelector("div").innerHTML = counter
// }

export default App;
