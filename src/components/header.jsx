import React from 'react'
import Nav from './nav'
import HeroSection from './heroSection'
import TopDottedLine from './topDottedLine'
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
            <HeroSection />
        </header>
    )
}
