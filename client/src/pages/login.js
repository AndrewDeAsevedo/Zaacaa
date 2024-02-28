import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Header from "../components/login-header";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  async function loginUser() {
    const response = await fetch("http://localhost:9000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    // checks if data can be retrieved
    if (data.status === "ok") {
      navigate("/exams");
    } else {
      alert(data.error || "Invalid username or password");
    }
  }
  const handleClickSU = () => {
    navigate("/signup");
  };

  return (
    <>
      <body>
        <Header />
        <div class="login">
          <div class="login-container">
            <h1>Login Page</h1>
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
              <a href="" onClick={handleClickSU}>
                Don't have an account? Sign up here.
              </a>
              <button class="button" type="button" onClick={loginUser}>
                Log-in
              </button>
            </form>
          </div>
        </div>
      </body>
    </>
  );
}
