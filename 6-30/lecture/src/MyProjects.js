import React from 'react';
import { Link } from 'react-router-dom'
const myProjects = [
    {
        id: "1a",
        name: "The Frogger Clone",
        year: 2017,
        technologies: "JavaScript, jQuery",
        description: "The first project game clone."
    },
    {
        id: "2b",
        name: "iTravel",
        year: 2017,
        technologies: "Mongo DB, ExpressJS, NodeJS, JavaScript, HTML, CSS",
        description: "Web App that allows logged in users to share their experiences about travel destinations."
    },
    {
        id: "3c",
        name: "The Plan",
        year: 2017,
        technologies: "Mongo DB, ExpressJS, Angular2, NodeJS, JavaScript, HTML, CSS",
        description: "Web App that allows logged in users to plan your next activity with your friends or business partners."
    },

]


function MyProjects(props) {

    const ShowProjects = () => {
        return myProjects.map(eachProject => {
            return (
                <li>
                    <Link to={`/project/${eachProject.id}`}>{eachProject.name}</Link>
                </li>
            )
        })
    }

    return (
        <div>
            Here are my Projects
            <ShowProjects />
        </div>
    );
}

export default MyProjects;