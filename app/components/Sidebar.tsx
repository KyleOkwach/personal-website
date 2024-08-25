'use client'

import Link from "next/link";
import { NavItems } from "../constants";
import { motion } from "framer-motion";
import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";

interface SidebarProps {
    currentLink: string,
}

const Sidebar: React.FC<SidebarProps> = ({ currentLink }) => {
    return (
        <motion.div

            className="flex flex-col items-center justify-between left-0 top-0 fixed w-full h-screen bg-accent-custom z-20 gap-4 p-8"
        >
            <div className='flex'>
                <Link href="/">
                    <Logo className='w-20 h-10 fill-primary-custom'/>
                </Link>
            </div>

            <div className="flex flex-col w-full gap-2">
                {
                    NavItems.map((item, index) => item.showInNavbar && (
                        
                        <Link href={`#${item.href}`} key={index} className="w-full">
                            <div className="flex flex-row gap-2 items-center justify-center w-full p-4 bg-secondary-custom">
                                <item.icon className={ `group-hover:text-primary-custom w-4 h-4 ${currentLink === item.href ? 'text-primary-custom' : 'text-text-custom'}` }/>
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
                <ThemeSwitcher className='flex flex-row gap-2 items-center justify-center p-4 bg-background-custom text-text-custom w-full' />
            </div>
        </motion.div>
    )
}

export default Sidebar;