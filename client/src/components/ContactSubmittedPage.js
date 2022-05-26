

function ContactSubmittedPage(){

    setTimeout(() => {
        window.history.go(-2)
    }, 3000)

    return (
        <div>
            <h1>Thank you for submitting the form. I will be in touch with you soon.</h1>
            <p>If you are not automatically redirected in 3 seconds, please click <a href="/">here</a></p>
        </div>
    )
}

export default ContactSubmittedPage