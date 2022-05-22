import { Link } from "react-router-dom"
import "./css/nav.css"

function NavBar({user}){

    function logoutDropdown(){
        return (
            <div className="m-auto dropdown">
                <button class="btn btn-dark dropdown-toggle text-capitalize btn-lg link-margin" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{user.name}</button>
                <div class="dropdown-menu" aria-labelledBy="dropdownMenuButton">
                    <Link to={`/${user.username}/profile`} className="dropdown-item">My Profile</Link>
                    <Link to="/logout" className="dropdown-item">Logout</Link>
                </div>
            </div>
        )
    }

    return (
        <nav className="nav justify-content-center nav-tabs">
            <Link to="/" className="btn btn-dark m-auto btn-lg">Home</Link>
            <Link to="/about" className="btn btn-dark m-auto btn-lg">About Me</Link>
            <Link to="/contact" className="btn btn-dark m-auto btn-lg">Contact Me</Link>
            {!user ? <Link to="/login" className="btn btn-dark m-auto btn-lg">Login</Link> : logoutDropdown()}
        </nav>
    )
}

export default NavBar
