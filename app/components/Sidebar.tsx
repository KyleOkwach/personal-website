'use client'

import Link from "next/link";
import { NavItems, SocialLinks } from "../constants";
import { motion } from "framer-motion";
import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";

interface SidebarProps {
    currentLink: string,
    setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>,
    showSidebar: boolean,
    setCurrentLink: React.Dispatch<React.SetStateAction<string>>,
}

const Sidebar: React.FC<SidebarProps> = ({ currentLink, setShowSidebar, showSidebar, setCurrentLink }) => {
    return (
        <span
            className={
                `flex flex-col items-center justify-center gap-16 left-0 top-0 fixed w-full bg-background-custom/95 backdrop-blur-lg z-10 p-8
                transition-all ease-in duration-200
                ${showSidebar ? 'h-screen': 'h-0'}`
            }
        >
            <div className='flex'>
                <Link href="/" onClick={() => setShowSidebar(false)}>
                    <Logo className='w-20 h-10 fill-primary-custom'/>
                </Link>
            </div>

            <div className="flex flex-row gap-4 px-1 scroll-smooth"> {
                SocialLinks.map((item, index) => (
                <a key={ index } href={ item.href } className="group transition-all ease-in duration-200 hover:bottom-2 hover:text-primary-custom" target="blank">
                    <div className="relative transition-all ease-in duration-200 group-hover:bottom-1">
                    { <item.icon className="text-2xl" /> }
                    </div>
                </a>
                ))
            } </div>

            <div className="flex flex-col w-full gap-2">
                {
                    NavItems.map((item, index) => item.showInNavbar && (
                        
                        <Link href={`#${item.href}`} onClick={() => {setShowSidebar(false); setCurrentLink(item.href)}} key={index} className="w-full">
                            <div className={`flex flex-row gap-2 rounded-sm items-center justify-center w-full p-4 dark:text-text-custom text-background-custom ${currentLink === item.href ? 'bg-primary-custom dark:text-secondary-custom' : 'bg-secondary-custom'}`}>
                                <item.icon className={ `group-hover:text-primary-custom w-4 h-4` }/>
                                { item.name }
                            </div>
                        </Link>
                    ))
                }
            </div>

            <div className='flex flex-col gap-2 w-full'>
                <a href='#resume' className="w-full">
                    <div className='flex items-center justify-center w-full border-solid border-[1px] p-4 border-primary-custom text-primary-custom rounded-sm'>
                        <h3 className='text-sm font-semibold'>Resume</h3>
                    </div>
                </a>
                <ThemeSwitcher className='flex flex-row gap-2 items-center justify-center p-4 bg-text-custom/10 text-text-custom w-full' />
            </div>
        </span>
    )
}

export default Sidebar;