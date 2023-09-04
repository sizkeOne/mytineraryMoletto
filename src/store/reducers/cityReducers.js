import { createReducer } from "@reduxjs/toolkit";
import { citiesFilter, getAllCities } from '../actions/citiesActions'


const initialState = {
    cities: [],
    detail: [],

}

export const citiesReducer = createReducer(initialState, (builder) =>{
    builder 
        .addCase(getAllCities.fulfilled, (state, action) => {
            return {
                ...state,
                cities: action.payload.cities

            }
        }

        )
        .addCase(citiesFilter.fulfilled, (state, action) => {
            return {
                ...state,
                cities: action.payload.cities
            }
        })



    }
)
    
