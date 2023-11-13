import React, { useState } from 'react'
import{BiSolidUserPin} from 'react-icons/bi'
import NavBarr from './NavBarr'
import Footer from './Footer'
import GoogleLogout from './logout'
import {FcGoogle} from 'react-icons/fc'

const clientId="36910271547-g4gf1pe3a3ln92sfmj6n293s5k3vfnrp.apps.googleusercontent.com";



const Profile = (Prp) => {
 
        const url=Prp.profData.imageUrl;
        const[Img,seturl]=useState(url);
   
    
  return (
    <div className='Profile'>
       
        <NavBarr/>
        <div class="full-body-wrapper">
            <div class='containerlogo'>
            <BiSolidUserPin className='l'/>
            <h1>class<div className='book'>book</div></h1>
            </div>
        </div>

        <div class="profcontainer">
            <div class="front-profile">
           
            <div class="section2">
                <h1 className='book'>{Prp.profData.givenName}</h1>
                <h5 style={{color:'white'}}>Profile</h5><br/>
                {/* <img href={Img}/> */}
                <img src={url} alt={Prp.profData.name}/>
                <hr/>
                 User Name :  <i style={{color:'white'}}>{Prp.profData.name}</i><br/>
                email Id : <i style={{color:'white'}}>{Prp.profData.email}</i>

                    <hr/>
                    <GoogleLogout/>
                </div>
            </div>
        </div>

      

           

      
        <Footer/>
    </div>
  )
}

export default Profile