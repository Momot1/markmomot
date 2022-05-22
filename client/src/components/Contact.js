function Contact(){
    return (
        <div>
            <form action="https://formsubmit.co/255eb7a90da92a9c7a853d9363b8dcb4" method="POST">
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
