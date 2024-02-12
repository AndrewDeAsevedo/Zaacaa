// import React from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router
import Header from "../components/header";
//import patient from "./patient";
import "./exams.css";

// Temporary mock data
const data = [
  { id: 1, name: "Anom", age: 19, gender: "Male" },
  { id: 2, name: "Meghan", age: 19, gender: "Female" },
  { id: 3, name: "Subham", age: 25, gender: "Male" },
  { id: 4, name: "Subham", age: 25, gender: "Male" },
  { id: 5, name: "Subham", age: 25, gender: "Male" },
  { id: 6, name: "Subham", age: 25, gender: "Male" },
];

export default function Exams() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleClick = (patientName) => {
    const patient = data.find((p) => p.name === patientName);
    if (patient) {
      navigate(`/patient/${patient.id}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // Perform the search and update the filtered data
      const searchTermLowerCase = searchTerm.toLowerCase();
      const filteredResults = data.filter((patient) =>
        patient.name.toLowerCase().includes(searchTermLowerCase) || patient.age.toString().includes(searchTermLowerCase) ||
        patient.gender.toLowerCase() === searchTermLowerCase
      );
      setFilteredData(filteredResults);
    } else if (e.key === 'Backspace' && searchTerm === "") {
      // If Backspace is pressed and search term is empty, reset filtered data to original data
      setFilteredData(data);
    }
  };

  return (
    <>
      <Header />
      <div className="header-container">
        <h2 style={{ fontFamily: 'Josefin Sans', fontWeight: 700 }}> Exam Search: </h2>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={handleKeyPress}
          style={{ fontFamily: "Josefin Sans", fontWeight: 400, fontSize: "20px", borderWidth: '2px'}}
        />
      </div>
      <div className="Exams">
      <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap')
          </style>
          {filteredData.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((patient) => (
                <tr key={patient.id} className="table-row">
                  <td onClick={() => handleClick(patient.name)} style={{ cursor: "pointer", color: "blue" }}>
                    {patient.name}
                  </td>
                  <td>{patient.age}</td>
                  <td>{patient.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </>
  );
}