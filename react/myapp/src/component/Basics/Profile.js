import React from 'react'
import{BiSolidUserPin} from 'react-icons/bi'
import NavBarr from './NavBarr'
import Footer from './Footer'
import {GoogleLogout} from 'react-google-login'
import {FcGoogle} from 'react-icons/fc'

const clientId="36910271547-g4gf1pe3a3ln92sfmj6n293s5k3vfnrp.apps.googleusercontent.com";



const Profile = () => {
    const responseGoogle = () => {
        <div id="signOutButton">
        <GoogleLogout
        clientId={clientId}
        buttonText={'Logout'}
        onLogoutSuccess={onSuccess}
        redirect={'./home'}
        />

        {/* <div class="button-cont center-block">
            <div className='cardbutton '> 
                <FcGoogle className='icon1'/>Logout
            </div>
        </div> */}

    </div>
        
        // Handle the Google login response
      };

    const onSuccess=()=>{
        console.log("Log Out Successfully!");
    }
  return (
    <div className='Profile'>

        <NavBarr/>
        <div class="full-body-wrapper">
            <div class='containerlogo'>
            <BiSolidUserPin className='l'/>
            <h1>class<div className='book'>book</div></h1>
            </div>
        </div>

        <div class="container">
            <div class="front">
           
            <div class="section2">
                <h1>Hi</h1>
            
                    <div class="button-cont center-block">
                        <div className='cardbutton ' onClick={responseGoogle}> 
                            <FcGoogle className='icon1'/> Logout
                        </div>
                    </div>
                </div>
            </div>
        </div>

      

           

      
        <Footer/>
    </div>
  )
}

export default Profile