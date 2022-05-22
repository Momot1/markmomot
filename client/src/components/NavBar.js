import { Link } from "react-router-dom"

function NavBar({user}){
    return (
        <nav className="nav justify-content-center nav-tabs">
            <Link to="/" className="btn btn-dark m-auto">Home</Link>
            <Link to="/about" className="btn btn-dark m-auto">About Me</Link>
            {user ? <Link to="/logout" className="btn btn-dark m-auto">Logout</Link>: <Link to="/login" className="btn btn-dark m-auto">Login</Link>}
            
            <Link to="/contact" className="btn btn-dark m-auto">Contact Me</Link>
        </nav>
    )
}

export default NavBar
