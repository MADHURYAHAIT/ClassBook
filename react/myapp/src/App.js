import React from 'react'
import Face from './component/Basics/Face'
import About from './component/Basics/about'
import Home from './component/Basics/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Box } from '@mui/material'
import home from './component/Basics/home'
import ParticleBackground from './component/Basics/ParticleBackground'

// import { createBrowserRouter } from 'react-router-dom'


const App = () => {
  let Current
  switch (window.location.pathname) {
    case "/":
      Current =Home
      break
    case "/logout":
      Current =Home
      break
    case "/students":
      Current =Face
      break
    case "/about":
      Current=About
      break
    case "/home":
      Current=Home
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

// const App = () => {
//   return (
//     <Router>
//       <Box sx={{ backgroundColor: '#1111' }}>
//         <ParticleBackground />
//         <Routes>
//           <Route exact path="/" element={Home} />
//           <Route path="/logout" element={Home} />
//           <Route path="/students" element={Face} />
//           <Route path="/about" element={About} />
//           <Route path="/home" element={Home} />
//         </Routes>
//       </Box>
//     </Router>
//   );
// };

export default App;


