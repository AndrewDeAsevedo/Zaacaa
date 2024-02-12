// Icon is from: <a href="https://www.flaticon.com/free-icons/x-ray" title="x ray icons">X ray icons created by Flat Icons - Flaticon</a>

import React from "react";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo-and-nav">
        <div className="logo-and-name">
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
            @import url('https://fonts.googleapis.com/css2?family=Bungee&family=Lily+Script+One&display=swap')
          </style>
          <a href="/exams">Exams</a>
          <a href="/admin">Admin</a>
        </nav>
      </div>
    </header>
  );
}
