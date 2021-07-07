import React, { useContext } from 'react';
import TheContext from './TheContext'
import { useHistory } from "react-router-dom";



function Treat(props) {

    const { setHijoColor } = useContext(TheContext)

    let history = useHistory();
    console.log(history)


    return (
        <div style={{ backgroundColor: props.color }}>
            Treat 🦴
            <button onClick={() => setHijoColor(("#" + ((1 << 24) * Math.random() | 0).toString(16)))} >Change Hijos color</button>

            <button onClick={() => history.push('/this works!')} >Home</button>
        </div>
    );
}

export default Treat;