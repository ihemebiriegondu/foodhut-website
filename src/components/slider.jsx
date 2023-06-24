import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

export default function Slider() {
    return (
        <div className='flex flex-col items-center slider'>
            <p className='bg-secondary rounded-full first-slide w-2.5 h-2.5 mb-1'></p>
            <p className='bg-secondary rounded-full second-slide w-2 h-2 mb-1'></p>
            <p className='bg-secondary rounded-full third-slide w-1.5 h-1.5 mb-1'></p>
            <p className='bg-secondary rounded-full forth-slide w-1 h-1'></p>
            <IoIosArrowDown className='text-3xl text-primary' />
        </div>
    )
}
