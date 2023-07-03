import React from 'react'
import FancyButton from '../fancyButton'
import { AiOutlineArrowDown } from 'react-icons/ai'

import foodEllipse from '../../assests/images/Ellipse 4 (1).png'
import food1 from '../../assests/images/pngfind 1.png'

export default function Foodspin() {

    return (
        <div className='dark:text-white flex items-center gap-x-9 py-32'>
            <div className='absolute z-20 -right-44 bottom-64 w-[1177px] h-[1177px] bg-primary/10 rounded-full'>
                <div className='absolute left-auto right-68 top-auto bottom-12 z-20'>
                    <img src={foodEllipse} alt="" className='w-full h-full' />
                </div>
                <div>

                </div>
            </div>
            <div className='basis-1/4'>
                <h1 className='text-4.5xl font-semibold text-primary'>$35</h1>
                <h3 className='text-4xl font-medium mb-3'>Asian Cucumber Salad</h3>
                <p className='text-sm mb-7'>Asian Cucumber Salad Recipe made with crunchy cucumber, onion, rice wine vinegar, and a few secret ingredients!</p>
                <FancyButton content={'ORDER NOW'} />
            </div>
            <div className='basis-3/4 pt-72 relative z-30'>

                <div className='flex items-end justify-end gap-x-24'>
                    <div className='w-fit bg-white dark:bg-darkModeBlack shadow-sm hover:shadow-md shadow-secondary hover:shadow-secondary animation duration-300 p-2.5 md:p-3 rounded-full cursor-pointer'>
                        <AiOutlineArrowDown className='text-primary text-xl md:text-2xl' />
                    </div>
                    <div className='w-72 h-72'>
                        <img src={food1} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='w-fit bg-white dark:bg-darkModeBlack shadow-sm hover:shadow-md shadow-secondary hover:shadow-secondary animation duration-300 p-2.5 md:p-3 rounded-full cursor-pointer'>
                        <AiOutlineArrowDown className='text-primary text-xl md:text-2xl' />
                    </div>
                </div>
            </div>
        </div>
    )
}
