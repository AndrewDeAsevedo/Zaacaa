// Create, Update, and Delete Exams
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/header";
import "./admin.css";
import { useApi } from "../hooks/use-api";


const Admin = () => {
  const navigate = useNavigate();
  const [examData, setExamData] = useState([])
  const { response } = useApi('exams')
 
   // Parse the response from DB 
   useEffect(() => {
    if (response) {
      try {
        const parsedData = JSON.parse(response);
        setExamData(parsedData);
      } catch (error) {
        console.error('Error parsing response data:', error);
      }
    }
  }, [response]);
  
  const onCreate = async () => {
    navigate("/exam/create");
  };

  const onDelete = async (rowID) => {
    if(window.confirm("Are you sure you want to delete this exam?")) {
      // Call your API to delete the exam
      await fetch("http://localhost:9000/admin/delete/" + rowID)
      // Filter out the deleted exam from your state
      const updatedExams = examData.filter(exam => exam._id !== rowID);
      setExamData(updatedExams);
    }
  };

  const onEdit = async (rowID) => {
    if(window.confirm("Are you sure you want to edit this exam?")) {
      // Call your API to edit the exam
      navigate("/exam/edit");
      //await fetch("http://localhost:9000/admin/edit/" + rowID)
    }
  };


  return (
    <>
      <Header />
      <div className="button-container"> 
      <button type="button" className="create-button" onClick={onCreate}>
        Create Exam
      </button>
    </div>
      <div className="Exams">
      <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap')
          </style>
          {examData.length > 0 ? (
          <table>
            <thead>
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
            </thead>
            <tbody>
              {examData.map((exam) => (
                <tr key={exam._id} className="table-row"> {/* Use _id as key */}
                  <td onClick={() => navigate(`/patient/${exam.patientID}`)} style={{ cursor: "pointer", color: "blue" }}>
                    {exam.patientID}
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
                      <img src={exam.imageURL} alt="N/A" style={{ maxWidth: '100px', maxHeight: '100px' }} />
                    )}
                  </td>
                  <td>
                    <a href={`/exam/edit/${exam._id}`} onClick={() => onEdit} style={{ color: "blue" }}>Edit</a>
                  </td>
                  <td>
                    <a href="#" onClick={() => onDelete(exam._id)} style={{ color: "red" }}>Delete</a>
                  </td>
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

export default Admin;
