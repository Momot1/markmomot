import { Link } from "react-router-dom"
import "./css/home.css"

function Home(){
    return (
        <div className="justify-content-center text-center">
           <h1 id="home-title">Welcome to my webpage</h1>
           <div className="border-bottom">
               <h3 id="home-h3">What is this site about?</h3>
               <p>{"{placeholder}"}</p>
           </div>
           <footer>
                <h6>Feel free to reach out to me by submitting the <Link to="/contact">contact me</Link> form.</h6>

                <a href="#top">Back to top</a>
           </footer>
        </div>
    )
}

export default Home