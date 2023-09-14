import React, {useState, useEffect} from 'react'

import { Link, useParams } from 'react-router-dom'

import axios from 'axios'
import DetailsTinerary from '../../components/DetailsTinerary/DetailsTinerary'





const Tinerary = () =>{

  const [tineraries, setTineraries]= useState([])
  useEffect(() =>{
    axios('http://localhost:3000/api/tineraries')
.then(res => setTineraries(res.data.response))

  },  [])
 console.log(tineraries);


  return (  
    
 <div className='cardsCities'>
{tineraries?.map(tinerary  =>
  <DetailsTinerary key={tinerary.id}  data={tinerary} />
)}
</div>
    
 
    
  )
}

  


export default Tinerary
