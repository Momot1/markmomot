function Contact(){
    return (
        <div>
            <form action="https://formsubmit.co/markmomot03@gmail.com" method="POST">
                {/* Honey */}
                <input type="text" name="_honey" style={{display:'none'}}/>

                {/* Remove captcha */}
                <input type="hidden" name="_captcha" value="false"/>

                {/* Next form action */}
                <input type="hidden" name="_next" value="https://markmomot.com/contact"/>
                
                {/* Form fill out */}
                <label>Name: </label> 
                <input type="text" name="Name" placeholder="Your Name" required/><br/>
                <label>Email: </label>
                <input type="email" name="Email" placeholder="Email" required/><br/>
                <label>Phone: </label>
                <input type="tel" name="Phone" placeholder="Phone Number"/><br/>
                <label>Message: </label>
                <input type="text" name="Message" placeholder="Message" required/><br/>
                <input type="Submit" value="Send"/>
            </form>
        </div>
    )
}

export default Contact
