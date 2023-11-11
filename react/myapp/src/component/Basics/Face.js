import React,{useState} from 'react' ;
import data from "./dataApi.js";
import NavBarr from './NavBarr.js';
import LayoutCard from './LayoutCard.jsx';
import Footer from './Footer.js';

export const imag = './images/imgg.png'
export const imag2 = './images/1.jpg'
export const imag3 ='./images/2.png'


const Face = () => {

  const[studData,setMenuData]=React.useState(data);

  return (
  <>
   <NavBarr/>
  <LayoutCard studData={data}/>
  {/* //Parent to child data passing  */}
  <Footer/>

</>
  )
  
}

export default Face
