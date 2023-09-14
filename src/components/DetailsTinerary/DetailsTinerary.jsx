import React from "react";

import { Card } from "react-bootstrap";
import AlwaysOpenExample from "./AcordeonTinerary/AcordeonTinerary";
import "./DetailsTinerary.css";

const DetailsTinerary = ({ data }) => {
  const { name, userName, userPhoto, duration, price, likes, tags } = data;
  console.log(data);

  return (
    <div className="TineraryContainer">
      <div className="containerTinerary">
        <h2>TYNERARY</h2>

        <div className="containerCards">
          <Card className="cardTinerary">
            <Card.Body className="textCity">
              <Card.Title>{name}</Card.Title>

              <div className="userName">
                <Card.Img
                  variant="top"
                  src={userPhoto}
                  style={{ width: "35px", height: "31px" }}
                />
                <Card.Text>{userName}</Card.Text>
              </div>

              <div className="contentTinerary">
                <Card.Text>Duration: {duration}</Card.Text>
                <Card.Text>Price: {price}</Card.Text>
                <Card.Text>Likes {likes}</Card.Text>
                <div className="hashtags">
                  <Card.Text>HashTags: {tags}</Card.Text>
                </div>
              </div>

              <AlwaysOpenExample />
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DetailsTinerary;
