import { useGoogleLogin } from '@react-oauth/google'
import React from 'react'
import './googleLoginButton.css'

const googleLoginButton = () => {
  return (
 
    


        <button onClick={onClick} className="button-with-image">
          <img src={imageSrc} alt={altText} className="button-image" />
          <span className="button-text">{buttonText}</span>
        </button>
      );
  
}

export default googleLoginButton
