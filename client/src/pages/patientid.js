import "./patientid.css";
import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Header from "../components/header";
import { useApi } from "../hooks/use-api";
import { useParams } from "react-router-dom";

export default function PatientDetails() {
    const [filteredData, setFilteredData] = useState([]);
    const { response } = useApi("exams");
    const { id: patientIDFromURL } = useParams();
    const [selectedCard, setSelectedCard] = useState(null); // Track the selected card
    const [movedCardData, setMovedCardData] = useState(null); // Data for the moved card


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

    const handleCardClick = (exam) => {
      if (selectedCard === exam) {
        setSelectedCard(null); 
        setMovedCardData(null); 
      } else {
        setSelectedCard(exam);
        setMovedCardData(exam);
      }
    };

  return (
    <body><Header />
        <h2 style={{ marginTop: "120px" }}>Patient {patientIDFromURL}</h2>
        <div className="patient">
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap')
        </style>
        {filteredData.length > 0 ? (
          filteredData.map((exam) => (
            <Card
            style={{ marginTop: "120px" }}
              key={exam.examID} 
              className = "Card"
              onClick={() => handleCardClick(exam)}
            >
              <CardActionArea>
              <CardMedia
                component="div"
                style={{
                  width: '150px', 
                  height: '170px', 
                  backgroundColor: 'white', 
                  display: 'flex', 
                }}
              >
                <img
                  src={exam.imageURL}
                  alt={`Patient ID ${exam.patientID}`}
                  style={{
                    width: '100%',
                    height: 'auto',
                    margin: 'auto'
                  }}
                />
              </CardMedia>
                <CardContent>
                  <Typography 
                    gutterBottom variant="h5" 
                    component="div" 
                    style = {{height: '50px', fontSize: '15px', fontFamily: "Josefin Sans, sans-serif"}}
                  >
                    {exam.name} Date of Exam: {exam.date}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        ) : (
          <p>No results found</p>
        )}
        </div>
        {movedCardData && (
          <Card
            key={movedCardData.examID}
            className="movedCard" 
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image={movedCardData.imageURL}
                alt={`Patient ID ${movedCardData.patientID}`}
                style={{ width: '100%', height: '350', backgroundColor: 'black'}}
              />
              <CardContent
                height = "300"
              >
                  <Typography variant="body2" color="text.secondary"
                  style = {{fontFamily: "Josefin Sans, sans-serif"}}>
                    Age: {movedCardData.age}
                  </Typography>
                  <Typography variant="body2" color="text.secondary"
                  style = {{fontFamily: "Josefin Sans, sans-serif"}}>
                    Sex: {movedCardData.sex}
                  </Typography>
                  <Typography variant="body2" color="text.secondary"
                  style = {{fontFamily: "Josefin Sans, sans-serif"}}>
                    BMI: {movedCardData.bmi}
                  </Typography>
                  <Typography variant="body2" color="text.secondary"
                  style = {{fontFamily: "Josefin Sans, sans-serif"}}>
                    Zipcode: {movedCardData.zipcode}
                  </Typography>
                  <Typography variant="body2" color="text.secondary"
                  style = {{fontFamily: "Josefin Sans, sans-serif"}}>
                    Exam ID: {movedCardData.examID}
                  </Typography>
                  <Typography variant="body2" color="text.secondary"
                  style = {{fontFamily: "Josefin Sans, sans-serif"}}>
                    Key Findings: {movedCardData.keyFindings}
                  </Typography>
                  <Typography variant="body2" color="text.secondary"
                  style = {{fontFamily: "Josefin Sans, sans-serif"}}>
                    Brixia Score: {movedCardData.brixiaScores}
                  </Typography>
                </CardContent>
            </CardActionArea>
          </Card>
        )}
    </body>
  );
}