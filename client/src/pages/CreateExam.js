// Allows you to create a new exam?
import "./createExam.css";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { useNavigate } from "react-router-dom";
import { useApi } from "../hooks/use-api";

import Header from "../components/header";

const CreateExam = () => {
  const [inputs, setInputs] = useState({});
  const [successMessage, setSuccessMessage] = useState(""); // State to control success message display
  let navigate = useNavigate();

  const onSubmit = async (e) => {
    try {
      //const response =  useApi('/admin/create/{"age": "60","sex": "F","bmi": "27.6","exams":[{"examId":"exam_1","findings":"clear lungs"},{"examId":"exam_1","findings":"swollen lungs"}}')
      const response = await fetch(
        "http://localhost:9000/admin/create/" + JSON.stringify(inputs)
      );
      // prevent empty forum submission
      if (
        !inputs.patientID ||
        !inputs.age ||
        !inputs.sex ||
        !inputs.bmi ||
        !inputs.zipcode ||
        !inputs.examID ||
        !inputs.date ||
        !inputs.keyFindings ||
        !inputs.brixiaScores ||
        !inputs.imageURL
      ) {
        // If any required field is empty, display an error message and return early
        setSuccessMessage("Please fill out all fields.");
        return;
      }

      // Handle success
      if (response.ok) {
        setSuccessMessage("Exam successfully created.");
        setInputs({
          patientID: "",
          age: "",
          sex: "",
          bmi: "",
          zipcode: "",
          examID: "",
          date: "",
          keyFindings: "",
          brixiaScores: "",
          imageURL: "",
        }); //clear inputs
      } else {
        setSuccessMessage("Failed to create exam." + JSON.stringify(inputs));
        // Handle error
      }
    } catch (error) {
      console.error("Error creating exam:", error);
    }
  };

  const onCancel = () => {
    // Logic for cancel action (e.g., clear form, navigate to another page)
    navigate("/admin"); // Example: navigating back to the homepage
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleURI = (event) => {
    const name = event.target.name;
    const value = encodeURIComponent(event.target.value);
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <>
      <Header />
      <div className="createExam">
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap')
        </style>
        <h2>Create Exam</h2>
        <div class="center-container">
          <form className="form-container">
            <div className="form-item">
              <label htmlFor="patientID">Patient ID:</label>
              <input
                type="text"
                name="patientID"
                id="patientID"
                value={inputs.patientID || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-item">
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                name="age"
                id="age"
                value={inputs.age || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-item">
              <label htmlFor="sex">Sex:</label>
              <input
                type="text"
                name="sex"
                id="sex"
                value={inputs.sex || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-item">
              <label htmlFor="bmi">BMI:</label>
              <input
                type="number"
                name="bmi"
                id="bmi"
                value={inputs.bmi || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-item">
              <label htmlFor="zipcode">Zip Code:</label>
              <input
                type="number"
                name="zipcode"
                id="zipcode"
                value={inputs.zipcode || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-item">
              <label htmlFor="examID">Exam ID:</label>
              <input
                type="text"
                name="examID"
                id="examID"
                value={inputs.examID || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-item">
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                name="date"
                id="date"
                value={inputs.date || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-item">
              <label htmlFor="keyFindings">Key Findings:</label>
              <input
                type="text"
                name="keyFindings"
                id="keyFindings"
                value={inputs.keyFindings || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-item">
              <label htmlFor="brixiaScores">Brixia Scores:</label>
              <input
                type="text"
                name="brixiaScores"
                id="brixiaScores"
                value={inputs.brixiaScores || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-item">
              <label htmlFor="imageurl">Image URL:</label>
              <input
                type="url"
                name="imageURL"
                id="imageURL"
                value={inputs.imageURL || ""}
                onChange={handleURI}
              />
            </div>
            {/* Button is placed outside the form to align it at the bottom of the page */}
          </form>
        </div>
        <div className="button-container">
          <button type="button" className="submit-button" onClick={onSubmit}>
            Add Exam
          </button>
          <button type="button" className="cancel-button" onClick={onCancel}>
            Cancel
          </button>
        </div>
        {successMessage && <p>{successMessage}</p>}
      </div>
    </>
  );
};

export default CreateExam;
