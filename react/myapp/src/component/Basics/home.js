import { colors } from '@mui/material'
import React from 'react'

import LoginButton from './login.js'
import LogoutButton from './logout.js'
import { useEffect } from 'react'
import {gapi} from 'gapi-script'
import Footer from './Footer.js'
export const logo ='./logo/1.png'
export const logo2 ='./logo/google.png'



const clientId="36910271547-g4gf1pe3a3ln92sfmj6n293s5k3vfnrp.apps.googleusercontent.com";

const Home = () => {

  useEffect(()=>{
     function start(){
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };
    gapi.load('client:auth2',start);
  });
  


  return (

<>
<div className='Home'>
    <div class="full-body-wrapper">
    <div class="container">
              <img src="https://i.pinimg.com/originals/dd/17/cb/dd17cb0f0e436fa60ace35306478a32d.png"/>
              <div class="content">

                </div>
    </div>
    
  </div>
     {/* <div class = "card-container1 text-center">
    
        <div class="container1">
        <div className='abc'>
            <img src={logo} className='logo3'/>
            <div className='c'>class</div>book
        </div>
        </div>
          <h3 sx={{font: '25px'}}>Log in start the fun</h3>
            <hr/> 
          <br/>

        <div class="section2">
      
          <div class="button-cont center-block">
           <div className='cardbutton '> 
               <img src = {logo2}/> Continue with Google

               

           </div>
          </div>
          <br/>
          <div class="button-cont center-block">
   
               
           <LoginButton/>
      <LogoutButton/>
          </div>
        </div>
      </div>
    </div>   */}


   <Footer/>

   

</div>
</>
    
  )
}

export default Home
