import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router
import Header from "../components/header";
//import patient from "./patient";
import "./exams.css";

// Temporary mock data
const data = [
  { id: 1, name: "Anom", age: 19, gender: "Male" },
  { id: 2, name: "Megha", age: 19, gender: "Female" },
  { id: 3, name: "Subham", age: 25, gender: "Male" },
  { id: 4, name: "Subham", age: 25, gender: "Male" },
  { id: 5, name: "Subham", age: 25, gender: "Male" },
  { id: 6, name: "Subham", age: 25, gender: "Male" },
];

export default function Exams() {
  const navigate = useNavigate();

  const handleClick = (patientName) => {
    const patient = data.find((p) => p.name === patientName);
    if (patient) {
      navigate(`/patient/${patient.id}`);
    }
  };

  return (
    <>
      <Header />
      <h2> Exams Page </h2>
      <div className="Exams">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {data.map((patient) => (
              <tr key={patient.id}>
                {/* Make the name clickable */}
                <td onClick={() => handleClick(patient.name)} style={{ cursor: "pointer" }}>
                  {patient.name}
                </td>
                <td>{patient.age}</td>
                <td>{patient.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
