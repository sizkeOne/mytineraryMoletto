import { configureStore } from '@reduxjs/toolkit'
import {citiesReducer} from './reducers/cityReducers.js'
import authReducer from './reducers/authReducers.js'

export const store = configureStore( {
  reducer: {
  cities: citiesReducer,
  authReducer
  }
})

