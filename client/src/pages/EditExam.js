// Allows you to create a new exam?
//import "./createExam.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useApi } from "../hooks/use-api";

import Header from "../components/header";

const EditExam = () => {
  const [inputs, setInputs] = useState({});
  const [successMessage, setSuccessMessage] = useState(""); // State to control success message display
  const { _id } = useParams(); // Access _id from URL params
  let navigate = useNavigate();
    useEffect(() => {
        const fetchExamDetails = async () => {
        // Replace the URL with your actual endpoint to fetch an exam by _id
        try {
            const response = await fetch(`http://localhost:9000/get/${_id}`);
            if (response.ok) {
                const examDetails = await response.json();    
                setInputs(examDetails); // Populate form fields with fetched exam details
            }
        } catch (error) {
            console.error("Error fetching exam details:", error)
        }
        }
        fetchExamDetails();
        }, [_id]); // This will call fetchExamDetails when the component mounts or _id changes
        

    const onEdit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        const newData = {...inputs}; // makes a copy of inputs
        delete newData._id; // Remove the _id field if present
        try {
            const response = await fetch(`http://localhost:9000/admin/edit/${_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newData) // Send the updated exam details as JSON
            });
    
            if (response.ok) {
                //const data = await response.json(); 
                setSuccessMessage("Exam successfully updated.");
                // Optionally navigate away or refresh data
            } else {
                const errorData = await response.text();
                setSuccessMessage(`Exam update failed.: ${errorData}`);
            }
        } catch (error) {
            setSuccessMessage("Error updating exam.");
        }
    };
      

  const onCancel = () => {
    // Logic for cancel action (e.g., clear form, navigate to another page)
    navigate("/admin"); // Example: navigating back to the homepage
  };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleURI = (event) => {
        const name = event.target.name;
        const value = encodeURI(event.target.value);
        setInputs(values => ({...values, [name]: value}))
    }

    return (
        <div className="EditExam">
            <h2>Edit Exam</h2>
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
            <div className="button-container">
            <button type="submit" className="submit-button" onClick={onEdit}>Edit Exam</button>
                <button type="button" className="cancel-button" onClick={onCancel}>Cancel</button>
            </div>
            {successMessage && <p>{successMessage}</p>}
        </div>
    );
    }

export default EditExam