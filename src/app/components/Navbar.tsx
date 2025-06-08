"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const theme = "dark"; // Hardcoded as per request

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50">
      <div className="container max-w-7xl mx-auto px-4 py-4">
        {/* FLEX CONTAINER for logo + menu */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-primary">
            tanish.Dev™
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-primary transition-colors duration-200 ${
                    isActive ? "font-medium text-primary" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* theme toggle */}
            <button
              onClick={() => {}} // Placeholder for theme toggle
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            type="button"
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* mobile menu */}
        {isMobileMenuOpen && (
          <>
            {/* Full-screen blur overlay */}
            <div
              className="md:hidden fixed inset-0 backdrop-blur-md bg-black/20 z-40"
              onClick={toggleMobileMenu}
              aria-hidden="true"
            />
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50">
              <div className="py-4 space-y-4">
                {menuItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <div key={item.href}>
                      <Link
                        href={item.href}
                        className={`block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                          isActive ? "font-medium text-primary" : ""
                        }`}
                        onClick={toggleMobileMenu}
                      >
                        {item.label}
                      </Link>
                    </div>
                  );
                })}
                {/* theme toggle */}
                <div>
                  <button
                    onClick={() => {}} // Placeholder for theme toggle
                    className="flex items-center w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    aria-label="Toggle theme"
                  >
                    {theme === "dark" ? (
                      <div className="flex items-center">
                        <SunIcon className="h-5 w-5" />
                        {/* <span className="ml-2">Light Mode</span> */}
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <MoonIcon className="h-5 w-5" />
                        {/* <span className="ml-2">Dark Mode</span> */}
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};