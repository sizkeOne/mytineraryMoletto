import React, {useState, useEffect} from 'react'
import "./cities.css"
import { useParams } from 'react-router-dom'

import HomeCities from '../../components/HomeCities/HomeCities'

const Cities = () =>{
  // const params = useParams()
  // console.log(params)
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
  <HomeCities data={city} />
)}
</div>
    
 
    </div>
  )
}

  


export default Cities
