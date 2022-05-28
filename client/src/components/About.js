import DeveloperExperiences from "./DeveloperExperiences"
import DeveloperWeaknesses from "./DeveloperWeaknesses"
import Projects from "./Projects"
import "./css/about.css"

function About({projects, user, setProjects}){
    return (
        <div id="about-div">
            <h1 id="about-title">About Me</h1>
            <div className="border-bottom">
               <h2 className="about-h2">Who am I?</h2>
               <p>{"{placeholder}"}</p>
            </div>
            <div className="border-bottom">
               <h2 className="about-h2">My experiences as a developer</h2>
               <DeveloperExperiences />
            </div>
            <div className="border-bottom">
               <h2 className="about-h2">My weaknesses as a developer</h2>
               <DeveloperWeaknesses />
            </div>
            
            <div className="text-center">
                <h2 className="border-bottom about-h2">Projects</h2>
                <Projects projects={projects} user={user} setProjects={setProjects}/>
            </div>
            
        </div>
    )
}

export default About