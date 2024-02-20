// import React from "react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router
import Header from "../components/header";
//import patient from "./patient";
import "./exams.css";
import { useApi } from "../hooks/use-api";

export default function Exams() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const { response } = useApi("exams");
  const [examData, setExamData] = useState([]);

  // Parse the response from DB
  useEffect(() => {
    if (response) {
      try {
        const parsedData = JSON.parse(response);
        setExamData(parsedData);
        setFilteredData(parsedData);
      } catch (error) {
        console.error("Error parsing response data:", error);
      }
    }
  }, [response]);

  //const handleClick = (patientName) => {
  //  const patient = data.find((p) => p.name === patientName);
  //  if (patient) {
  //   navigate(`/patient/${patient.id}`);
  // }
  //};

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // Perform the search and update the filtered data
      const searchTermLowerCase = searchTerm.toLowerCase();
      const filteredResults = examData.filter(
        (exam) =>
          (exam.patientID &&
            exam.patientID.toLowerCase().includes(searchTermLowerCase)) ||
          (exam.age && exam.age.toString().includes(searchTerm)) ||
          (exam.sex && exam.sex.toLowerCase().includes(searchTermLowerCase)) ||
          (exam.bmi && exam.bmi.toString().includes(searchTerm)) ||
          (exam.zipcode && exam.zipcode.includes(searchTerm)) ||
          (exam.examID && exam.examID.includes(searchTerm)) ||
          (exam.date && exam.date.includes(searchTerm)) ||
          (exam.keyFindings &&
            exam.keyFindings.toLowerCase().includes(searchTermLowerCase)) ||
          (exam.brixiaScores &&
            exam.brixiaScores.toString().includes(searchTerm))
      );
      console.log("Filtered results:", filteredResults); // Debugging line
      setFilteredData(filteredResults);
    } else if (e.key === "Backspace" && searchTerm === "") {
      // If Backspace is pressed and search term is empty, reset filtered data to original data
      setFilteredData(examData);
    }
  };

  return (
    <body>
      <Header />
      <div className="header-container">
        <h2 style={{ fontFamily: "Josefin Sans", fontWeight: 700 }}>
          {" "}
          Exam Search:{" "}
        </h2>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
          style={{
            fontFamily: "Josefin Sans",
            fontWeight: 400,
            fontSize: "20px",
            borderWidth: "2px",
          }}
        />
      </div>
      <div className="Exams">
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap')
        </style>
        {examData.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Patient ID</th>
                <th>Age</th>
                <th>Sex</th>
                <th>BMI</th>
                <th>Zipcode</th>
                <th>Exam ID</th>
                <th>Date</th>
                <th>Key Findings</th>
                <th>Brixia Scores</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((exam, index) => (
                <tr key={index} className="table-row">
                  <td>
                    <a href="/pid"> {exam.patientID}</a>
                  </td>
                  <td>{exam.age}</td>
                  <td>{exam.sex}</td>
                  <td>{exam.bmi}</td>
                  <td>{exam.zipcode}</td>
                  <td>{exam.examID}</td>
                  <td>{exam.date}</td>
                  <td>{exam.keyFindings}</td>
                  <td>{exam.brixiaScores}</td>
                  <td>
                    {exam.imageURL && (
                      <img
                        src={exam.imageURL}
                        alt="N/A"
                        style={{ maxWidth: "100px", maxHeight: "100px" }}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </body>
  );
}
