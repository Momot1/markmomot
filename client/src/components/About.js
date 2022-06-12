import DeveloperExperiences from "./DeveloperExperiences";
import DeveloperWeaknesses from "./DeveloperWeaknesses";
import Projects from "./Projects";
import "./css/about.css";
import myPic from "./images/myPic.jpg";

function About({ projects, user, setProjects }) {
  return (
    <div id="about-div">
      <h1 id="about-title">About Me</h1>
      <img src={myPic} id="my-pic" alt="This is me" />
      <div>
        <h2 className="about-h2" id="who-am-i-h2">
          Who am I?
        </h2>
        <div className="dev-item-div">
          <p>
            My name is Mark Momot. I am 21 years old, and am currently enrolled
            in Flatiron's Software Engineering bootcamp.
          </p>
        </div>
      </div>
      <div>
        <h2 className="about-h2">My experiences as a developer</h2>
        <DeveloperExperiences />
      </div>
      <div>
        <h2 className="about-h2">My weaknesses as a developer</h2>
        <DeveloperWeaknesses />
      </div>

      <div className="text-center">
        <h2 className="about-h2">Projects</h2>
        <Projects projects={projects} user={user} setProjects={setProjects} />
      </div>
    </div>
  );
}

export default About;
