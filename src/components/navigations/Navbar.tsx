'use client'
import { useState } from 'react';
import SwitchThemeButton from '../utils/SwitchThemes';
import Link from "next/link";
import links from "../../../content/links.json";
import Team from "@/components/utils/Team";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [openLinks, setOpenLinks] = useState(Array(links.length).fill(false));

    const toggleLink = (index: number) => {
        const newOpenLinks = [...openLinks];
        newOpenLinks[index] = !newOpenLinks[index];
        setOpenLinks(newOpenLinks);
    };
    return (
        <nav className="sticky top-0 z-50 bg-white dark:bg-background">
            <div className="max-w-7xl mx-auto px-8">
            <div className="flex items-center justify-between h-16">
                    <div className="w-full justify-between flex items-center">
                        <Link className="flex-shrink-0" href="/">
                            Pokemon Radical Red Librairy
                        </Link>
                        <Team />
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {links.map((link, index) => {
                                    return (
                                        <div key={index} className="relative group">
                                            <Link
                                                className="text-gray-600 dark:text-white hover:bg-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                                href={link.href}
                                                onClick={(e) => {
                                                    if (link.children) {
                                                        e.preventDefault();
                                                        toggleLink(index);
                                                    }
                                                }}
                                            >
                                                {link.name}
                                            </Link>
                                            {link.children && openLinks[index] && (
                                                <div
                                                    className="absolute left-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48 z-10">
                                                    <div className="py-1 rounded-md bg-white shadow-xs">
                                                        {link.children.map((child, childIndex) => (
                                                            <Link
                                                                key={childIndex}
                                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                                href={child.href}
                                                            >
                                                                {child.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
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
                        <div key={index} className="relative group">
                            <Link
                                className="text-gray-300  dark:text-white hover:bg-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                href={link.href}
                            >
                                {link.name}
                            </Link>
                            {link.children && (
                                <div className="absolute left-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48 hidden group-hover:block z-10 transition ease-in-out duration-200 delay-150">
                                    <div className="py-1 rounded-md bg-white shadow-xs">
                                        {link.children.map((child, childIndex) => (
                                            <Link
                                                key={childIndex}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                href={child.href}
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    <SwitchThemeButton/>
                </div>
            </div>
        </nav>
    );
}