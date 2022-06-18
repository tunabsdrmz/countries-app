import React from 'react'
import {Outlet} from "react-router-dom"
import Navbar from "./Navbar";
const SharedLayout = ({darkMode,setDarkMode}) => {
  return (
    <div>
        <Navbar 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        />
        <Outlet/>
    </div>
  )
}

export default SharedLayout