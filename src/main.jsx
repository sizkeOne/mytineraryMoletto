import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
 import { Provider } from 'react-redux'
import {store} from './redux/store.js'
import { GoogleOAuthProvider } from '@react-oauth/google'

   
ReactDOM.createRoot(document.getElementById('root')).render(
     

  <Provider store={store}>

<GoogleOAuthProvider clientId='575147011863-a1b1tpept2es6bb4l0jvkm9js60jloga.apps.googleusercontent.com'>

  <App /> 
  </GoogleOAuthProvider>
    </Provider> 
     
    )
