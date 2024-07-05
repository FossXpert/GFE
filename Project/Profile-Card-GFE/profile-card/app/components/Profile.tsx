import React from 'react'
import './Profile.css'
import Image from 'next/image'
import profile from '../assets/profile.png'
import { FaGithub, FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { FaX, FaXTwitter } from 'react-icons/fa6'
type Props = {
  // name : string;
}

const Profile = (props: Props) => {
  return (
    <div className='container'>
      <div className='box'>
        <div className='box-big'>
          <Image className='box-big-image' src={profile} alt=''/>
          <h3>Sarah Dole</h3>
          <h5>Front End Engineer @ Microsoft</h5>
          <p>
          I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.
          </p>
        </div>
        <div className='box-small'>
          <button>Contact Me</button>
          <div className='social-icons'>
            <a href='#'>
              <FaGithub className='icon'/>
            </a>
            <a href='#'>
              <FaLinkedin className='icon'/>
            </a>
            <a href='#'>
              <FaInstagram className='icon'/>
            </a>
            <a href='#'>
              <FaXTwitter className='icon'/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile