import React,{useState} from 'react' ;
import data from "./dataApi.js";

import LayoutCard from './LayoutCard.jsx';


export const imag = './images/imgg.png'
export const imag2 = './images/1.jpg'
export const imag3 ='./images/2.png'


const Face = () => {

  const[studData,setMenuData]=React.useState(data);

  return (
  <>
  
  <LayoutCard studData={data}/>
  {/* //Parent to child data passing  */}


</>
  )
  
}

export default Face
