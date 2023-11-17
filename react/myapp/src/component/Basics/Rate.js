











import {useState} from 'react' ;
import Data from "./dataApi.js";
import NavBarr from './NavBarr.js';
import LayoutCard from './LayoutCard.jsx';
import Footer from './Footer.js';

export const imag = './images/imgg.png'
export const imag2 = './images/1.jpg'
export const imag3 ='./images/2.png'

const Rate = () => {

  const[studData,setstudData]=useState(Data);

  return (
  <div class="face">
  
    <NavBarr/>



    <div class="StudentFaces">


    <LayoutCard studData={studData}  />

  {/* //Parent to child data passing  */}
    </div>
  <br/><br/>
  <Footer/>

</div>
  )
  
}

export default Rate;















