import React from 'react'

import {useState} from 'react' ;
import Data from "./dataApi.js";
import NavBarr from './NavBarr.js';
import LayoutCard2 from './LayoutCard2.js';
import Footer from './Footer.js';
import './Class.css'

export const imag = './images/imgg.png'
export const imag2 = './images/1.jpg'
export const imag3 ='./images/2.png'

const Face = () => {


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


    <div class="wrapper">
  
    <LayoutCard2 studData={studData}  />
    </div>


  {/* //Parent to child data passing  */}
    </div>
     












  <br/>
  <Footer/>


 









</div>











  )
  
}



export default Face