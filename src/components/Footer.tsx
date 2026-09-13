import { useState } from 'react'
import logo from '../assets/logo-text.png'
import type { NavItemTypes } from '../types/NavItemType'
import ListItem from './ui/ListItem'

const Footer = () => {
    const [productItem,SetProductItem]=useState<NavItemTypes[]>([
        {id:1,title:"Home"},
        {id:2,title:"Technologies"},
        {id:3,title:"Projects"},
    ])
    const [companyItem,setCompanyItem]=useState<NavItemTypes[]>([
        {id:1,title:"About"},
        {id:2,title:"Contact"},
        {id:3,title:"Careers"},
    ])
    const [legalItem,setLegalItem]=useState<NavItemTypes[]>([
        {id:1,title:"Privacy Policy"},
        {id:2,title:"Terms of Service"},        
    ])
    return (
        <footer className='pt-18 pb-12'>
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr] container mx-auto mb-25">
                <div className='grid grid-cols-1 gap-3'>
                    <img src={logo} alt="logo" />
                    <p>Curated tools, technologies, and resources for developers <br />
                    building modern software.</p>
                    <div className='flex gap-2 font-semibold'>
                        <p>GitHub</p>
                        <p>Twitter</p>
                        <p>LinkedIn</p>
                    </div>
                </div>
                <div>
                    <h2 className='font-bold text-2xl mb-4'>PRODUCT</h2>
                    <ul>
                        {productItem.map(item=>(<ListItem key={item.id} item={item}/>))}
                    </ul>   
                </div>
                <div>
                    <h2 className='font-bold text-2xl mb-4'>COMPANY</h2>
                    <ul>
                        {companyItem.map(item=>(<ListItem key={item.id} item={item}/>))}
                    </ul>   
                </div>
                <div>
                    <h2 className='font-bold text-2xl mb-4'>LEGAL</h2>
                    <ul>
                        {legalItem.map(item=>(<ListItem key={item.id} item={item}/>))}
                    </ul>   
                </div>                               

            </div>
            <div className='container mx-auto flex justify-between pt-8 border-t-2 border-slate-300'>
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <div className='flex gap-2'>
                        <p>Privacy</p>
                        <p>Terms</p>
                    </div>
                </div>
        </footer>
    )
}

export default Footer