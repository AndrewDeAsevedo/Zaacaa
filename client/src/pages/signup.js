import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Header from "../components/login-header";
//import axios from "axios";

export default function SignUp() {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  async function registerUser(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:9000/users/register', {
      method: 'POST',
      headers : {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      })
    })

    const data =  await response.json()
    if (data.status === 'ok') {
      // Registration successful
      console.log("Registration successful");
      alert("Registration successful. Go back to login")
      // checks error in console 
    } else if (data.error === 'Email already exists') {
      // Email already in use
      alert("Email already in use. Please use a different email.");
    } else {
      alert(data.error);
    }
    console.log(data)
  }


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
              <button class="button" type="button" onClick={registerUser}>
                Sign-up
              </button>
            </form>
          </div>
        </div>
      </body>
    </>
  );
}
