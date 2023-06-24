import React from 'react'
import loveIcon from '../assests/little-icons/Group 8426.png'
import { BiSearch } from 'react-icons/bi'

import FancyButton from './fancyButton'
import SideDottedLine from './sideDottedLine'

import heroImage from '../assests/images/Group 8477.png'
import scratch from '../assests/little-icons/Decore.png'
import orange from '../assests/little-icons/Orange.png'
import mint from '../assests/little-icons/Mint.png'
import Slider from './slider'

export default function HeroSection() {
    return (
        <section className='flex gap-x-16 relative z-10'>
            <div className='absolute right-0 z-20'>
                <SideDottedLine />
            </div>
            <div className='basis-1/2 pt-14'>
                <div className='flex items-center w-fit bg-primary/10 p-1.5 rounded-large mb-6'>
                    <img src={loveIcon} alt="heart icon" className='w-5 h-5 me-1.5' />
                    <p className='font-inter text-sm'>People Trust us</p>
                </div>
                <div className='mb-7 relative'>
                    <h1 className='text-6xl font-extrabold leading-none text-secondBlack'>We're <span className='text-primary'>Serious</span> For <span className='text-primary'>Food</span> & <span className='text-secondary'>Delivery</span>.</h1>
                    <div className='flex justify-end pe-28 pt-3'>
                        <img src={scratch} alt="scratch icon" />
                    </div>

                    <div className='w-[84px] h-[74px] absolute top-0 right-0'>
                        <img src={orange} alt="orange icon" className='w-full h-full object-contain' />
                    </div>
                </div>
                <div className='me-7'>
                    <p className='text-2xl tracking-tight mb-7'>Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.</p>
                    <div className='border border-firstBlack rounded-large overflow-hidden flex items-center px-4 mb-9 bg-white'>
                        <BiSearch className='text-2xl' />
                        <input type="text" placeholder='Search food' className='w-full py-4 px-3 outline-0 border-0 placeholder:firstBlack' />
                        <div className='p-2 bg-secondary rounded-full'>
                            <BiSearch className='text-white text-2xl' />
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-x-8'>
                    <FancyButton content={'Login'} background={'bg-primary'} color={'text-white'} />
                    <button className='bg-white text-firstBlack py-2.5 px-5 rounded-large shadow-xl shadow-primary/20'>Sign Up</button>
                </div>
                <div className='mt-16 flex flex-col items-start'>
                    <Slider />
                </div>
            </div>
            <div className='basis-1/2 relative z-20'>
                <div className='relative'>
                    <img src={heroImage} alt="" />
                </div>
                <div className='absolute -right-12 bottom-1/4'>
                    <img src={mint} alt="mint icon" />
                </div>
            </div>
        </section>
    )
}
