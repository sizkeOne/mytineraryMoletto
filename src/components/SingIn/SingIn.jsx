import React, {useRef, useState} from 'react'
import './SingIn.css'
import { server } from '../../utils/axios'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import jwtDecode from 'jwt-decode'
import GoogleLoginButton from '../googleLoginButton/googleLoginButton'
import { Link } from 'react-router-dom'
 



const  SignIn = () => {
    
    const inputEmail = useRef();
    
    const inputPass = useRef();
    
const handleSumbitGoogle = async (data)=>{
  const userData = {...data}
  delete userData.terms
  const res = await server.post('/auth/in',userData)
console.log(res);
}

const handleSumbit = async (e)=>{
    e.preventDefault()
    const userData = {
        email : inputEmail.current.value,
        password : inputPass.current.value,
    }

    const res = await server.post('/auth/in',userData)
  console.log(res);
  }
  
  return (
    <div className='containerSignIn'>
      
      <div className="formSignIn">

        <div className="googleLog">
            <h2>Login with Google</h2>
            <GoogleOAuthProvider clientId='575147011863-a1b1tpept2es6bb4l0jvkm9js60jloga.apps.googleusercontent.com'>

        
<GoogleLoginButton fn={handleSumbitGoogle}/>
            </GoogleOAuthProvider>
        </div>
        <h4>or</h4>
        <div className='formSign'>
            <form onSubmit={(e)=>{e.preventDefault()}}>
             
   <p>Email:</p>
  
<input ref={inputEmail} name='email'   aria-label='Email' placeholder='Email' type="email"/>
<p>Password:</p>
<input ref={inputPass}  name='password'  type="password" aria-label='Password' placeholder='Password' />  

<div className='buttonSubmit'>
<button onClick={handleSumbit} className='buttonForm'> SING IN</button>
</div>

            </form>
      
            <p>Don't have an account? <Link  to="/signUp">Sign Up</Link></p>
     
        </div>
      </div>
    </div>
  )
}

export default SignIn
