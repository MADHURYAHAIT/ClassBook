import React from 'react'
import { Stack } from '@mui/material'
export const logo ='./logo/1.png'

export default function NavBarr ()  {
  
    return (
        <div>
        
      <Stack direction="row" alignItems="center" p={2} 
      sx={{position:'sticky', background:'#000000',justifyContent:'space-between',alignItems:'stretch',color:'white',padding:'0.4rem 2.5rem'}}>

        <a href="/">
        <div className='abc'>
            <img src={logo} className='logo'/>
            <div className='c'>class</div>book
        </div>
        </a>
        <div className='abc'>
        
          <li><CustomLink className="nav-option"  href="/home">home</CustomLink></li>
          <li><CustomLink  className="nav-option" href="/students">students</CustomLink></li>
          <li><CustomLink className="nav-option" href="/about">about </CustomLink></li>


        </div>
        
      </Stack>
    </div>
  )
}

function CustomLink({href,children, ...props}){
  const path = window.location.pathname
  return(
    <li className={path===href ? "nav-active":""}> 
    <a href={href}{...props}>
      {children}
    </a>

    </li>
  )
  }