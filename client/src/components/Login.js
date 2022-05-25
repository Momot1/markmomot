import { Link, useHistory } from "react-router-dom"
import { useState } from "react"
import "./css/login.css"

function Login({user ,setUser}){
    const history = useHistory()

    if(user){
        history.push("/")
    }

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    function onLogin(e){
        e.preventDefault()

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(resp => {
            if(resp.ok){
                resp.json().then(user => {
                    setUser(user)
                    window.history.go(-1)
                })
            }
        })
    }

    function updateForm(e, input){
        setFormData({...formData, [input]: e.target.value})
    }

    return (
        <div id="login-div">
            <form onSubmit={onLogin} id="login-form">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="Username">Username:</span>
                    </div>
                    <input type="text" value={formData.username} onChange={e => updateForm(e, "username")} placeholder="Username" aria-label="Username:" aria-describedby="Username" className="form-control" required/><br/>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="Password">Password</span>
                    </div>
                    <input type="password" value={formData.password} onChange={e => updateForm(e, "password")} placeholder="Password" aria-label="Password" aria-describedby="Password" className="form-control" required/>
                </div>
                

                <button type="submit" className="btn btn-dark btn-lg">Login</button><br/>
                <Link to="/signup" >Don't have an account? Sign Up</Link>    
                
                
                
            </form>
        </div>
    )

}

export default Login