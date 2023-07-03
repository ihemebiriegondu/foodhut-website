import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assests/little-decors/Logo (1).png'
import darkLogo from '../../assests/little-decors/Logo.png'

import { LuMenu } from 'react-icons/lu'
import { IoClose, IoLogInOutline, IoPersonSharp } from 'react-icons/io5'
import OffCanvas from './offCanvas'

export default function Nav({homeBold}) {

    const [showOffcanvas, setShowOffcanvas] = useState(false);

    return (
        <nav>
            <div className='flex justify-between items-center lg:mb-8 relative z-10'>
                <div className='w-[4.875rem] h-[7.563rem] ms-1.5 dark:hidden'>
                    <a href="/"><img src={Logo} alt="food hut logo" className='w-full h-full object-contain' /></a>
                </div>
                <div className='w-[4.875rem] h-[7.563rem] ms-1.5 hidden dark:block'>
                    <a href="/"><img src={darkLogo} alt="food hut logo" className='w-full h-full object-contain' /></a>
                </div>

                <div className='hidden lg:flex items-center lg:gap-x-12 xlg:gap-x-14 xl:gap-x-24'>
                    <div className='flex lg:gap-x-8 xlg:gap-x-12 xl:gap-x-12 dark:text-white'>
                        <Link to={'/'} className={`${homeBold}`}>Home</Link>
                        <a href="/#todaysOffer">Today special offers</a>
                        <a href="/#ourMenu">Our Menu</a>
                    </div>
                    <div className='flex lg:gap-x-8 xlg:gap-x-12 xl:gap-x-12'>
                        <Link to={'/sign in'} className='bg-transparent hover:bg-secondary border-2 border-firstBlack dark:border-white hover:border-secondary flex items-center dark:text-white dark:hover:text-darkModeBlack py-2.5 px-5 
                        rounded-large capitalize animation duration-300 ease-in-out'><IoPersonSharp className='me-3 text-lg' /> Sign in</Link>

                        <Link to={'/login'} className='bg-primary flex items-center text-white dark:text-darkModeBlack py-2.5 px-5 
                        rounded-large capitalize animation duration-300 ease-in-out'><IoLogInOutline className='me-3 text-lg' /> Login</Link>
                    </div>
                </div>
                <div className='block lg:hidden dark:text-white' onClick={() => { setShowOffcanvas(!showOffcanvas) }}>
                    <LuMenu className={`text-4xl mt-3 ${showOffcanvas ? 'hidden' : 'block'}`} />
                    <IoClose className={`text-4xl mt-3 ${showOffcanvas ? 'block' : 'hidden'}`} />
                </div>
            </div>
            <div className={`absolute right-6 md:right-10 lg:right-12 xlg:right-16 left-6 md:left-10 lg:left-12 xlg:left-16 top-24 z-20 transition-all duration-400 ease ${showOffcanvas ? 'block' : 'hidden'}`}>
                <OffCanvas closeOffcanvas={() => { setShowOffcanvas(false) }} />
            </div>
        </nav>
    )
}
