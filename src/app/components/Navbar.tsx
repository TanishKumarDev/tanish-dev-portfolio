"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { useTheme } from './context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export const Navbar = () => {
    const theme = "dark";
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const pathname = usePathname();
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }
    const menuItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/blogs", label: "Blogs" },
        { href: "/contact", label: "Contact" },
    ]

    return (
        <nav className="fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50">
            <div className="container max-w-7xl mx-auto px-4 py-4">
                {/* 🔧 FLEX CONTAINER for logo + menu */}
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="text-xl font-bold text-primary">
                        tanish.Dev&trade;
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`hover:text-primary transition-colors duration-200 ${isActive ? 'font-medium text-primary' : ''
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}

                        {/* theme toggle */}
                        <button className='p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'>
                            {theme === 'dark' ? (
                                <SunIcon className='h-5 w-5' />
                            ) : (
                                <MoonIcon className='h-5 w-5' />
                            )}
                        </button>
                    </div>
                </div>

                {/* You can add Mobile Menu here if needed */}
            </div>
        </nav>
    );
}
