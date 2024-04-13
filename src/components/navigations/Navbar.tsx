'use client'
import { useState } from 'react';
import SwitchThemeButton from '../utils/SwitchThemes';
import Link from "next/link";

const links = [
    {
        name: 'Home',
        href: '/#',
    },
    {
        name: 'Pokedex',
        href: '/pokedex',
    },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white dark:bg-background">
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="w-full justify-between flex items-center">
                        <Link className="flex-shrink-0" href="/">
                            Pokemon Radical Red Librairy
                        </Link>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {links.map((link, index) => (
                                    <Link
                                        key={index}
                                        className="text-gray-600 dark:text-white hover:bg-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        href={link.href}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <SwitchThemeButton/>
                            </div>
                        </div>
                    </div>
                    <div className="block md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-300 hover:text-white focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${isOpen ? '' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            className="text-gray-300  dark:text-white hover:bg-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            href={link.href}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <SwitchThemeButton/>
                </div>
            </div>
        </nav>
    );
}