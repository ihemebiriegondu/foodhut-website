import React from 'react'
import Nav from './headerComponents/nav'
import HeroSection from './headerComponents/heroSection'
import TopDottedLine from './headerComponents/topDottedLine'
import MobileSideDottedLine from './headerComponents/mobileSideDottedLine'

import spiralIcon from '../assests/little-decors/Group 8438.png'

export default function Header() {
    return (
        <header className='bg-headerBg relative overflow-hidden pb-24 lg:pb-36 px-6 md:px-10 lg:px-12 xlg:px-16' >
            <div className='absolute top-32 xsm:top-36 sm:top-40 md:top-52 lg:top-0 -right-4 xsm:-right-6 sm:-right-8 md:-right-8 lg:right-0 z-0 w-1/3 md:w-1/4 xl:w-auto'>
                <img src={spiralIcon} alt="spiral icon" />
            </div>
            <Nav homeBold={'font-semibold'} />
            <div className='hidden lg:block absolute lg:top-20 xlg:top-16 left-52'>
                <TopDottedLine />
            </div>
            <div className='block lg:hidden absolute top-32 sm:top-44 md:top-52 right-14 sm:right-28 md:right-24 z-10'>
                <MobileSideDottedLine />
            </div>
            <HeroSection />
        </header>
    )
}
