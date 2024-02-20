// import React from "react";






import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router
import Header from "../components/header";
//import patient from "./patient";
import "./exams.css";
import { useApi } from "../hooks/use-api";


export default function Exams() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const { response } = useApi('exams')
  const [examData, setExamData] = useState([])

  // Parse the response from DB 
  useEffect(() => {
    if (response) {
      try {
        const parsedData = JSON.parse(response);
        setExamData(parsedData);
        setFilteredData(parsedData)
      } catch (error) {
        console.error('Error parsing response data:', error);
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
    if (e.key === 'Enter') {
      // Perform the search and update the filtered data
      const searchTermLowerCase = searchTerm.toLowerCase();
      const filteredResults = examData.filter(exam =>
      exam.patientID.toLowerCase().includes(searchTermLowerCase) ||
      exam.age.toString().includes(searchTerm) ||
      exam.sex.toLowerCase().includes(searchTermLowerCase) ||
      exam.bmi.toString().includes(searchTerm) ||
      exam.zipcode.includes(searchTerm) ||
      exam.examID.includes(searchTerm) ||
      exam.date.includes(searchTerm) ||
      (exam.keyFindings && exam.keyFindings.toLowerCase().includes(searchTermLowerCase)) ||
      (exam.brixiaScores && exam.brixiaScores.toString().includes(searchTerm))
      );
      console.log("Filtered results:", filteredResults); // Debugging line
      setFilteredData(filteredResults);
    } else if (e.key === 'Backspace' && searchTerm === "") {
      // If Backspace is pressed and search term is empty, reset filtered data to original data
      setFilteredData(examData);
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
          onChange={(e) => setSearchTerm(e.target.value)} 
          onKeyDown={handleKeyPress}
          style={{ fontFamily: "Josefin Sans", fontWeight: 400, fontSize: "20px", borderWidth: '2px'}}
        />
      </div>
      <div className="Exams">
      <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap')
          </style>
        


    


   



{examData.length > 0 ? (
    filteredData.map((exam) =>  <Card sx={{ maxWidth: 645, padding :.1 ,margin:0.4} }>
        
        <CardActionArea>
    
             
         
          <CardMedia
            component="img"
            height="100"
            image={exam.imageURL}
            alt="patient id **"
          />
         
          
    <CardContent>
        
        <Typography gutterBottom variant="h5" component="div">name
        date of exam: {exam.date}

                 
                    
                   
                 
                    
                    
                      
        </Typography>
        <Typography variant="body2" color="text.secondary">
        pid:{exam.examID}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        sex:{exam.sex}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        bmi: {exam.bmi}
        </Typography>
        <Typography gutterBottom variant="body2" component="div" >
        exam details
        </Typography>
        <Typography variant="body2" color="text.secondary">
        key Findings:{exam.keyFindings}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        brixia score:{exam.brixiaScores}
        </Typography>
       
      </CardContent>
         
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            edit
          </Button>
          <Button size="small" color="primary">
            delete
          </Button>
        </CardActions>
      </Card>
  ) 
   
    

  ) : (
    <p>No results found</p>
  )}
</div>
</>
);
}
  