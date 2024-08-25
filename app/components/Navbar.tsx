'use client'

import { useRouter } from 'next/navigation';
import Logo from './Logo';
import Link from 'next/link';
import { NavItems } from '../constants';
import { useState } from 'react';

export default function Navbar() {
    const [currentLink, setCurrentLink] = useState('')
    const [showSidebar, ShowSidebar] = useState(false)

    return(
        <nav className="flex w-full fixed h-24 px-14 backdrop-blur-lg z-10">
            <div className='flex flex-row w-full justify-between items-center'>
                <div className='flex'>
                    <Link href="/">
                        <Logo className='w-20 h-10 fill-primary-custom'/>
                    </Link>
                </div>

                <div className='hidden md:flex flex-row lg:gap-8 gap-4'>
                    {
                        NavItems.map((item, index) => {
                            return (
                                item.showInNavbar && (
                                    <Link href={item.href} key={index} className='group' onClick={() => setCurrentLink(item.href)}>
                                        <div className='flex flex-col gap-1'>
                                            <div className='flex flex-row items-center justify-center lg:gap-4 gap-2'>
                                                <item.icon className={ `group-hover:text-primary-custom w-4 h-4 ${currentLink === item.href ? 'text-primary-custom' : 'text-text-custom'}` }/>
                                                <h3 className={ `group-hover:text-primary-custom text-sm font-light font-mono ${currentLink === item.href ? 'text-primary-custom': 'text-text-custom'}` }>
                                                    {item.name}
                                                </h3>
                                            </div>
                                            <span className='group-hover:w-full w-0 h-[2px] bg-primary-custom ease-in transition-all duration-100' />
                                        </div>
                                    </Link>
                                )
                            )
                        })
                    }
                </div>

                <div className='hidden md:flex flex-row gap-8'>
                    <button>
                        <div className='border-solid border-[1px] py-2 px-4 border-primary-custom text-primary-custom rounded-sm'>
                            <h3 className='text-sm'>Resume</h3>
                        </div>
                    </button>
                </div>

                {/* Sidebar */}
                <div className='flex sm:hidden'>
                    <button onClick={() => ShowSidebar(true)} className='flex items-center justify-center'>
                        <></>
                    </button>
                </div>
            </div>
        </nav>
    )
}