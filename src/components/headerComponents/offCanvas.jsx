import React from 'react'
import { Link } from 'react-router-dom'

export default function OffCanvas({closeOffcanvas}) {
    return (
        <div className='bg-primary px-8 py-5 rounded-lg shadow-lg shadow-primary/30 block lg:hidden' onClick={() => {closeOffcanvas()}}>
            <ul className='flex flex-col gap-y-3 text-white dark:text-darkModeBlack'>
                <li><a href="/#todaysOffer">Today special offers</a></li>
                <li><a href="/">Why FoodHut</a></li>
                <li><a href="/#ourMenu">Our Menu</a></li>
                <li><Link to={'/foodspin'}>Our Popular food</Link></li>
            </ul>
        </div>
    )
}
