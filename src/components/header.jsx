import React from 'react'
import Nav from './nav'
import HeroSection from './heroSection'

export default function Header() {
    return (
        <header className='px-16' >
            <Nav />
            <HeroSection />
        </header>
    )
}
