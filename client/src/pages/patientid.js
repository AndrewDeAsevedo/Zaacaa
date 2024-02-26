import "./patientid.css";
import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { useApi } from "../hooks/use-api";
import { useParams } from "react-router-dom";

export default function PatientDetails() {
    const [filteredData, setFilteredData] = useState([]);
    const { response } = useApi("exams");
    const { id: patientIDFromURL } = useParams();

    useEffect(() => {
      if (response) {
        try {
          const parsedData = JSON.parse(response);
        setFilteredData(parsedData.filter((exam) => exam.patientID === patientIDFromURL));
        } catch (error) {
          console.error("Error parsing response data:", error);
        }
      }
    }, [response, patientIDFromURL]);

  return (
    <body><Header />
        <h2 style={{ marginTop: "120px" }}>Patient {patientIDFromURL}</h2>
        <div className="patient">
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap')
        </style>
        {filteredData.length > 0 ? (
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
                  <td>{exam.patientID}</td>
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
                      <a href={exam.imageURL} target="_blank" rel="noopener noreferrer">
                      <img src={exam.imageURL} alt="N/A" style={{ maxWidth: '100px', maxHeight: '100px' }} />
                    </a>
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