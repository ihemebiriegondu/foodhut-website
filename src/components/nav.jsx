import React from 'react'
import Logo from '../assests/little-icons/Logo (1).png'
import FancyButton from './fancyButton'

export default function Nav() {
    return (
        <nav className='flex justify-between items-center mb-8 relative z-10'>
            <div className='w-[4.875rem] h-[7.563rem] ms-1.5'>
                <img src={Logo} alt="food hut logo" className='w-full h-full object-contain' />
            </div>

            <div className='flex items-center gap-x-24'>
                <div className='flex gap-x-12'>
                    <a href="/">Today special offers</a>
                    <a href="/">Why FoodHut</a>
                    <a href="/">Our Menu</a>
                    <a href="/">Our Popular food</a>
                </div>
                <div>
                    <FancyButton content={'Download App'} background={'bg-primary'} color={'text-white'} />
                </div>
            </div>
        </nav>
    )
}
