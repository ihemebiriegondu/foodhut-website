import React from 'react'
import Nav from './nav'
import HeroSection from './heroSection'
import TopDottedLine from './topDottedLine'
import spiralIcon from '../assests/little-icons/Group 8438.png'

export default function Header() {
    return (
        <header className='px-16 bg-headerBg relative' >
            <div className='absolute right-0 z-0'>
                <img src={spiralIcon} alt="spiral icon" />
            </div>
            <Nav />
            <div className='absolute top-16 left-52'>
                <TopDottedLine />
            </div>
            <HeroSection />
        </header>
    )
}