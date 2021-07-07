import React from 'react';
import Treat from './Treat'
function Pero(props) {
    return (
        <div>
            🐶
            <Treat color={props.color} />
        </div>
    );
}

export default Pero;