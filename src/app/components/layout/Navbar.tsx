"use client";
import * as LayoutType from '@/app/types/layout';
import { useEffect, useState } from "react";
import localFont from 'next/font/local';
import Link from "next/link";

const baybayinFont = localFont({ src: '../../../../public/fonts/Bagwis_Baybayin_Font.ttf' })
 
export default function Navbar(props: LayoutType.Navbar){
    const { menu, name } = props 

    const [theme, setTheme] = useState("cmyk");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "cmyk";
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "cmyk" ? "night" : "cmyk";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };
    
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {menu.map((item, index) => (
                        <li key={index}>
                            <Link href={item.path}>{item.name}</Link>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link href={'/'} className={`${baybayinFont.className} text-4xl`}>{name}</Link>
            </div>
            <div className="navbar-end">
                <label className="swap swap-rotate btn btn-ghost btn-circle">
                    <input type="checkbox" onChange={toggleTheme} checked={theme === "night"} />
                    <svg className="swap-off h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                        <circle cx="12" cy="12" r="4"></circle>
                        <path d="M12 2v2"></path>
                        <path d="M12 20v2"></path>
                        <path d="m4.93 4.93 1.41 1.41"></path>
                        <path d="m17.66 17.66 1.41 1.41"></path>
                        <path d="M2 12h2"></path>
                        <path d="M20 12h2"></path>
                        <path d="m6.34 17.66-1.41 1.41"></path>
                        <path d="m19.07 4.93-1.41 1.41"></path>
                        </g>
                    </svg>
                    <svg className="swap-on h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                        </g>
                    </svg>
                </label>
            </div>
        </div>
    );
  }