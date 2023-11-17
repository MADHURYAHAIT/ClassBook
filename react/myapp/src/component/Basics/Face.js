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


    <LayoutCard2 studData={studData}  />

  {/* //Parent to child data passing  */}
    </div>
    <div class="wrapper">
  <h1>Parallax Flipping Cards</h1>
  <div class="cols">
			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front" style="background-image: url(https://unsplash.it/500/500/)">
						<div class="inner">
							<p>Diligord</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div class="back">
						<div class="inner">
						  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front" style="url(https://unsplash.it/511/511/)">
						<div class="inner">
							<p>Rocogged</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div class="back">
						<div class="inner">
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front" style="background-image: url(https://unsplash.it/502/502/)">
						<div class="inner">
							<p>Strizzes</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div class="back">
						<div class="inner">
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front" style="background-image: url(https://unsplash.it/503/503/)">
						<div class="inner">
							<p>Clossyo</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div class="back">
						<div class="inner">
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front" style="background-image: url(https://unsplash.it/504/504/">
						<div class="inner">
							<p>Rendann</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div class="back">
						<div class="inner">
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front" style="background-image: url(https://unsplash.it/505/505/)">
						<div class="inner">
							<p>Reflupper</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div class="back">
						<div class="inner">
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front" style="background-image: url(https://unsplash.it/506/506/)">
						<div class="inner">
							<p>Acirassi</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div class="back">
						<div class="inner">
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front" style="background-image: url(https://unsplash.it/508/508/)">
						<div class="inner">
							<p>Sohanidd</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div class="back">
						<div class="inner">
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
 </div>












  <br/><br/>
  <Footer/>


 









</div>











  )
  
}



export default Face