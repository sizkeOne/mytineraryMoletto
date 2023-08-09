import React from 'react'
import Navbar2 from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

function MainLayout() {
  return (
    <>
      <Navbar2/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default MainLayout
