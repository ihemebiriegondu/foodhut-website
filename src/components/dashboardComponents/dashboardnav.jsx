import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assests/little-decors/Logo (1).png'
import darkLogo from '../../assests/little-decors/Logo.png'

import { BiSolidCart, BiSearch } from 'react-icons/bi'

export default function Dashboardnav({ dashboardboldFont, menuboldFont }) {
    return (
        <nav>
            <div className='flex justify-between gap-x-3 items-center lg:mb-8 relative z-10'>
                <div className='w-14 h-28 xsm:w-[4.875rem] xsm:h-[7.563rem] ms-1.5 dark:hidden'>
                    <a href="/dashboard"><img src={Logo} alt="food hut logo" className='w-full h-full object-contain' /></a>
                </div>
                <div className='w-14 h-28 xsm:w-[4.875rem] xsm:h-[7.563rem] ms-1.5 hidden dark:block'>
                    <a href="/dashboard"><img src={darkLogo} alt="food hut logo" className='w-full h-full object-contain' /></a>
                </div>

                <div className='flex items-center justify-between gap-x-6 sm:gap-x-12 xlg:gap-x-14 xl:gap-x-24 basis-3/5 lg:basis-3/4'>
                    <div className='flex gap-x-4 sm:gap-x-8 xlg:gap-x-12 xl:gap-x-12 dark:text-white text-sm xsm:text-base sm:text-lg'>
                        <Link className={`${dashboardboldFont}`} to={'/dashboard'}>Dashboard</Link>
                        <Link className={`${menuboldFont}`} to={'/menu'}>Menu</Link>
                    </div>
                    <div className='flex items-center gap-x-4 sm:gap-x-8 xlg:gap-x-12 xl:gap-x-12'>
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
