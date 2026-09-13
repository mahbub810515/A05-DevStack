import { useState } from 'react'
import logo from '../assets/logo-text.png'

const Nav = () => {
   
  return (
    <nav className='py-6 px-8 border-primary-black border-b'>
        <div className='container mx-auto flex justify-between items-center'>
            <img src={logo} alt="logo-image" />
            <ul className='flex gap-2 text-primary-black'>
              <li>home</li>
              <li>technology</li>
              <li>about</li>
              <li>constat</li>
            </ul>
            <div className='flex gap-4'>
                <button className='text-primary-black'>Sign In</button>
                <button className='bg-[#D91B7E] text-white font-semibold text-[14px] rounded-2xl py-2.5 px-5 '>Sign Up</button>
            </div>

        </div>
    </nav>
    
  )
}

export default Nav
