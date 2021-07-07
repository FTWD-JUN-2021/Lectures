import React from 'react';
import Pero from './Pero'

function Daughter(props) {
    return (
        <div>
            Daughter 💃🏼
            <Pero color={props.color} />
        </div>
    );
}

export default Daughter;