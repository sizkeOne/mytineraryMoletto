import React, {useState} from 'react'
import './SignUp.css'
import { server } from '../../utils/axios'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import jwtDecode from 'jwt-decode'
import googleLoginButton from '../googleLoginButton/googleLoginButton'
 



const  SignUp = () => {

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
  const res = await server.post('/auth',userData)
console.log(res);
}


  return (
    <div className='containerSignUp'>
      
      <div className="formSignUp">

        <div className="googleLog">
            <h2>Sign Up with Google</h2>
            <GoogleOAuthProvider clientId='575147011863-a1b1tpept2es6bb4l0jvkm9js60jloga.apps.googleusercontent.com'>

         {/* <GoogleLogin
         
         onSuccess={credentialResponse => {
          console.log(credentialResponse);
          const infoUser = jwtDecode(credentialResponse.credential)
          console.log(infoUser);
          handleSumbitGoogle({
            email: infoUser.email,
            name:  infoUser.given_name,
            password: "aA123",
            terms:true
          })
        }}
        onError={() => {
          console.log('Login Failed');
        }}


         /> */}
<googleLoginButton/>
            </GoogleOAuthProvider>
        </div>
        <h4>or</h4>
        <div className='formSign'>
            <form onSubmit={handleSumbitData}>
                <p>Name:</p>
   <input name='name' onChange={handleChangeData}  value={data.name} aria-label='Name' placeholder='Name' type='search' />
   
   <p>Email:</p>
  
<input name='email' onChange={handleChangeData} value={data.email}  aria-label='Email' placeholder='Email' type="email"/>
<p>Password:</p>

<p> </p>
<input name='password' onChange={handleChangeData}  value={data.password} type="password" aria-label='Password' placeholder='Password' />  
<div className='checked'>
<p>I AGREE TERMS AND CONDITIONS </p>

<input className='checkedButton' name='terms' onChange={handleChangeData} value={data.terms}  type="checkbox" aria-label='Terms' placeholder='Terms'/> 
</div>
<div className='buttonSubmit'>
<button type="submit" className='buttonForm'> SING UP</button>
</div>

            </form>

        </div>
      </div>
    </div>
  )
}

export default SignUp
