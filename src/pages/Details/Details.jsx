import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CityDetails from '../../components/cityDetails/CityDetails'



const Details = () =>{
  
    const [cities, setCities]= useState([])
    useEffect(() =>{
      axios('http://localhost:3000/api/cities')
  .then(res => setCities(res.data.response))
  
    },  [])
   console.log(cities);
    return (  
      <div className='containerCities'>
   <div className='cardsCities'>
  {cities?.map(city  =>
    < CityDetails data={city} />
  )}
  </div>
      
   
      </div>
    )
  }

export default Details
