import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Header from "../components/login-header";
import axios from "axios";

export default function SignUp() {
  let navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleClick = (e) => {
    /*  e.preventDefault();
    axios.post("", { email, password });
    .then(result => console.log(result));
    .catch(err => console.log(err));
    */
  };
  const handleClickLI = () => {
    let path = "/login";
    navigate(path);
  };

  return (
    <>
      <body>
        <Header />
        <div class="login">
          {/* <div class="login-image" style={{ backgroundImage: 'url("docs.png")' }}></div> */}
          <div class="login-container">
            <h1>Signup Page</h1>
            <form class="login-form">
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <a href="" onClick={handleClickLI}>
                Already have an account? Log in here.
              </a>
              <button class="button" type="button" onClick={handleClick}>
                Sign-up
              </button>
            </form>
          </div>
        </div>
      </body>
    </>
  );
}
