"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Nav, NavLink } from "../components/Nav";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        <>
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
                  <NavLink href="/admin">Dashboard</NavLink>
                  <NavLink href="/admin/workshops">Workshops</NavLink>
                  <NavLink href="/admin/participants">Participants</NavLink>
                </Nav>
                </div>
            </div>

            {children}
        </>
    )
}