import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './HomeCities.css'
const HomeCities = ({ data }) => {
  const { photo, name, language } = data;

  console.log(data);
  return (
    <div className="cardsCities">
     
    <Card style={{ width: "18rem", height:"20rem", borderRadius:"0px 0px 25px 25px" }}>
      <Card.Img className="photoCard" variant="top" src={photo} style={{ width: "17.9rem", height:"180px" }} />
      <Card.Body> 
      <div className="cardText">
        <Card.Title>City: {name}</Card.Title>
        <Card.Text>Lenguage: {language}</Card.Text>
        <button className="btnCard"><Link to={`/citiesDetails/${data._id}`} className="btn">Details</Link> </button>
        </div>
      </Card.Body>
    </Card>
   
    </div>  
  );
  
};
export default HomeCities;
