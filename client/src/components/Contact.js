function Contact(){
    function onFormSubmit(e){
        e.preventDefault()

        fetch("/sendmessage", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: "mark", message: "yooooooo", email: "johndoe@gmail.com"}) 
        })
        .then(resp => resp.json())
        .then(console.log)
    }


    return (
        <div>
            <h1>Please do not fill out form. Currently does not work</h1>
            <form onSubmit={onFormSubmit}>
                <label>Name: </label> 
                <input type="text" name="Name" placeholder="Your Name" required/><br/>
                <label>Email: </label>
                <input type="email" name="Email" placeholder="Email" required/><br/>
                <label>Phone: </label>
                <input type="tel" name="Phone" placeholder="Phone Number"/><br/>
                <label>Message: </label>
                <input type="text" name="Message" placeholder="Message" required/><br/>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Contact
