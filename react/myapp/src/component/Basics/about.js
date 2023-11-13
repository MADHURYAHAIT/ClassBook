import React from 'react'
import NavBarr from './NavBarr'
import Footer from './Footer'
import {BiSolidUserPin} from 'react-icons/bi'
import { useEffect } from 'react'
import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui'
import { TimelineMax } from 'gsap';

const About = () => {
  useEffect(() => {
// document.ontouchmove = function(event){
//   event.preventDefault();
// }

      // Caching stuff
      var cards = $('.cards-wrapper div'),
      tl = new TimelineMax(),
      x = 0;

    // Animation
      tl.to(cards[0], .25, { top: 40, left: -160, opacity: .5 });
      tl.to(cards[0], .25, { top: 97, left: 160, width: (320*.85), height: (480*.85), opacity: .2, 'z-index': 1 });
      tl.to(cards[1], .45, { width: 320, height: 480, opacity: 1, 'z-index': 3, top:0, delay:-.6 });
      tl.to(cards[2], .45, { width: (320*.93), height: (480*.93), top: 50, opacity: .85, 'z-index': 2, delay:-.6 });

    // Controls
      $('#play').on('click', function() {
        tl.play(0);
        tl.timeScale(1);
      });

      $('#reverse').on('click', function() {
        tl.reverse(0);
        tl.timeScale(1.5);
      });

    // On Swipe
      $(".cards-wrapper").swipe( {
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
          if(direction == "right") {
            tl.reverse(0).timeScale(1.5);
          } else if(direction == "left") {
            tl.play(0).timeScale(1);
          }
        },
        threshold: 0
      });
  }, []);


  return (

    <div className='About'>

    <NavBarr/>
    <div class="full-body-wrapper">
        <div class='containerlogo'>
        <BiSolidUserPin className='l'/>
        <h1>class<div className='book'>book</div></h1>
        </div>
    </div>

  
    <button id="play">Play</button>
    <button id="reserve">Reverse</button>

    <div class="center-content">
      <div class="cards-wrapper">
        <div class="card-1"></div>
        <div class="card-2"></div>
        <div class="card-3"></div>
      </div>
    </div>
  
    <Footer/>
</div>
 
 
  )
}

export default About
