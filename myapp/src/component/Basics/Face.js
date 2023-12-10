import React from 'react'

import {useState} from 'react' ;
import Data from "./dataApi.js";
import NavBarr from './NavBarr.js';
import LayoutCard2 from './LayoutCard2.js';
import Footer from './Footer.js';
import './Class.css'
import Home from './home.js';

export const imag = './images/imgg.png'
export const imag2 = './images/1.jpg'
export const imag3 ='./images/2.png'

const Face = () => {

  const User = localStorage.getItem('User');
  const[studData,setstudData]=useState(Data);
  const filterItem=(cat)=>{
    const updatedList =Data.filter((curElem) =>{
    
      return curElem.sex === cat;
    });
    setstudData(updatedList);
  };

  const filterOthers=()=>{
    const updatedList =Data.filter((curElem) =>{
      return (curElem.sex !== 'Male' && curElem.sex !== 'Female');
    });
    setstudData(updatedList);
  };

  if (User!='None'){
  return (
  <div class="face">
  
    <NavBarr/>

    <nav className="navbar">
        <div className="btn-group">
          <button className="btn-group__item" onClick={()=>{ setstudData(Data)}}>All</ button>
          <button className="btn-group__item"onClick={()=>filterItem("Male")} >Male</ button>
          <button className="btn-group__item" onClick={()=>filterItem("Female")}>Female</ button>
          <button className="btn-group__item"onClick={()=>filterOthers()}>Others</ button>
        </div>
    </nav>


    <div class="StudentFaces" style={{Animation:"fadeSwipeUp 1s forwards"}}>


      <h6 style={{color:"wheat",paddingTop:'3%', justifyContent:'center',textAlign:'center'}} >Hover on a card to see details</h6>
    <div class="wrapper">
  
    <LayoutCard2 studData={studData}  />
    </div>


    </div>
  <br/>
  <Footer/>
</div>


  )

  }
  else{
    return(
      <>
      <Home/>
      </>
    )
  }
  
}



export default Face