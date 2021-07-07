import { useState, useContext } from 'react'
import logo from './logo.svg';
import './App.css';
import Hijo from './Hijo'
import Daughter from './Daughter'

import TheContext from './TheContext'



function App() {



  let [color, setColor] = useState('green')
  let [hijoColor, setHijoColor] = useState('blue')

  const changeColor = () => {
    setColor("#" + ((1 << 24) * Math.random() | 0).toString(16))
  }


  const context = {
    food: true,
    setHijoColor,
    hijoColor,
  }


  return (
    <TheContext.Provider value={context}>
      <div className="App" >

        This is the main app


      <Hijo changeColor={changeColor} />


        <Daughter color={color} />


      </div>

    </TheContext.Provider>
  );
}

export default App;
