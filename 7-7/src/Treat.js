import React, { useContext } from 'react';
import TheContext from './TheContext'



function Treat(props) {

    const { setHijoColor } = useContext(TheContext)
    console.log(useContext(TheContext))

    return (
        <div style={{ backgroundColor: props.color }}>
            Treat 🦴
            <button onClick={() => setHijoColor(("#" + ((1 << 24) * Math.random() | 0).toString(16)))} >Change Hijos color</button>
        </div>
    );
}

export default Treat;