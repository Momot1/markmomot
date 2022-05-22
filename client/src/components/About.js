import { useState, useEffect } from "react"

function About(){

    const [projects, setProjects] = useState(null)

    useEffect(() => {
        fetch("/projects")
        .then(resp => resp.json())
        .then(setProjects)
    }, [])

    if(!projects){
        return <>Loading</>
    }

    

    const projectElements = projects.map(project => <div><h3>{project.name}</h3><a href={`${project.project_url}`}>Project Link</a><br/><a href={`${project.github_url}`}>Github Link</a></div>)

    return (
        <div>
            <h1>About Me</h1>
            <h2 style={{ borderBottom: "1px solid black", width: "max-content" }}>Projects</h2>
            {projectElements}
        </div>
    )
}

export default About