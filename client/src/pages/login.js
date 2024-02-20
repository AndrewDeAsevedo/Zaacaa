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
  
  return (
    <><body>
      <Header />
        <div class="login">
        {/* <div class="login-image" style={{ backgroundImage: 'url("docs.png")' }}></div> */}
        <div class="login-container">
        <h1>Login Page</h1>
        <form class="login-form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
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