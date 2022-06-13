import { Link } from "react-router-dom";
import "./css/home.css";
import MainFooter from "./MainFooter";

function Home() {
  return (
    <div className="justify-content-center text-center">
      <h1 id="home-title">Welcome to my webpage</h1>
      <div className="border-bottom">
        <h3 id="home-h3">What is this site about?</h3>
        <p>{"{placeholder}"}</p>
      </div>
      {window.innerHeight < 208 ? <MainFooter /> : null}
    </div>
  );
}

export default Home;
