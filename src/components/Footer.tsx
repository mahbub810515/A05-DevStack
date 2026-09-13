import { useState } from 'react'
import logo from '../assets/logo-text.png'
import type { NavItemTypes } from '../types/NavItemType'
import ListItem from './ui/ListItem'

const Footer = () => {
    const [productItem, SetProductItem] = useState<NavItemTypes[]>([
        { id: 1, title: "Home" },
        { id: 2, title: "Technologies" },
        { id: 3, title: "Projects" },
    ])
    const [companyItem, setCompanyItem] = useState<NavItemTypes[]>([
        { id: 1, title: "About" },
        { id: 2, title: "Contact" },
        { id: 3, title: "Careers" },
    ])
    const [legalItem, setLegalItem] = useState<NavItemTypes[]>([
        { id: 1, title: "Privacy Policy" },
        { id: 2, title: "Terms of Service" },
    ])
    return (
        <footer className="pt-12 pb-8 md:pt-18 md:pb-12">

            {/* Footer Main */}
            <div className="container mx-auto mb-12 grid grid-cols-1 gap-10 px-5 sm:grid-cols-2 md:px-8 lg:mb-20 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-8">

                {/* Brand */}
                <div className="grid grid-cols-1 gap-3 sm:col-span-2 lg:col-span-1">
                    <img
                        src={logo}
                        alt="Dev Stack logo"
                        className="w-fit"
                    />

                    <p className="max-w-md text-sm leading-6 text-primary-black">
                        Curated tools, technologies, and resources for developers
                        building modern software.
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-4 font-semibold text-sm">
                        <p className="cursor-pointer hover:underline">
                            GitHub
                        </p>

                        <p className="cursor-pointer hover:underline">
                            Twitter
                        </p>

                        <p className="cursor-pointer hover:underline">
                            LinkedIn
                        </p>
                    </div>
                </div>

                {/* Product */}
                <div>
                    <h2 className="mb-4 text-lg font-bold md:text-xl lg:text-2xl">
                        PRODUCT
                    </h2>

                    <ul className="space-y-2">
                        {productItem.map((item) => (
                            <ListItem
                                key={item.id}
                                item={item}
                            />
                        ))}
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h2 className="mb-4 text-lg font-bold md:text-xl lg:text-2xl">
                        COMPANY
                    </h2>

                    <ul className="space-y-2">
                        {companyItem.map((item) => (
                            <ListItem
                                key={item.id}
                                item={item}
                            />
                        ))}
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h2 className="mb-4 text-lg font-bold md:text-xl lg:text-2xl">
                        LEGAL
                    </h2>

                    <ul className="space-y-2">
                        {legalItem.map((item) => (
                            <ListItem
                                key={item.id}
                                item={item}
                            />
                        ))}
                    </ul>
                </div>

            </div>

            {/* Footer Bottom */}
            <div className="container mx-auto flex flex-col gap-4 border-t-2 border-slate-300 px-5 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between md:px-8 md:pt-8">

                <p>
                    © 2026 Dev Stack. All rights reserved.
                </p>

                <div className="flex gap-4">
                    <p className="cursor-pointer hover:underline">
                        Privacy
                    </p>

                    <p className="cursor-pointer hover:underline">
                        Terms
                    </p>
                </div>

            </div>

        </footer>
    )
}

export default Footer