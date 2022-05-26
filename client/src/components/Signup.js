import { Link, useHistory } from "react-router-dom"
import { useState } from "react"
import "./css/signup.css"

function Signup({user ,setUser}){

    const [errors, setErrors] = useState({errors: []})

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

        const form=e.target
        if(form.checkValidity() === false){
            e.stopPropagation()
        } else{
            fetch("/signup", {
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
                        window.history.go(-2)
                    })
                } else{
                    resp.json().then(errors => {
                        setErrors(errors)
                        setFormData({...formData, password: "", password_confirmation: ""})
                    })
                }
            })    
        }

        form.classList.add("was-validated")


        
    }

    function updateForm(e, input){
        setFormData({...formData, [input]: e.target.value})
    }

    const errorElements = errors.errors.map(error => <div key={error} className="alert alert-danger error-messages" role="alert">{error}</div>)

    return (
        <div>
            <div id="signup-div">
                <form onSubmit={onSignup} id="signup-form" noValidate>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="Name">Name</span>
                        <input type="text" placeholder="Full Name" value={formData.name} onChange={e => updateForm(e, "name")} aria-label="Name" aria-describedby="Name" className="form-control" required/><br/>    
                    </div>
                    
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="Birthday">Birthday</span>
                        <input type="date" placeholder="Birthday" value={formData.birthday} onChange={e => updateForm(e, "birthday")} aria-label="Birthday" aria-describedby="Birthday" className="form-control" required/><br/>
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="Email">Email</span>
                        <input type="email" placeholder="Email" value={formData.email} onChange={e => updateForm(e, "email")} aria-label="Email" aria-describedby="Email" className="form-control" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$" autocapitalize="none" required/><br/>    
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="Username">Username</span>
                        <input type="text" placeholder="Username" value={formData.username} onChange={e => updateForm(e, "username")} aria-label="Username" aria-describedby="Username" className="form-control" autocapitalize="none" required/><br/>    
                    </div>
                    
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="Password">Password</span>
                        <input type="password" placeholder="Password" value={formData.password} onChange={e => updateForm(e, "password")} aria-label="Password" aria-describedby="Password" className="form-control" required/><br/>    
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="Password_confirmation">Confirm Password</span>
                        <input type="password" placeholder="Confirm Password" value={formData.password_confirmation} onChange={e => updateForm(e, "password_confirmation")} aria-label="Password_confirmation" aria-describedby="Confirm Password" className="form-control" required/><br/>    
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg">Sign Up</button><br/>
                    <Link to="/login">Already have an account? Login</Link>
                </form>
            </div>    
            {errorElements.length > 0 ? errorElements : null}
        </div>
        
    )
}

export default Signup