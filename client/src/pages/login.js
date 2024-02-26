import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Header from "../components/login-header";

export default function Login() {
  let navigate = useNavigate();
  const handleClick = () => {
    let path = "/exams";
    navigate(path);
  };
  const handleClickSU = () => {
    let path = "/signup";
    navigate(path);
  };

  return (
    <>
      <body>
        <Header />
        <div class="login">
          <div class="login-container">
            <h1>Login Page</h1>
            <form class="login-form">
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <a href="" onClick={handleClickSU}>
                Don't have an account? Sign up here.
              </a>
              <button class="button" type="button" onClick={handleClick}>
                Log-in
              </button>
            </form>
          </div>
        </div>
      </body>
    </>
  );
}
