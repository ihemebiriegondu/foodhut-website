import React from 'react'
import fruitsImage from '../assests/little-decors/5a3ac62578a9f8.png'
import spiralDecor from '../assests/images/Group 8441.png'
import chefImage from '../assests/little-decors/Group 8481.png'
import leaveDecor from '../assests/little-decors/SeekPng.png'

export default function FifthSection() {
    return (
        <section className='px-6 md:px-10 lg:px-12 xlg:px-16 relative flex flex-col-reverse md:flex-row lg:gap-x-16 pb-32 md:pb-48 lg:pb-52 relative'>
            <div className='md:basis-3/5'>
                <div className=''>
                    <h2 className='leading-10 xsm:leading-[3.5rem] xlg:leading-[4.5rem] text-4xl xsm:text-5xl xlg:text-6xl font-bold text-black mb-12'>It’s Now <span className='text-primary'>More Easy</span> to <span className='text-secondary'>Order</span> by Our Mobile <span className='text-primary'>App</span></h2>
                </div>
                <p className='text-lg opacity-80 mb-7'>This is a type of resturent which typically serves food and drink, in addition to light refreshments such as baked goods or snacks. The term comes frome the rench word meaning food</p>
            </div>
            <div className='md:basis-2/5'>
                <div className='md:-mt-36 relative z-20'>
                    <img src={chefImage} alt="chef img" />
                </div>

                <div className='absolute right-0 -top-44 z-30'>
                    <img src={fruitsImage} alt="chef img" />
                </div>
                <div className='absolute right-0 -bottom-16 z-10'>
                    <img src={spiralDecor} alt="chef img" />
                </div>
                <div className='absolute right-16 bottom-28 z-10'>
                    <img src={leaveDecor} alt="chef img" />
                </div>
            </div>
        </section>
    )
}
