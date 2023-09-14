import React, {useState} from 'react'
import './SingIn.css'
import { server } from '../../utils/axios'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import jwtDecode from 'jwt-decode'
import GoogleLoginButton from '../googleLoginButton/googleLoginButton'
import { Link } from 'react-router-dom'
 



const  SignIn = () => {

const [data, setData] = useState({
  name:" ",
  email:" ",
  password:"",
  terms: false
})

const handleChangeData = (event)=>{
setData((prevState)=> {
  return event.target.name === 'terms' ? {...prevState, [event.target.name]: event.target.checked} : {...prevState, [event.target.name]: event.target.value}  
})
}

const handleSumbitData = async (event)=>{
  event.preventDefault()
  const userData = {...data}
  delete userData.terms
  const res = await server.post('/auth',userData)
console.log(res);
}

const handleSumbitGoogle = async (data)=>{
  const userData = {...data}
  delete userData.terms
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
            <form onSubmit={handleSumbitData}>
             
   <p>Email:</p>
  
<input name='email' onChange={handleChangeData} value={data.email}  aria-label='Email' placeholder='Email' type="email"/>
<p>Password:</p>
<input name='password' onChange={handleChangeData}  value={data.password} type="password" aria-label='Password' placeholder='Password' />  
<div className='checked'>
<p>I AGREE TERMS AND CONDITIONS </p>

<input className='checkedButton' name='terms' onChange={handleChangeData} value={data.terms}  type="checkbox" aria-label='Terms' placeholder='Terms'/> 
</div>
<div className='buttonSubmit'>
<button type="submit" className='buttonForm'> SING IN</button>
</div>

            </form>
      
            <p>Don't have an account? <Link  to="/signUp">Sign Up</Link></p>
     
        </div>
      </div>
    </div>
  )
}

export default SignIn
