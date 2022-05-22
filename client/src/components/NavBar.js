import { NavLink } from "react-router-dom"
import "./css/nav.css"

function NavBar({user}){

    function logoutDropdown(){
        return (
            <div className="m-auto dropdown">
                <button class="btn btn-dark dropdown-toggle text-capitalize btn-lg" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{user.name}</button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <NavLink to={`/${user.username}/profile`} className="dropdown-item">My Profile</NavLink>
                    <NavLink to="/logout" className="dropdown-item">Logout</NavLink>
                </div>
            </div>
        )
    }

    return (
        <nav className="nav justify-content-center nav-tabs">
            <NavLink exact to="/" className="btn btn-dark m-auto btn-lg">Home</NavLink>
            <NavLink to="/about" className="btn btn-dark m-auto btn-lg">About Me</NavLink>
            <NavLink to="/contact" className="btn btn-dark m-auto btn-lg">Contact Me</NavLink>
            {!user ? <NavLink to="/login" className="btn btn-dark m-auto btn-lg">Login</NavLink> : logoutDropdown()}
        </nav>
    )
}

export default NavBar
