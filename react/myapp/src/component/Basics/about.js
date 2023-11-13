import React from 'react'
import NavBarr from './NavBarr'
import Footer from './Footer'
import {BiSolidUserPin} from 'react-icons/bi'

const about = () => {
  return (

    <div className='About'>

    <NavBarr/>
    <div class="full-body-wrapper">
        <div class='containerlogo'>
        <BiSolidUserPin className='l'/>
        <h1>class<div className='book'>book</div></h1>
        </div>
    </div>

  

  
    <Footer/>
</div>
 
 
  )
}

export default about
