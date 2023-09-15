import React, {useState} from 'react'
import './SignUp.css'
import { server } from '../../utils/axios'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import jwtDecode from 'jwt-decode'
import GoogleLoginButton from '../googleLoginButton/googleLoginButton'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { signup } from '../../redux/actions/authActions'


const  SignUp = () => {

const dispacth = useDispatch()

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
  const res = await server.post('/auth/up',userData)
console.log(res);
dispacth(signup(res.data))
}

const handleSumbitGoogle = async (data)=>{
  const userData = {...data}
  delete userData.terms
  const res = await server.post('/auth/up',userData)
console.log(res);
dispacth(signup(res.data))
}


  return (
    <div className='containerSignUp'>
      
      <div className="formSignUp">

        <div className="googleLog">
            <h2>Sign Up with Google</h2>
            <GoogleOAuthProvider clientId='575147011863-a1b1tpept2es6bb4l0jvkm9js60jloga.apps.googleusercontent.com'>

<GoogleLoginButton fn={handleSumbitGoogle}/>

            </GoogleOAuthProvider>
        </div>
        <br />
        <h5>or</h5>
        <div className='formSign'>
            <form onSubmit={handleSumbitData}>
                <p>Name:</p>
   <input name='name' onChange={handleChangeData}  value={data.name} aria-label='Name' placeholder='Name' type='text' />
   
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

        <div className='already'>
          
<p>Do you already have an account? <Link  to="/signIn">Sign In</Link></p>
        </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
