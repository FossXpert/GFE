import React from 'react'
// import './Profile.css'
import Image from 'next/image'
import profile from '../assets/profile.png';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
// T stands for tailwinds CSS

type Props = {}

const ProfileT = (props: Props) => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-light-gray'>
      <div className='flex flex-col bg-white h-[428px] 
      w-[340px] rounded-md border-2 
      border-light-gray shadow-rp justify-between
      pt-6 pb-6 pl-4 pr-4'>
        <div className='flex flex-co w-[308px] h-[236px] relative'>
        <Image className='h-16 w-16 absolute left-1/2 -translate-x-1/2' src={profile} alt=''/>
        <h3 className='bg-white text-h3-color 
        absolute top-[88px] font-noto text-[20px]
        font-[500] leading-[28px]
        left-1/2 -translate-x-1/2'>Sarah Dole</h3>
        <h5 className='bg-white text-[rgb(82,82,82)] font-noto 
        text-[14px] leading-[20px]
         absolute top-[116px] left-1/2 -translate-x-1/2 whitespace-nowrap'>Front End Engineer @ Microsoft</h5>
        <p className='bg-white text-center font-noto
        text-[16px] font-[400]
        text-[rgb(82,82,82)] absolute 
        top-[160px] leading-[24px]'>
        I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.
        </p>
        </div>
        <div className='w-[308px] h-[104px] flex flex-col relative'>
        <button className='bg-[rgb(67,56,202)] h-[44px] text-[#fff]
                font-noto font-[500] text-[16px] leading-[24px] hover:bg-[rgb(52,39,199)]'>Contact Me</button>
          <div className='flex justify-evenly items-center absolute top-[68px] h-[36px] w-[308px]'>
            <a href='#'>
              <FaGithub className='text-[rgb(67,56,202)] hover:border-[1px] hover:border-[#ccc] hover:scale-200 disabled:text-[#ccc]'/>
            </a>
            <a href='#'>
              <FaLinkedin className='text-[rgb(67,56,202)] hover:border-[1px] hover:border-gray-300 hover:scale-200 disabled:text-[#ccc]'/>
            </a>
            <a href='#'>
              <FaInstagram className='text-[rgb(67,56,202)] hover:border-[1px] hover:border-gray-300 hover:scale-200 disabled:text-[#ccc]'/>
            </a>
            <a href='#'>
              <FaXTwitter className='text-[rgb(67,56,202)] hover:border-[1px] hover:border-gray-300 hover:scale-200 disabled:text-[#ccc]'/>
            </a>
        </div>
      </div> 
    </div>
    </div>
  )
}

export default ProfileT