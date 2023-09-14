import React from 'react'
import Navbar2 from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const index4 = " "
const index2 = " "
const index3= "   "
function MainLayout() {
  return (
    <>

      <Navbar2 key={index4}/>
      <Outlet key={index2}/>
      <Footer key={index3}/>
    </>
  )
}

export default MainLayout
