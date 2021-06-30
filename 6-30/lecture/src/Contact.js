import React, { useEffect } from 'react';

function Contact(props) {

    useEffect(() => {
        console.log('Welcome to Contact Page')
    }, [])

    return (
        <div>
            Contact Page
        </div>
    );
}

export default Contact;