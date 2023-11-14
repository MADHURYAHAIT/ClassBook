import React from 'react'
import NavBarr from './NavBarr'
import Footer from './Footer'
import {BiSolidUserPin} from 'react-icons/bi'
import { useEffect } from 'react'
import './about.css'
import { CiCircleChevDown } from "react-icons/ci";

import $ from 'jquery'
// import 'jquery-ui-dist/jquery-ui'
// import 'jquery-ui-bundle';
// import 'jquery-ui-bundle/jquery-ui.min.css';



const About = () => {
  
  // useEffect(() => {

    
  // }, []);


  return (

    <div className='About'>

    <NavBarr/>

    {/* <div class="full-body-wrapper">
        <div class='containerlogo'>
        <BiSolidUserPin className='l'/>
        <h1>class<div className='book'>book</div></h1>
        </div>
    </div> */}




<header>
	<div>
   
        <div class='Aboutlogo' >
        <BiSolidUserPin style={{paddingTop: '6px',fontSize:'80px',color: 'rgb(222, 49, 10)'}} />
        <h1>class</h1><h1 className ='book'>book</h1>
        </div>
		    <p style={{color:'wheat',paddingTop:'250px'}}>Scroll down</p><br/>
        <CiCircleChevDown style={{paddingTop: '-10px',fontSize:'60px',color: 'wheat'}} />
	</div>
</header>

<main>
	<ul id="cards">
		<li class="Aboutcard" id="card_1">
			<div class="card__content">
				<div>
					<h2>Card One</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					<p><a href="#top" class="btn btn--accent">Read more</a></p>
				</div>
				<figure>
					<img src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-1.jpg" alt="Image description"/>
				</figure>
			</div>
		</li>
		<li class="Aboutcard" id="card_2">
			<div class="card__content">
				<div>
					<h2>Card Two</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					<p><a href="#top" class="btn btn--accent">Read more</a></p>
				</div>
				<figure>
					<img src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-2.jpg" alt="Image description"/>
				</figure>
			</div>
		</li>
		<li class="Aboutcard" id="card_3">
			<div class="card__content">
				<div>
					<h2>Card Three</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					<p><a href="#top" class="btn btn--accent">Read more</a></p>
				</div>
				<figure>
					<img src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-3.jpg" alt="Image description"/>
				</figure>
			</div>
		</li>
		<li class="Aboutcard" id="card_4">
			<div class="card__content">
				<div>
					<h2>Card Four</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					<p><a href="#top" class="btn btn--accent">Read more</a></p>
				</div>
				<figure>
					<img src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-2.jpg" alt="Image description"/>
				</figure>
			</div>
		</li>
	</ul>
</main>
<aside>
	<p>This App is only for fun and not meant to harm anyones feelings </p>
</aside>
  



  
    <Footer/>
</div>
 
 
  )
}

export default About
