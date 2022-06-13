import { Link } from "react-router-dom";
import "./css/home.css";
import MainFooter from "./MainFooter";

function Home() {
  return (
    <div>
      <h1 id="home-title" className="text-center">
        Welcome to my webpage
      </h1>
      <h3 id="home-h3" className="text-center">
        What is this site about?
      </h3>
      <div className="border-bottom" id="home-info-div">
        <p>
          This website is meant to demonstrate my abilities as a software
          developer. You can read all about me by going to the{" "}
          <Link to="/about">about me</Link> page. But to give a quick summary
          about myself, over the past 40 weeks or so, I have been learning how
          to develop full stack web applications.
        </p>
        <h4>
          DISCLAIMER: This website is still under development. I am currently in
          school, so I spend my Sunday's working on my personal website, and
          Monday-Saturday working through school. As a result, there might be
          some bugs and some incompleted features and pages.
        </h4>
      </div>
      {window.innerHeight < 208 ? <MainFooter /> : null}
    </div>
  );
}

export default Home;
