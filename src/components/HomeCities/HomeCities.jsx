import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeCities = ({ data }) => {
  const { photo, name, language } = data;

  console.log(data);
  return (
    <div className="cardsCities">
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={photo} />
      <Card.Body>
        <Card.Title>City: {name}</Card.Title>
        <Card.Text>Lenguage: {language}</Card.Text>
        <Link to="/citiesDetails/" className="btn">Details</Link> 
      </Card.Body>
    </Card>
    </div>
  );
  
};
export default HomeCities;
