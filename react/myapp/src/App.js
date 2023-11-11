import React from 'react'
import Face from './component/Basics/Face'
import NavBarr from './component/Basics/NavBarr'
import { Box } from '@mui/material'
import about from './component/Basics/about'
import home from './component/Basics/home'
import ParticleBackground from './component/Basics/ParticleBackground'




const App = () => {
  let Current
  switch (window.location.pathname) {
    case "/":
      Current =Face
      break
    case "/students":
      Current =Face
      break
  
    case "/about":
      Current=about
      break
    case "/home":
      Current=home
      break
  };

  return (
    <div>
      <ParticleBackground/>

    <Box sx={{backgroundColor:'#1111'}}>
     
    </Box>
      <Current/>
    </div>
  )
}

export default App
