import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './cityDetails.css'
import { useState } from "react";

const CityDetails = ({ data }) => {
  const { photo, name, language, population, description, country } = data;

  console.log(data);
  return (
    <div className="cardsCities">
      <div className="detailsContainer"> 
      <div >
      <Card className="cardDetails">
        <Card.Img variant="top" src={photo}  />
        <Card.Body className="textCityCard">
          <Card.Title>Name City: {name}</Card.Title>

        
          <Card.Text>Country: {country}</Card.Text>
          <Card.Text>In {name} the main language is {language}</Card.Text>
          <Card.Text>{description}</Card.Text>
          <Card.Title>The total population are {population}</Card.Title>
           </Card.Body>
      </Card>
      </div>
      <button className="buttom"><Link to="/cities/" className="btn">Back</Link> </button>
      </div>
   
    </div>
    
  );

};
export default CityDetails;
