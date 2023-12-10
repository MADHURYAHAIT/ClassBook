import React from 'react'
import Face from './component/Basics/Face'
import About from './component/Basics/about'
import Home from './component/Basics/home'
import Rate from './component/Basics/Rate'


import { Box } from '@mui/material'
import ParticleBackground from './component/Basics/ParticleBackground'
import { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const DesktopWarning = () => (
  <div>
    <h1 style={{justifyContent:'center' ,paddingTop:'50%',textAlign:'center'}}> Please view in desktop </h1>
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
    case "/class":
      Current =Face
      break
    case "/rate":
      Current =Rate
      break
    case "/about":
      Current=About
      break
    case "/home":
      Current=Home
      break
    default:
      Current=Home
      break
  };
  return (
    <div>
      {isDesktop ? (
        <div>
           <ParticleBackground/>
          {/* <Box sx={{backgroundColor:'#1111'}}>
          </Box> */}
          <Current/>
        </div>
      ) : (
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


