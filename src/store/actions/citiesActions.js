import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadCities = createAction('load_cities', (cities ) =>{
return {
    payload: cities,
    mensaje: "test"
}
})


export const getAllCities = createAsyncThunk('getAllCities' , async () =>{
    
    let cities ;

try {
 cities = await  axios.get(`http://localhost:3000/api/cities`)
    
} catch (err) {
    console.log(err);
}
    
    return cities;
    
})




export const citiesFilter = createAsyncThunk('citiesFilter' , async ( searchString = '' ) =>{
    
    let cities ;

try {
 cities = await  axios.get(`http://localhost:3000/api/cities/search/${searchString}`)
    
} catch (err) {
    console.log(err);
}
    
    return  cities

    
})
