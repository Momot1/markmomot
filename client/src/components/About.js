function About({projects, user}){

    if(!projects){
        return <>Loading</>
    }

    

    const projectElements = projects.map(project => <div key={project.id}><h3>{project.name}</h3><a href={`${project.project_url}`}>Project Link</a><br/><a href={`${project.github_url}`}>Github Link</a></div>)

    return (
        <div>
            <h1>About Me</h1>
            <div className="border-bottom">
               <h3>Who am I?</h3>
               <p>{"{placeholder}"}</p>
            </div>
            <div className="border-bottom">
               <h3>My experiences as a developer</h3>
               <p>{"{placeholder}"}</p>
            </div>
            <div className="border-bottom">
               <h3>My weaknesses as a developer</h3>
               <p>{"{placeholder}"}</p>
            </div>
            <h2 style={{ borderBottom: "1px solid black", width: "max-content" }}>Projects</h2>
            {projectElements}
            {user && user.is_admin ? <button>Add Project</button> : null}
        </div>
    )
}

export default About