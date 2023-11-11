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
                <h1 style={{paddingTop:'6.6rem', paddingBottom:'1rem', scale:'1.2'}}>classbook</h1>   

                <h3 style={{fontSize: '25px', paddingBottom:'3.8rem'}} className='heading'>log in to start the fun</h3>
            <hr/> 
       

        <div class="section2">
                <LoginButton/>
                <p style={{backgroundColor:'transparent',color:'white',fontWeight:'1'}}>Create a <a style={{backgroundColor:'transparent'}}href = "https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fwww.google.com%2Fsearch%3Fclient%3Dsafari%26rls%3Den%26q%3Dgoogle%2Baccount%2Bpage%26ie%3DUTF-8%26oe%3DUTF-8&ec=GAlAAQ&hl=en&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S1996489549%3A1699642614328945&theme=glif">new account</a></p>
          </div>
          <br/>
        
              </div>
    </div>
    <h6 style={{color:"wheat"}} >Hover Above to Login : )</h6>
   
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
