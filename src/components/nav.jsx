import React from 'react'
import Logo from '../assests/little-icons/Logo (1).png'
import FancyButton from './fancyButton'

import { LuMenu } from 'react-icons/lu'

export default function Nav() {
    return (
        <nav className='flex justify-between items-center mb-8 relative z-10'>
            <div className='w-[4.875rem] h-[7.563rem] ms-1.5'>
                <img src={Logo} alt="food hut logo" className='w-full h-full object-contain' />
            </div>

            <div className='hidden lg:flex items-center lg:gap-x-12 xlg:gap-x-14 xl:gap-x-24'>
                <div className='flex lg:gap-x-8 xlg:gap-x-12 xl:gap-x-12'>
                    <a href="/">Today special offers</a>
                    <a href="/">Why FoodHut</a>
                    <a href="/">Our Menu</a>
                    <a href="/">Our Popular food</a>
                </div>
                <div>
                    <FancyButton content={'Download App'} background={'bg-primary'} color={'text-white'} />
                </div>
            </div>
            <div className='block lg:hidden'>
                <LuMenu className='text-4xl' />
            </div>
        </nav>
    )
}
