import React, { useState, useEffect } from 'react';
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


function ProjectDetail(props) {
    console.log(props)
    const [project, setProject] = useState({})

    useEffect(() => {
        let proj = myProjects.find(eachProject => eachProject.id === props.match.params.dynamicId)
        setProject(proj)
    }, [])

    return (
        <div>
            ProjectDetail {props.match.params.dynamicId}

            <div>{project.name}</div>
            <div>{project.year}</div>
            <div>{project.technologies}</div>
            <div>{project.description}</div>

        </div>
    );
}

export default ProjectDetail;