import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Contact from "./Contact";
import Signup from "./Signup";
import { useState, useEffect } from "react";
import Logout from "./Logout";
import Profile from "./Profile";
import ContactSubmittedPage from "./ContactSubmittedPage";
import "./css/app.css";
import ResetPassword from "./ResetPassword";

function App() {
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState(null);
  const [theme, setTheme] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then(setUser);
      }
    });

    fetch("/projects")
      .then((resp) => resp.json())
      .then(setProjects);
  }, []);

  function onChangeTheme() {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  }

  return (
    <div id={theme} className="app">
      <BrowserRouter>
        <NavBar user={user} onChangeTheme={onChangeTheme} theme={theme} />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About user={user} projects={projects} setProjects={setProjects} />
          </Route>
          <Route path="/login">
            <Login user={user} setUser={setUser} />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route path="/signup">
            <Signup user={user} setUser={setUser} />
          </Route>
          <Route path="/logout">
            <Logout setUser={setUser} />
          </Route>
          <Route path="/:username/profile">
            <Profile user={user} />
          </Route>
          <Route exact path="/contact/submitted=true">
            <ContactSubmittedPage />
          </Route>
          <Route path="/password/reset">
            <ResetPassword />
          </Route>
          <Route path="/">
            <h1>404 NOT FOUND</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
