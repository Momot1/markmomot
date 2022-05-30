import { NavLink, Link } from "react-router-dom"
import "./css/nav.css"
import logo from "./images/logo.png"

function NavBar({user, onChangeTheme}){ 

    function logoutDropdown(){
        return (
            <div className="dropdown">
                <button className="btn btn-dark dropdown-toggle text-capitalize btn-lg me-4" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{width: "100%"}}>{user.name}</button>
                <div className="dropdown-menu w-100 text-center" aria-labelledby="dropdownMenuButton">
                    <Link to={`/${user.username}/profile`} className="dropdown-item" data-toggle="collapse" data-target="#navbarToggleExternalContent">My Profile</Link>
                    <Link to="/logout" className="dropdown-item" data-toggle="collapse" data-target="#navbarToggleExternalContent">Logout</Link>
                </div>
            </div>
        )
    }

    function returnLinks(){
        return (
            <>
                <NavLink exact to="/" className="btn btn-dark btn-lg me-4" data-toggle="collapse" data-target="#navbarToggleExternalContent">Home</NavLink>
                <NavLink to="/about" className="btn btn-dark btn-lg me-4" data-toggle="collapse" data-target="#navbarToggleExternalContent">About Me</NavLink>
                <NavLink to="/contact" className="btn btn-dark btn-lg me-4" data-toggle="collapse" data-target="#navbarToggleExternalContent">Contact Me</NavLink>
                {!user ? <NavLink to="/login" className="btn btn-dark btn-lg me-4" data-toggle="collapse" data-target="#navbarToggleExternalContent">Login</NavLink> : logoutDropdown()}
            </>
        )
    }

    return (
        <div>
            <div className="form-check form-switch" id="toggle-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={onChangeTheme}/>
            </div>

            <a className="close-navbar-toggler collapsed" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation"></a>

            <img src={logo} alt="Logo" id="logo"/>
            
             <nav className="nav nav-tabs justify-content-end" id="desktop-nav">
             
                {returnLinks()}
            </nav>

            <nav id="mobile-nav">
                <nav className="navbar-dark bg-dark" style={{width: "min-content", position: "relative", left: "calc(100% - 80px)"}}>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
                <div className="collapse" id="navbarToggleExternalContent">
                    <div className="bg-dark p-4">
                        <div className="d-flex flex-column navbar">
                            {returnLinks()}
                        </div>
                        
                    </div>
                </div>
            </nav>
        </div>
       
    )
}

export default NavBar
