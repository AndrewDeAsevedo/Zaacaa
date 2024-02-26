import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

export default function Header() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/home");
  };

  return (
    <header className="header">
      <div className="logo-and-nav">
        <div className="logo-and-name" onClick={navigateToHome} style={{ cursor: 'pointer' }}>
          <img
            src={require("./favicon.png")}
            className="App-logo"
            alt="logo"
            style={{ width: "50px", height: "auto" }}
          />
          <span className="website-name">Health Pulse</span>
        </div>
        <nav className="Nav">
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap')
          </style>
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Bungee&family=Lily+Script+One&display=swap')
          </style>
          <a href = "/contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}