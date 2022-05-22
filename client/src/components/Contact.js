import { useState } from "react"

function Contact(){
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
            .then(console.log)
        }
    }

    function updateForm(e, input){
        setFormData({...formData, [input]: e.target.value})
    }


    return (
        <div>
            <form onSubmit={onFormSubmit} noValidate className="needs-validation">
                <div>
                    <label htmlFor="validationCustom01">Name: </label>
                    <input type="text" name="Name" placeholder="Your Name" id="validationCustom01" value={formData.name} onChange={e => updateForm(e, "name")} required/><br/> 
                    <div className="invalid-feedback">Please enter your name.</div>
                </div>
                <div>
                    <label htmlFor="validationCustom02">Email: </label>
                    <input type="text" name="Email" placeholder="Email" id="validationCustom02" value={formData.email} onChange={e => updateForm(e, "email")} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/><br/> 
                    <div className="invalid-feedback">Please enter a valid email address.</div>
                </div>
                <div>
                    <label>Phone: </label>
                    <input type="tel" name="Phone" placeholder="Phone Number" value={formData.phone_number} onChange={e => updateForm(e, "phone_number")} /><br/>
                </div>
                <div>
                    <label htmlFor="validationCustom03">Message: </label>
                    <input type="text" name="Message" placeholder="Message" id="validationCustom03" value={formData.message} onChange={e => updateForm(e, "message")} required/><br/> 
                    <div className="invalid-feedback">Please enter a message.</div>
                </div>
                
                <button type="submit" >Send</button>
            </form>
        </div>
    )
}

export default Contact
