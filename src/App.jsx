
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/Home';
import Cities from './pages/cities/cities';


import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/Layout/Layout';





const router = createBrowserRouter([
 { 
  path:'/', 
 element: <MainLayout/>,  
children: [
{ path:'/',
 element:<Home/>

 },
 { path:'/cities', element: <Cities/>
}
 ]
   } 
])
export default function App() {
 return (
 <RouterProvider router={router}/>


 ) }

