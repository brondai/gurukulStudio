"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Nav, NavLink } from '@/app/components/Nav';

function NavBar() {
    const [scrolled, setScrolled] = useState(false);
      
        useEffect(() => {
          const handleScroll = () => {
            setScrolled(window.scrollY > 50); // Adjust the scroll threshold as needed
          };
      
          window.addEventListener("scroll", handleScroll);
          return () => {
            window.removeEventListener("scroll", handleScroll);
          };
        }, []);

  return (
    <div className={`sticky top-0 ${scrolled ? "bg-background" : "bg-transparent"} transition-all duration-300 ease-in-out z-20`}>
                <div className="container mx-auto flex justify-between">
                <Link href="/">
                <Image
                    className="dark:invert"
                    src="/logo.jpeg"
                    alt="Gurukul Studio logo"
                    width={50}
                    height={50}
                    priority
                    />
                </Link>
                <Nav>
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/about">About Us</NavLink>
                    <NavLink href="/workshops">Workshops</NavLink>
                    <NavLink href="/contact">Contact</NavLink>
                </Nav>
                </div>
            </div>
  )
}

export default NavBar