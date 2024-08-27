'use client'

import Logo from './Logo';
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';
import Sidebar from './Sidebar';
import CustomButton from './CustomButton';
import { NavItems } from '../constants';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { FaX } from 'react-icons/fa6';

export default function Navbar() {
    const [currentLink, setCurrentLink] = useState('')
    const [showSidebar, ShowSidebar] = useState(false)

    return(
        <nav className="flex w-full fixed h-24 md:px-14 px-10 backdrop-blur-lg bg-background-custom/9 z-10">
            <div className='flex flex-row w-full justify-between items-center'>
                {/* <div className='flex md:hidden'></div> */}
                
                <div className='flex'>
                    {
                        !showSidebar &&
                        <Link href="/">
                            <Logo className='w-20 h-10 fill-primary-custom'/>
                        </Link>
                    }
                </div>

                <div className='hidden md:flex flex-row lg:gap-8 gap-4'>
                    {
                        NavItems.map((item, index) => (
                                item.showInNavbar && (
                                    <Link href={`#${item.href}`} key={index} className='group' onClick={() => setCurrentLink(item.href)}>
                                        <div className='flex flex-col gap-1'>
                                            <div className='flex flex-row items-center justify-center gap-2 px-1'>
                                                <item.icon className={ `group-hover:text-primary-custom w-4 h-4 ${currentLink === item.href ? 'text-primary-custom' : 'text-text-custom'}` }/>
                                                <h3 className={ `group-hover:text-primary-custom text-sm font-light font-mono ${currentLink === item.href ? 'text-primary-custom': 'text-text-custom'}` }>
                                                    {/* 0{index}.  */}
                                                    {item.name}
                                                </h3>
                                            </div>
                                            <span className='group-hover:w-full w-0 h-[2px] bg-primary-custom ease-in transition-all duration-100' />
                                        </div>
                                    </Link>
                                )
                            )
                        )
                    }
                </div>

                <div className='hidden md:flex flex-row gap-4'>
                    <CustomButton href='#Resume' content={<h3 className='text-sm'>Resume</h3>} />
                    <ThemeSwitcher className='' />
                </div>

                {/* Sidebar */}
                <div className='flex md:hidden'>
                    <button onClick={() => ShowSidebar(!showSidebar)} className='flex items-center z-30 justify-center text-3xl' aria-pressed>
                        {
                            showSidebar ? 
                            <div className='rounded-full p-2 bg-text-custom text-background-custom'>
                                <FaX /> 
                            </div>: 
                            <div className='rounded-full p-2'>
                                <FiMenu />
                            </div>
                        }
                    </button>
                    {
                        showSidebar && <Sidebar currentLink={currentLink} setShowSidebar={ShowSidebar} showSidebar={showSidebar} setCurrentLink={setCurrentLink} />
                    }
                </div>
            </div>
        </nav>
    )
}