import React from 'react'
import { BiSearch, BiPlay } from 'react-icons/bi'

import FancyButton from '../fancyButton'
import SideDottedLine from './sideDottedLine'

import heroImage from '../../assests/images/Group 8477.png'
import loveIcon from '../../assests/little-decors/Group 8426.png'
import scratch from '../../assests/little-decors/Decore.png'
import orange from '../../assests/little-decors/Orange.png'
import mint from '../../assests/little-decors/Mint.png'
import Slider from './slider'

export default function HeroSection() {
    return (
        <section className='flex flex-col-reverse md:flex-row items-center lg:items-start lg:gap-x-16 relative z-10'>
            <div className='hidden lg:block absolute right-0 z-20'>
                <SideDottedLine />
            </div>
            <div className='basis-1/2 pt-14'>
                <div className='flex items-center w-fit bg-primary/20 p-1.5 rounded-large mb-6'>
                    <img src={loveIcon} alt="heart icon" className='w-5 h-5 me-1.5' />
                    <p className='font-inter text-sm dark:text-white'>People Trust us</p>
                </div>
                <div className='mb-7 relative'>
                    <h1 className='text-5xl xlg:text-6xl font-extrabold leading-none text-secondBlack dark:text-white flex flex-wrap gap-x-3'>We're <span className='text-primary'>Serious</span> For <span className='text-primary'>Food</span> &
                        <span className='text-secondary inline'>
                            <span className='flex flex-col'>
                                <span> Delivery<span className='text-secondBlack dark:text-white'>.</span></span>
                                <p className='flex justify-end pt-3'>
                                    <img src={scratch} alt="scratch icon" />
                                </p>
                            </span>
                        </span>
                    </h1>
                    <div className='w-[84px] h-[74px] absolute top-0 right-0'>
                        <img src={orange} alt="orange icon" className='w-full h-full object-contain' />
                    </div>
                </div >
                <div className='lg:me-7'>
                    <p className='text-xl xlg:text-2xl tracking-tight mb-7 dark:text-white'>Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.</p>
                    <div className='border border-firstBlack dark:border-white rounded-large overflow-hidden flex items-center px-4 mb-9 bg-white dark:bg-darkModeBlack'>
                        <BiSearch className='text-2xl dark:text-white' />
                        <input type="text" placeholder='Search food' className='w-full py-4 px-3 outline-0 border-0 placeholder:firstBlack dark:bg-darkModeBlack dark:text-white' />
                        <div className='p-2 bg-secondary rounded-full'>
                            <BiSearch className='text-white dark:text-darkModeBlack text-2xl' />
                        </div>
                    </div>
                </div>
                <div className='flex items-center flex-wrap gap-y-3 xsm:gap-y-0 gap-x-5 sm:gap-x-8 md:gap-x-5 lg:gap-x-8 xsm:text-base text-sm'>
                    <FancyButton content={'Download App'} />
                    <a href='/' className='flex items-center gap-x-3 sm:gap-x-5 md:gap-x-3 lg:gap-x-5 group'>
                        <button className='bg-white dark:bg-darkModeBlack text-firstBlack p-3 rounded-full shadow-lg group-hover:shadow-xl shadow-primary/20 group-hover:shadow-primary/20 animation duration-200 ease-in-out'><BiPlay className='text-primary text-lg' /></button>
                        <p className='text-gray-500 dark:text-white'>Watch Video</p>
                    </a>
                </div>
                <div>
                    <a className='mt-16 hidden md:flex flex-col items-start w-fit' href="/#chef"><Slider /></a>
                </div>
            </div >
            <div className='basis-1/2 relative z-20'>
                <div className='relative'>
                    <img src={heroImage} alt="hero img" className='mx-auto' />
                </div>
                <div className='absolute -right-12 bottom-1/4'>
                    <img src={mint} alt="mint icon" />
                </div>
            </div>
        </section >
    )
}
