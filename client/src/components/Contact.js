import { useState } from "react"
import { useHistory } from "react-router-dom"
import "./css/contact.css"

function Contact(){
    const history = useHistory()

    const [formData, setFormData] = useState({
        message: "",
        email: "",
        phone_number: "",
        name: ""
    })


    function onFormSubmit(e){
        e.preventDefault()
        const form = e.target
        if(form.checkValidity() === false){
            e.preventDefault()
            e.stopPropagation()
        }

        form.classList.add("was-validated")

        if(form.checkValidity() === true){
            console.log(formData)
            fetch("/sendmessage", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData) 
            })
            .then(resp => resp.json())
            .then(() => {
                
            })
            history.push("/contact/submitted=true")
        }
    }

    function updateForm(e, input){
        setFormData({...formData, [input]: e.target.value})
    }


    return (
        <div id="contact-div">
            <form onSubmit={onFormSubmit} noValidate className="needs-validation" id="contact-form">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="Name">Name</span>
                    <input type="text" name="Name" placeholder="Your Name" id="validationCustom01" value={formData.name} onChange={e => updateForm(e, "name")} aria-label="Name" aria-describedby="Name" className="form-control" required/><br/> 
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="Email">Email</span>
                    <input type="text" name="Email" placeholder="Email" id="validationCustom02" value={formData.email} onChange={e => updateForm(e, "email")} pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$" aria-label="Email" autocapitalize="none" aria-describedby="Email" className="form-control" required/><br/> 
                    <div className="invalid-feedback">Please enter a valid email address.</div>
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="Phone Number">Phone Number</span>
                    <input type="tel" name="Phone" placeholder="Phone Number" value={formData.phone_number} onChange={e => updateForm(e, "phone_number")} aria-label="Phone Number" aria-describedby="Phone Number" className="form-control" /><br/>
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="Message">Message</span>
                    <input type="text" name="Message" placeholder="Message" id="validationCustom03" value={formData.message} onChange={e => updateForm(e, "message")} aria-label="Message" aria-describedby="Message" className="form-control" required/><br/> 
                </div>
                
                <button type="submit" className="btn btn-dark btn-lg">Send</button>
            </form>
        </div>
    )
}

export default Contact
