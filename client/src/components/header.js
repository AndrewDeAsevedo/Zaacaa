import React from "react";
import "./header.css";

const handleAdminClick = async (e) => {
  e.preventDefault();
  // Ask for admin password
  const adminPassword = prompt("Please enter the admin password:")
  if (adminPassword) {
    try {
      // Send password to backend for verification
      const response = await fetch('http://localhost:9000/admin/verifyPassword', {
          method: 'POST',
          headers : {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ adminPassword }),
        })
        const data = await response.json();
      
        // checks if password is correct 
      if (data.success) {
        window.location.href = '/admin';
      } else {
        // handle log in failure
        alert("Invalid administration password");
      }
    } catch (error) {
        console.error("Error verifying password:", error)
        alert("Error verifying password")
    }
  }
};


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
            @import
            url('https://fonts.googleapis.com/css2?family=Bungee&family=Lily+Script+One&display=swap')
          </style>
          <a href="/exams">Exams</a>
          <a href="/admin" onClick={handleAdminClick}>Admin</a>
          <a href = "/contact">Contact</a>
          <a href="/home">Sign-out</a>
        </nav>
      </div>
    </header>
  );
}
