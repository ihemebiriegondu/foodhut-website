import React from 'react'
import Nav from './nav'
import HeroSection from './heroSection'
import TopDottedLine from './topDottedLine'

export default function Header() {
    return (
        <header className='px-16 bg-headerBg' >
            <Nav />
            <div className='absolute top-20 left-52'>
                <TopDottedLine />
            </div>
            <HeroSection />
        </header>
    )
}
