import React from 'react';
import Italian from './Italian'

function English() {

    let name = "Mario"
    let speaker = "Leanne"

    const translateToSpanish = () => {
        return <div>Hola {name} dice {speaker} </div>
    }
    return (
        <>
            <div>Hello {name} says {speaker}</div>
            {translateToSpanish()}
            <Italian name={name} speaker={speaker} />
        </>
    );
}


export default English;