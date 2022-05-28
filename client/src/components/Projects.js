import { useState } from "react"
import AddProjectForm from "./AddProjectForm"

function Projects({projects, user, setProjects}){
    const [isClicked, setIsClicked] = useState(false)

    if(!projects){
        return <></>
    }

    const projectElements = projects.map(project => <div key={project.id}><h3>{project.name}</h3><a href={`${project.project_url}`}>Project Link</a><br/><a href={`${project.github_url}`}>Github Link</a></div>)

    function onAddProject(formData){
        fetch("/projects", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(project => {
            setIsClicked(false)
            setProjects([...projects, project])
        })
    }

    return (
        <div>
            {projectElements}
            {user && user.is_admin && !isClicked ? <button className="btn btn-dark btn-lg" onClick={() => setIsClicked(!isClicked)}>Add Project</button> : null}
            {!(user && user.is_admin && isClicked) ? null : <AddProjectForm onAddProject={onAddProject} setIsClicked={setIsClicked}/>}
        </div>
    )
}

export default Projects