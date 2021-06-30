import React, { useEffect } from 'react';

function About(props) {
    useEffect(() => {
        console.log('Welcome to About Page')
    }, [])
    return (
        <div>
            About Page
        </div>
    );
}

export default About;