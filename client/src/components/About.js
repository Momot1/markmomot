import DeveloperExperiences from "./DeveloperExperiences";
import DeveloperWeaknesses from "./DeveloperWeaknesses";
import Projects from "./Projects";
import "./css/about.css";
import myPic from "./images/myPic.jpg";
import MainFooter from "./MainFooter";

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
            My name is Mark Momot. I am 21 years old, and am currently enrolled in Flatiron's Software Engineering bootcamp. Over the past 6 months, I
            have been learning how to build websites from the ground up. Some of my hobbies include:
          </p>
          <ul>
            <li>Football</li>
            <li>Gaming</li>
            <li>Building websites</li>
          </ul>
          <p>
            I started out having some small experience with development, learning a little bit of Python in high school. I also took an introduction
            to Java class in college. That being said, I have not used those languages in a while so I wouldn't be able to code anything with them.
            However, I learned a lot in Flatiron's software engineering bootcamp, and it's not only about the coding skills I have picked up, but
            learning what to do when I get stuck.
            <br />
            <br />
            Flatiron School has a lot of resources. They have a community with other students, they have office hours for you to schedule with your
            instructor, and they have open office hours throughout the week for anyone to come join in with any questions. That being said, I really
            felt it would be beneficial for me to try to work out any problems on my own.
            <br />
            <br />
            So the way I went about solving most of my coding problems was by trying to mess around with my code first. I would try different things,
            and a lot of the times I would get it working. If I couldn't get things working, I would go to Google. I would go through slack, docs, and
            blog posts to try to find a solution. If all those fail, then I would turn to my instructor or to my peers.
            <br />
            <br />
            After I would get a working solution, I would begin to try to refactor it to be the most optimal solution possible.
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
      <MainFooter />
    </div>
  );
}

export default About;
