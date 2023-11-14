import React from 'react'
import { Stack } from '@mui/material'

import { FaRegCircleUser } from 'react-icons/fa6'
import {FiLogOut} from 'react-icons/fi'
import LogoutButton from './Logoutnav'
import {BiSolidUserPin} from 'react-icons/bi'
import{PiStudentFill} from 'react-icons/pi'
import {ImInfo} from 'react-icons/im'



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
          <li><CustomLink className="nav-option"  href="/home">profile</CustomLink></li>
          <li><CustomLink  className="nav-option" href="/students">students</CustomLink></li>
          <li><CustomLink className="nav-option" href="/about">about </CustomLink></li>
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