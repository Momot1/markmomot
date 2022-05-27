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
import Profile from "./Profile";
import ContactSubmittedPage from "./ContactSubmittedPage";

function App() {
  const [user, setUser] = useState(null)
  const [projects, setProjects] = useState(null)

  useEffect(() => {
    fetch("/me")
    .then(resp => {
      if(resp.ok){
        resp.json().then(setUser)
      }
    })

    fetch("/projects")
        .then(resp => resp.json())
        .then(setProjects)
  }, [])

  return (
    <BrowserRouter>
      <NavBar user={user}/>

      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/about"><About user={user} projects={projects} setProjects={setProjects}/></Route>
        <Route path="/login"><Login user={user} setUser={setUser}/></Route>
        <Route exact path="/contact"><Contact /></Route>
        <Route path="/signup"><Signup user={user} setUser={setUser}/></Route>
        <Route path="/logout"><Logout setUser={setUser}/></Route>
        <Route path="/:username/profile"><Profile user={user}/></Route>
        <Route exact path="/contact/submitted=true"><ContactSubmittedPage /></Route>
        <Route path="/"><h1>404 NOT FOUND</h1></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
