import { configureStore } from '@reduxjs/toolkit'
import {citiesReducer} from './reducers/cityReducers.js'

export const store = configureStore( {
  reducer: {
cities: citiesReducer
  }
})

