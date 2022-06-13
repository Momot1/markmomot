import React from "react";
import "./css/resetPassword.css";
import { useState } from "react";

export default function ResetPassword() {
  const [email, setEmail] = useState("");

  function onResetPassword(e) {
    e.preventDefault();

    const form = e.target;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      console.log(email);
    } else {
      fetch("/passwordreset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      })
        .then((resp) => resp.json())
        .then(console.log);
    }

    form.classList.add("was-validated");
  }

  return (
    <div id="reset-password-div">
      <form onSubmit={onResetPassword} id="reset-password-form" noValidate>
        <div className="input-group mb-3">
          <span className="input-group-text" id="Email">
            Email
          </span>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            aria-label="Email"
            aria-describedby="Email"
            className="form-control"
            autoCapitalize="none"
            // disabled
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
            required
          />
          <br />
          <div className="invalid-feedback">Please enter a valid email address</div>
        </div>
        <button type="submit" className="btn btn-lg btn-dark">
          Reset
        </button>
      </form>
    </div>
  );
}
