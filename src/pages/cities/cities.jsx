import React, { useState, useEffect } from 'react'
import './Cities.css'
import { Link, useParams } from 'react-router-dom'

import axios from 'axios'
import HomeCities from '../../components/HomeCities/HomeCities'
import { useDispatch, useSelector } from 'react-redux'




const Cities = () => {

  // const [cities, setCities] = useState([])
  // useEffect(() => {
  //   axios('http://localhost:3000/api/cities')
  //     .then(res => setCities(res.data.response))

  // }, [])
  // console.log(cities);



  const [searchText, setSearchText] = useState('');
  const formattedText = searchText.toLowerCase();
  const handleInputChange = event => {
    setSearchText(event.target.value);
  };
  return (

    <div className='containerCities'>
      <div className="searchBar">
        <h3>Search...</h3>
        <input className='searchTable'
          type="text"
          value={searchText}
          onChange={handleInputChange}
          placeholder="Search for an element..."
        />
        <button className="buttonSearch"><Link to={`/cities/search/${searchText}`} className="btn">Search</Link> </button>

      </div>

      <div className='cardsCities'>
        {cities?.map(city =>
          <HomeCities data={city} />
        )}
      </div>


    </div>
  )
}




export default Cities
