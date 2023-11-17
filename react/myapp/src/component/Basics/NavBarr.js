import React from 'react'
import { Stack } from '@mui/material'
import LogoutButton from './Logoutnav'
import {BiSolidUserPin} from 'react-icons/bi'


export const logo ='./logo/1.png'


export default function NavBarr ()  {


  
    return (
        <div>
       
      <Stack direction="row" alignItems="center" p={2} 
      sx={{position:'sticky', background:'#000000',justifyContent:'space-between',alignItems:'stretch',color:'white',padding:'0.4rem 1.0rem'}}>

        <a href="/">

        <div class='navlogo'>
          <BiSolidUserPin className='l'/>
          <h1>class</h1><h1 className ='book'>book</h1>
        </div>
        </a>


        <div className='abc'>
        
          <li><CustomLink className="nav-option"  href="/home">Profile</CustomLink></li>
          <li><CustomLink  className="nav-option" href="/students">Class</CustomLink></li>
          <li><CustomLink  className="nav-option" href="/rate">Rate</CustomLink></li>
          <li><CustomLink className="nav-option" href="/about">About </CustomLink></li>
          <li><CustomLink className="nav-option" href="/logout"><LogoutButton/> </CustomLink></li>
        </div>
        
      </Stack>
    </div>
  )
}

function CustomLink({href,children, ...props}){
  const path = window.location.pathname
  return(
    <li className={path===href ? "Navactive":""}> 
      <a href={href}{...props}>
        {children}
      </a>

    </li>
  )
  }