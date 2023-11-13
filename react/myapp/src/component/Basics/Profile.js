import React from 'react'
import{BiSolidUserPin} from 'react-icons/bi'
import NavBarr from './NavBarr'
import Footer from './Footer'
import GoogleLogout from './logout'
import {FcGoogle} from 'react-icons/fc'

const clientId="36910271547-g4gf1pe3a3ln92sfmj6n293s5k3vfnrp.apps.googleusercontent.com";



const Profile = (Prp) => {
    var url=Prp.profData.imageUrl;
    const[Img,setImg]=url;
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
                <h1 className='book'>{}</h1>
                <img href={Img}/>
                User Name : {Prp.profData.name}<br/>
                email Id : {Prp.profData.email}

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