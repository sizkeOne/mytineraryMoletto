import React, { useState, useEffect } from "react";
import axios from "axios";
import CityDetails from "../../components/cityDetails/CityDetails";
import { useParams } from "react-router-dom";
import DetailsTinerary from "../../components/DetailsTinerary/DetailsTinerary";
import NoTinerary from "../../components/NoTinerary/noTinerary";
const Details = () => {
  const { id } = useParams();
  const [city, setCity] = useState([]);
  useEffect(() => {
    document.title = "Details";
    axios(`http://localhost:3000/api/cities/${id}`).then((res) =>
      setCity(res.data.response)
    );
  }, []);

  const [tineraries, setTineraries] = useState([]);
  useEffect(() => {
    axios(`http://localhost:3000/api/tineraries/city/${id}`)
      .then((res) => setTineraries(res.data.response))

      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="containerCities">
      <div className="cardsCities">
        {city?.map((city) => (
          <CityDetails key={city.id} data={city} />
        ))}
      </div>

      <div>
        {tineraries.length > 0 ? (
          tineraries.map((tinerary) => (
            <DetailsTinerary key={tinerary.id} data={tinerary} />
          ))
        ) : (
          <NoTinerary />
        )}
      </div>
    </div>
  );
};

export default Details;
