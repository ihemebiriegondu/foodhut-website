import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

export default function Slider() {
    return (
        <div className='flex flex-col items-center animate-bounce'>
            <p className='bg-secondary rounded-full w-2.5 h-2.5 mb-1'></p>
            <p className='bg-secondary rounded-full w-2 h-2 mb-1'></p>
            <p className='bg-secondary rounded-full w-1.5 h-1.5 mb-1'></p>
            <p className='bg-secondary rounded-full w-1 h-1 -mb-2'></p>
            <IoIosArrowDown className='text-3xl text-primary' />
        </div>
    )
}
