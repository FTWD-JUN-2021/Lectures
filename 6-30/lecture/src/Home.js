import React, { useState, useEffect } from 'react';

function Home(props) {

    let [count, setCount] = useState(0)

    useEffect(() => {
        console.log('Welcome to Home Page')
    }, [])

    return (
        <div>
            Home Page {count}
            <button onClick={() => setCount(++count)}>Increment</button>
            <SomethingInHomeHasChange count={count} />
        </div>
    );
}



function SomethingInHomeHasChange({ count }) {
    useEffect(() => {
        console.log('Welcome to Something Page')

    }, [count])


    return (
        <div>Something {count}</div>
    )

}

export default Home;