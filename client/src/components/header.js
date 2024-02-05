import React from "react";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <img src={require("./favicon.png")} className="App-logo" alt="logo" />
      <nav className="Nav">
        <a href="/home">Home</a>
        <a href="/exams">Exams</a>
        <a href="/admin">Admin</a>
        <a id="right" href="/login">
          Log-in
        </a>
      </nav>
    </header>
  );
}
