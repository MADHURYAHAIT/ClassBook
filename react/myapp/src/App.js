import React from 'react'
import Face from './component/Basics/Face'

import { Box } from '@mui/material'
import About from './component/Basics/about'
import home from './component/Basics/home'
import ParticleBackground from './component/Basics/ParticleBackground'




const App = () => {
  let Current
  switch (window.location.pathname) {
    case "/":
      Current =Face
      break
    case "/logout":
      Current =home
      break
    case "/students":
      Current =Face
      break
  
    case "/about":
      Current=About
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
