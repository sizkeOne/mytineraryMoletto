
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/Home';
import Cities from './pages/cities/cities';


import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/Layout/Layout';
import Details from  './pages/Details/Details/';
import FilterByName from './components/Filter/filter';
import Register from './pages/SignUp/SIngUp';
import Login from './pages/SingIn/SingIn';
import { useGoogleOneTapLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import { server } from './utils/axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {authenticate, login} from './redux/actions/authActions.js'




const router = createBrowserRouter(
  [
 { 
  path:'/', 
  
 element: <MainLayout/>,  
children: [
{ path:'/',
 element:<Home/>

 },
 { path:'/cities', element: <Cities/>
},{ path:`/citiesDetails/:id`, element: <Details/>
},
{ path:`/cities/search/:name`, element: <FilterByName/>
},
{ path:'/signUp', element: <Register/>
},
{ path:'/signIn', element: <Login/>
}


 ]
   } 
])
export default function App() {

  const password = "Aab_123"
  const dispacth = useDispatch();

useEffect(()=>{
dispacth(authenticate())
},[])


  useGoogleOneTapLogin({
  onSuccess: async credentialResponse => {
    console.log(credentialResponse);
    const infoUser = jwtDecode(credentialResponse.credential)
    const userData= {
      email: infoUser.email,
      password: password 
    } 
  console.log(userData);
    const res = await server.post('/auth/in', userData)
  
    console.log(res);
    dispacth(login(res.data))
  },
  onError: () =>{
    console.log('Login Failed');
  },
});



 return (
 <RouterProvider router={router}/>


 ) }

