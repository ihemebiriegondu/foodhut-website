import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assests/little-decors/Logo (1).png'
import darkLogo from '../../assests/little-decors/Logo.png'

import { BiSolidCart, BiSearch } from 'react-icons/bi'

export default function Dashboardnav({ dashboardboldFont, menuboldFont }) {
    return (
        <nav>
            <div className='flex justify-between items-center lg:mb-8 relative z-10'>
                <div className='w-[4.875rem] h-[7.563rem] ms-1.5 dark:hidden'>
                    <a href="/dashboard"><img src={Logo} alt="food hut logo" className='w-full h-full object-contain' /></a>
                </div>
                <div className='w-[4.875rem] h-[7.563rem] ms-1.5 hidden dark:block'>
                    <a href="/dashboard"><img src={darkLogo} alt="food hut logo" className='w-full h-full object-contain' /></a>
                </div>

                <div className='flex items-center gap-x-12 xlg:gap-x-14 xl:gap-x-24'>
                    <div className='flex gap-x-8 xlg:gap-x-12 xl:gap-x-12 dark:text-white text-lg'>
                        <Link className={`${dashboardboldFont}`} to={'/dashboard'}>Dashboard</Link>
                        <Link className={`${menuboldFont}`} to={'/menu'}>Menu</Link>
                    </div>
                    <div className='flex items-center gap-x-8 xlg:gap-x-12 xl:gap-x-12'>
                        <div className='relative'>
                            <BiSolidCart className='text-primary text-2xl relative' />
                            <div className='bg-secondary rounded-full px-1 absolute -top-2 -right-2'>
                                <p className='text-xs font-semibold'>3</p>
                            </div>
                        </div>
                        <BiSearch className='dark:text-white text-xl' />
                    </div>
                </div>
            </div>
        </nav>
    )
}
