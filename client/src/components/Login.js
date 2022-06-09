import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import "./css/login.css";

function Login({ user, setUser }) {
  const history = useHistory();
  const [error, setError] = useState(null);

  if (user) {
    history.push("/");
  }

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function onLogin(e) {
    e.preventDefault();
    const form = e.target;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }

    form.classList.add("was-validated");

    if (form.checkValidity() === true) {
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((resp) => {
        if (resp.ok) {
          resp.json().then((user) => {
            setUser(user);
            history.goBack();
          });
        } else {
          resp.json().then((error) => {
            setError(error);
            setFormData({ ...formData, password: "" });
          });
        }
      });
    }
  }

  function updateForm(e, input) {
    setFormData({ ...formData, [input]: e.target.value });
  }

  return (
    <div>
      <div id="login-div">
        <form
          onSubmit={onLogin}
          id="login-form"
          noValidate
          className="needs-validation"
        >
          <div className="input-group mb-3">
            <span className="input-group-text" id="Username">
              Username
            </span>
            <input
              type="text"
              value={formData.username}
              onChange={(e) => updateForm(e, "username")}
              placeholder="Username"
              aria-label="Username"
              aria-describedby="Username"
              className="form-control"
              autoCapitalize="none"
              required
            />
            <br />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="Password">
              Password
            </span>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => updateForm(e, "password")}
              placeholder="Password"
              aria-label="Password"
              aria-describedby="Password"
              className="form-control"
              required
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg">
            Login
          </button>
          <br />
          <Link to="/signup">Don't have an account? Sign Up</Link>
          <br />
          <Link to="/password/reset">Forgot your password?</Link>
        </form>
      </div>
      {error ? (
        <div className="alert alert-danger" id="error-message">
          {error.error}
        </div>
      ) : null}
    </div>
  );
}

export default Login;
