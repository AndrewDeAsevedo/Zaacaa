import React from "react";
import Header from "../components/header";
import "./exams.css";

// Temporary trash data, later we are gonna replace this with
// what we get from their API
const data = [
  { name: "Anom", age: 19, gender: "Male" },
  { name: "Megha", age: 19, gender: "Female" },
  { name: "Subham", age: 25, gender: "Male" },
];

export default function Exams() {
  return (
    <>
      <Header />
      <h2> Exams Page </h2>
      <div className="Exams">
        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.name}</td>
                <td>{val.age}</td>
                <td>{val.gender}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}
