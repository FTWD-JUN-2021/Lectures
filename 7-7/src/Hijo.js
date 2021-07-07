import React, { useContext } from 'react';
import TheContext from './TheContext';
function Hijo(props) {

    const { hijoColor } = useContext(TheContext)

    return (
        <div style={{ backgroundColor: hijoColor }}>
            Hijo

            <button onClick={props.changeColor} >Change Color</button>

        </div>
    );
}

export default Hijo;