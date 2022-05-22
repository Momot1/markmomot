import { Link, useHistory } from "react-router-dom"
import { useState } from "react"

function Signup({user ,setUser}){

    const history = useHistory()

    if(user){
        history.push("/")
    }

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        birthday: "",
        name: "",
        password: "",
        password_confirmation: ""
    })

    function onSignup(e){
        e.preventDefault()

        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(user => {
            setUser(user)
            window.history.go(-2)
        })
    }

    function updateForm(e, input){
        setFormData({...formData, [input]: e.target.value})
    }


    return (
        <div>
            <form onSubmit={onSignup}>
                <label>Name: </label>
                <input type="text" placeholder="Full Name" value={formData.name} onChange={e => updateForm(e, "name")}/><br/>
                <label>Username: </label>
                <input type="text" placeholder="Username" value={formData.username} onChange={e => updateForm(e, "username")}/><br/>
                <label>Email: </label>
                <input type="email" placeholder="Email" value={formData.email} onChange={e => updateForm(e, "email")}/><br/>
                <label>Birthday: </label>
                <input type="date" placeholder="Birthday" value={formData.birthday} onChange={e => updateForm(e, "birthday")}/><br/>
                <label>Password: </label>
                <input type="password" placeholder="Password" value={formData.password} onChange={e => updateForm(e, "password")}/><br/>
                <label>Confirm Password: </label>
                <input type="password" placeholder="Confirm Password" value={formData.password_confirmation} onChange={e => updateForm(e, "password_confirmation")}/><br/>
                <button type="submit">Sign Up</button><br/>
                <Link to="/login">Already have an account? Login</Link>
            </form>
        </div>
    )
}

export default Signup