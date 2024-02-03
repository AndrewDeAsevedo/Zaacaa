import React from "react";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <img src={require("./favicon.png")} className="Logo" alt="logo" />
      <nav className="Nav">
        <a href="/home">Home</a>
        <a href="/exams">Exams</a>
        <a href="/admin">Admin</a>
        <a href="/login">Login</a>
      </nav>
    </header>
  );
}
