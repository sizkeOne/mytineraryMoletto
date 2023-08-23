import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CityDetails = ({ data }) => {
  const { photo, name, language, population } = data;

  console.log(data);
  return (
    <div className="cardsCities">
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={photo} />
      <Card.Body>
        <Card.Title>Name City: {name}</Card.Title>
      
        <Card.Title>Text</Card.Title>
        <Card.Text>In {name} the main language is {language}</Card.Text>
        <Card.Title>The total population are {population}</Card.Title>
        <Link to="/cities/" className="btn">Back</Link> 
    </Card.Body>
    </Card>
    </div>
  );
  
};
export default CityDetails;
