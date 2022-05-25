function Home(){
    return (
        <div className="justify-content-center text-center">
           <h1 className="border-bottom">Welcome to my webpage</h1>
           <div className="border-bottom">
               <h3>What is this site about?</h3>
               <p>{"{placeholder}"}</p>
           </div>
           <footer>
                <h6>Feel free to reach out to me by submitting the <a href="/contact">contact me</a> form.</h6>

                <a href="#top">Back to top</a>
           </footer>
        </div>
    )
}

export default Home