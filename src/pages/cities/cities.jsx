import React, { useState, useEffect } from 'react'
import './Cities.css'
import { Link, useParams } from 'react-router-dom'

import axios from 'axios'
import HomeCities from '../../components/HomeCities/HomeCities'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCities } from '../../redux/actions/citiesActions'




const Cities = () => {


  const {cities} = useSelector( (store) => store.cities)  
const dispatch = useDispatch()

  useEffect(() => {
    document.title = "Cities"
    dispatch(getAllCities())
        }, [])

        console.log(cities);
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
          <HomeCities key={city.id} data={city} />
        )}
      </div>


    </div>
  )
}




export default Cities
