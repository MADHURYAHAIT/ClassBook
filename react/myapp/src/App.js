import React from 'react'
import Face from './component/Basics/Face'
import About from './component/Basics/about'
import Home from './component/Basics/home'


import { Box } from '@mui/material'
import home from './component/Basics/home'
import ParticleBackground from './component/Basics/ParticleBackground'
import { useEffect, useState } from 'react';
// import { createBrowserRouter } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

#chu
const DesktopWarning = () => (
  <div>
    <h1 style={{justifyContent:'center' ,paddingTop:'50%',textAlign:'center'}}>Please view in desktop</h1>
  </div>
);

const App = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 500);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 700);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
      {isDesktop ? (
        // Render your desktop content here
        <div>
           <ParticleBackground/>
          <Box sx={{backgroundColor:'#1111'}}>
          </Box>
          <Current/>
        </div>
      ) : (
        // Render the warning for screens less than or equal to 500px
        <DesktopWarning />
      )}




     
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


