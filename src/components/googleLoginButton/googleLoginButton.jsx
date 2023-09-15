import { useGoogleLogin } from '@react-oauth/google'
import React from 'react'
import './googleLoginButton.css'
import jwtDecode from 'jwt-decode'
import axios from 'axios'
 



const GoogleLoginButton = ({fn}) => {


  const password = "Ab_123"
const Login = useGoogleLogin({

  onSuccess: async tokenResponse => {
    console.log(tokenResponse);

     const {data} = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers:{
        Authorization: "Bearer" + tokenResponse.access_token
      }
    })

    fn( {
      email: data.email,
      name:  data.given_name,
      password: data.given_name + password ,
      photo: data.picture,
      terms:true
    })

    console.log(data);
  }
})


  return (
        <button  onClick={() => Login()} className="button-with-image">
          <img src="public/googleLogin.png" alt="" />
          <span className="button-text"></span>
        </button>
      );
  
}

export default GoogleLoginButton
