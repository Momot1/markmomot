import { Link } from "react-router-dom"
import { useState } from "react"

function Login({user ,setUser}){
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
                resp.json().then(setUser)
            }
        })
    }

    function updateForm(e, input){
        setFormData({...formData, [input]: e.target.value})
    }

    return (
        <div>
            <form onSubmit={onLogin}>
                <label>Username: </label>
                <input type="text" value={formData.username} onChange={e => updateForm(e, "username")} required/><br/>
                <label>Password: </label>
                <input type="password" value={formData.password} onChange={e => updateForm(e, "password")} required/>
                <button type="submit" >Login</button><br/>
                <Link to="/signup">Don't have an account? Sign Up</Link>
            </form>
        </div>
    )
}

export default Login