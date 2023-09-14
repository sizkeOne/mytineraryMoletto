import React, { useState, useEffect } from 'react';
import './filter.css'
import { Link, useParams } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import axios from 'axios';
import HomeCities from '../HomeCities/HomeCities';
const FilterByName = () => {

  const { name } = useParams();

  const [cities, setCities] = useState([])
  useEffect(() => {
      axios(`http://localhost:3000/api/cities/search/${name}`)
      .then(res => setCities(res.data.response))

  }, [])
  console.log(cities);

  const [searchText, setSearchText] = useState('');
  const handleInputChange = event => {
    setSearchText(event.target.value);
  };
  
  return (

    <div className='containerPage'>
<div className='containerCities'>
{/* <div className="searchBar">
        <h3>Search...</h3>
        <input className='searchTable'
          type="text"
          value={searchText}
          onChange={handleInputChange}
          placeholder="Search for an element..."
        />
        <button className="buttonSearch"><Link to={`/cities/search/${searchText}`} className="btn">Search</Link> </button> */}

      {/* </div> */}
<div className='conteinerCards'>
      <div className='cardsCities'>
        
      {cities.length > 0 ? (
        cities.map((city) => (
          < HomeCities  key="city.id" data={city}/>
          ))
          ) : (
            <NotFound/>
          )}
          
      </div>
      <button className="buttom"><Link to="/cities/" className="btn">Back</Link> </button>
      

</div>
    </div>
          </div>
  )
}

export default FilterByName