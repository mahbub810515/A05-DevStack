import { useState } from 'react'
import logo from '../assets/logo-text.png'
import type { NavItemTypes } from '../types/NavItemType'
import ListItem from './ui/ListItem'


const Nav = () => {
    const [navItem, setNavItem] = useState<NavItemTypes[]>([
        { id: 1, title: "Home" },
        { id: 2, title: "Technologies" },
        { id: 3, title: "About" },
        { id: 4, title: "Contact" },
    ])

    return (
        <nav className='py-6 px-8 border-slate-300 border-b'>
            <div className='container mx-auto flex justify-between items-center'>
                <img src={logo} alt="logo-image" />
                <ul className='flex gap-7 font-medium text-[14px] text-primary-black'>
                    {navItem.map((item) => <ListItem key={item.id} item={item}/>)}
                </ul>
                <div className='flex gap-4'>
                    <button className='text-primary-black'>Sign In</button>
                    <button className='bg-deep-pink text-white font-semibold text-[14px] rounded-2xl py-2.5 px-5 '>Sign Up</button>
                </div>

            </div>
        </nav>

    )
}

export default Nav
