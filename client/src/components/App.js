import React from "react";
import { BrowserRouter, Switch , Route } from "react-router-dom"
import NavBar from "./NavBar"
import Home from "./Home"
import About from "./About";
import Login from "./Login";
import Contact from "./Contact";
import Signup from "./Signup";
import {  useState, useEffect } from "react";
import Logout from "./Logout";

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me")
    .then(resp => resp.json())
    .then(setUser)
  }, [])
  

  console.log(user)

  return (
    <BrowserRouter>
      <NavBar user={user}/>

      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/login"><Login user={user} setUser={setUser}/></Route>
        <Route path="/contact"><Contact /></Route>
        <Route path="/signup"><Signup user={user} setUser={setUser}/></Route>
        <Route path="/logout"><Logout setUser={setUser}/></Route>
        <Route path="/"><h1>404 NOT FOUND</h1></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
