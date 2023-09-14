
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

  
 return (
 <RouterProvider router={router}/>


 ) }

