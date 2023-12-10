import React from 'react'
import {AiFillInstagram,AiFillLinkedin,AiFillGithub,AiFillYoutube} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
const Footer = () => {
  return (

    <div className='footer'>
        <div className='footer1'>
            <a href="https://www.linkedin.com/in/madhuryahait/"><FaLinkedinIn className='icon'/></a>
            <a href="https://www.instagram.com/madhuryahait/"><AiFillInstagram className='icon'/></a>
            <a href="https://github.com/MADHURYAHAIT"><AiFillGithub className='icon'/></a>
            <a href="https://www.youtube.com/@mxdyofficial"><AiFillYoutube className='icon'/></a>
       
        </div>
      © Class Book inc. 2023.
      <br/>
      email us at haitmadhurya@gmail.com | site developed by Madhurya Hait | based in Majitar ,Sikkim
    </div>
  )
}

export default Footer