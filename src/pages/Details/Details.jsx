import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CityDetails from '../../components/cityDetails/CityDetails'
import { useParams } from 'react-router-dom'
import DetailsTinerary from '../../components/DetailsTinerary/DetailsTinerary'


const Details = () =>{

const {id} = useParams();
    const [city, setCity]= useState([])
    useEffect(() => { 
      axios( `http://localhost:3000/api/cities/${id}`)
  .then(res => setCity(res.data.response ))
  
    },  [])

const {cityName} =useParams();
    const [tineraries, setTineraries]= useState([])
    useEffect(() => { 
      axios( `http://localhost:3000/api/tineraries/`)
  .then(res => setTineraries(res.data.response ))
  
    },  [])
    
console.log(tineraries);
   console.log(city); 
 
    return (  
      <div className='containerCities'>
   <div className='cardsCities'>
 {city?.map (city =>
    < CityDetails data={city} />
 )}
  </div>
      
  {tineraries?.map (tinerary =>
    < DetailsTinerary data={tinerary} />
 )}
      </div>
    )
  }

export default Details
