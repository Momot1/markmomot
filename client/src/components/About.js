import DeveloperExperiences from "./DeveloperExperiences"
import DeveloperWeaknesses from "./DeveloperWeaknesses"
import Projects from "./Projects"

function About({projects, user, setProjects}){
    return (
        <div>
            <h1>About Me</h1>
            <div className="border-bottom">
               <h3>Who am I?</h3>
               <p>{"{placeholder}"}</p>
            </div>
            <div className="border-bottom">
               <h3>My experiences as a developer</h3>
               <DeveloperExperiences />
            </div>
            <div className="border-bottom">
               <h3>My weaknesses as a developer</h3>
               <DeveloperWeaknesses />
            </div>
            <h2 style={{ borderBottom: "1px solid black", width: "max-content" }}>Projects</h2>
            <div>
                <Projects projects={projects} user={user} setProjects={setProjects}/>
            </div>
            
        </div>
    )
}

export default About