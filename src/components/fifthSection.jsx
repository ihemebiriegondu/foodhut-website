import React from 'react'
import fruitsImage from '../assests/little-decors/5a3ac62578a9f8.png'
import spiralDecor from '../assests/images/Group 8441.png'
import chefImage from '../assests/images/Group 8482.png'
import chefImageMobile from '../assests/images/Group 8481.png'
import leaveDecor from '../assests/little-decors/SeekPng.png'
import dotDecor from '../assests/little-decors/Vector 10.png'
import mobileDownload from '../assests/images/Mobile app store badge.png'
import mobileDownload2 from '../assests/images/Mobile app store badge (1).png'

export default function FifthSection() {
    return (
        <section className='px-6 md:px-10 lg:px-12 xlg:px-16 flex flex-col-reverse md:flex-row md:gap-x-6 lg:gap-x-16 pb-32 md:pb-20 lg:pb-0'>
            <div className='md:basis-3/5'>
                <div className=''>
                    <h2 className='leading-10 xsm:leading-[3.5rem] xlg:leading-[4.5rem] text-4xl xsm:text-5xl xlg:text-6xl font-bold text-black mb-12'>It’s Now <span className='text-primary'>More Easy</span> to <span className='text-secondary'>Order</span> by Our Mobile <span className='text-primary'>App</span></h2>
                </div>
                <p className='text-lg opacity-80 mb-11'>All you need to do is downlode one of the best delivery apps, make a and most companies are opting  for mobile app devlopment for food delivery</p>
                <div className='flex gap-x-7'>
                    <img src={mobileDownload} alt="google download" />
                    <img src={mobileDownload2} alt="apple download" />
                </div>
            </div>
            <div className='md:basis-2/5 md:pb-0 pb-36 block md:hidden'>
                <div className='-mt-36 relative'>
                    <div className='relative z-20 w-full xsm:w-4/5 md:w-full mx-auto'>
                        <img src={chefImageMobile} alt="chef img" className='mx-auto' />
                    </div>

                    <div className='absolute -right-8 top-4 xsm:-right-12 md:-right-16 md:top-11 z-30 w-2/5 xsm:w-1/3 md:w-2/5 h-40 md:h-64'>
                        <img src={fruitsImage} alt="fruit decor" className='w-full h-full object-scale-down' />
                    </div>
                    <div className='absolute -right-6 top-0 xsm:top-48 sm:top-60 sm:-right-16 top-56 z-10 w-2/5 md:w-3/5'>
                        <img src={spiralDecor} alt="spiral decor" className='w-full h-full object-scale-down' />
                    </div>
                    <div className='absolute right-6 -bottom-10 xsm:right-20 sm:right-12 xsm:-bottom-16 z-10 w-2/5 xsm:w-1/3 md:w-2/5'>
                        <img src={leaveDecor} alt="leave decor" className='w-full h-full object-scale-down' />
                    </div>
                    <div className='absolute -right-6 -bottom-10 xsm:-bottom-16 sm:-bottom-12 md:-right-24 md:-bottom-24 z-0 w-1/3 xsm:w-1/4 sm:w-1/4 md:w-2/5'>
                        <img src={dotDecor} alt="dots decor" className='w-full h-full object-scale-down' />
                    </div>
                </div>
            </div>
            <div className='md:basis-2/5 md:pb-0 pb-36 w-96 md:w-full hidden md:block'>
                <div className='md:-mt-28 lg:-mt-36 w-full h-full mx-auto'>
                    <div className='-me-[530px] xlg:-me-[630px] xl:-me-[730px] mb-32 w-auto h-full'>
                        <img src={chefImage} alt="chef img" className='mx-auto w-full h-full object-cover md:object-scale-down' />
                    </div>
                </div>
            </div>
        </section>
    )
}
