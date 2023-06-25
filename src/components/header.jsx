import React from 'react'
import Nav from './nav'
import HeroSection from './heroSection'
import TopDottedLine from './topDottedLine'
import MobileSideDottedLine from './mobileSideDottedLine'

import spiralIcon from '../assests/little-icons/Group 8438.png'

export default function Header() {
    return (
        <header className='px-6 md:px-10 lg:px-12 xlg:px-16 bg-headerBg relative overflow-hidden' >
            <div className='absolute right-0 z-0 w-1/2 md:w-auto'>
                <img src={spiralIcon} alt="spiral icon" />
            </div>
            <Nav />
            <div className='hidden lg:block absolute lg:top-20 xlg:top-16 left-52'>
                <TopDottedLine />
            </div>
            <div className='block lg:hidden absolute top-32 sm:top-44 md:top-52 right-14 sm:right-28 md:right-40 z-10'>
                <MobileSideDottedLine />
            </div>
            <HeroSection />
        </header>
    )
}
