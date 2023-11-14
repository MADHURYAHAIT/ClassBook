import React from 'react'
import NavBarr from './NavBarr'
import Footer from './Footer'
import {BiSolidUserPin} from 'react-icons/bi'
import { useEffect } from 'react'
import './about.css'
import { CiCircleChevDown } from "react-icons/ci";
import {profile} from '../../imgs/profile.jpeg'

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
        <BiSolidUserPin style={{paddingTop: '19px',fontSize:'130px',color: 'rgb(222, 49, 10)'}} />
        <h1>class</h1><h1 className ='book'>book</h1>
        </div>
		    <p style={{color:'wheat',paddingTop:'250px'}}>Scroll down</p><br/>
        
        <CiCircleChevDown style={{paddingTop: '-10px',fontSize:'90px',color: 'wheat'}} />
	</div>
</header>

<main>
	<ul id="cards">
		<li class="Aboutcard" id="card_1">
			<div class="card__content">
				<div>
					<h2>Hello Everyone</h2>
					<p> I am Madhurya Hait from Sikkim Manipal Institute of Technology, Enjoy the developer of this Web App.</p>
				</div>
				<figure>
        <img src= {'https://yt3.googleusercontent.com/RTGS8fej7PVFJjF0cnWKRzzyPQgC9KBYwQZspLZsI5ZlcJcwccxvx42KMHSh_S9mvQa5eZyKTQ=s900-c-k-c0x00ffffff-no-rj'}alt="Canvas Logo"/>
					
				</figure>
			</div>
		</li>
		<li class="Aboutcard" id="card_2">
			<div class="card__content">
				<div>
					<h2>Introducing</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					<p><a href="#top" class="btn btn--accent">Read more</a></p>
				</div>
				<figure>
        <img src= {'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg'}alt="Canvas Logo"/>
				</figure>
			</div>
		</li>
		<li class="Aboutcard" id="card_3">
			<div class="card__content">
				<div>
					<h2>Qualifications</h2>
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
					<h2>Course</h2>
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
  <p> People cannot be trusted these days whether it be buying items from the shopkeeper choosing a cab driver or getting into a relationship. And present itself nicely to serve present and not nicely to others.
    If you feel some person is not good enough or is not trustworthy, you can just rate him on this app and can help others to know about him. Currently, this app is only made for the students of Artificial intelligence and data, science of college, Sikkim, Manipal Institute of technology technology.
    It would be expanded further in future & can used by the world.
  </p>
	<p>This App is only for fun and not meant to harm anyones feelings. This app can True to be immensely useful and powerful for the future generation as anyone can raise a person on basis of how the person is in real life.
    Anyone can get to know how the person is in real life and can get to know the person better. Even going to interview the interviewer easily get to know the person and can easily decide whether to hire the person or not.
    He just needs a look at the person's profile and he can easily check his past. This app can be used by anyone and everyone.
  </p>
  <p>
    This app is the future and can use in every sector of industry and daily life. It's the perspective of many people that make a person good or bad. This app can help to know the person better and can help to make a better decision.
    If a person has Grudges against someone, he can just go through his profile and rate the person. Person can be judged on the basis of his past and can be rated accordingly.
  </p>
  <p>
    So even if some person does not do well in the first impression, he can be judge and on the basis of this app. 
    Let's take an example of a person who is doing well for this community. One can know whether to trust him or not on the basis of this.
  </p>

</aside>
  



  
    <Footer/>
</div>
 
 
  )
}

export default About
