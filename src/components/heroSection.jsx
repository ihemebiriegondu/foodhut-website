import React from 'react'
import loveIcon from '../assests/little-icons/Group 8426.png'

export default function HeroSection() {
    return (
        <section>
            <div>
                <div className='flex items-center w-fit bg-primary/10 p-1.5 rounded-large mb-6'>
                    <img src={loveIcon} alt="heart icon" className='w-5 h-5 me-1.5' />
                    <p className='font-inter text-sm'>People Trust us</p>
                </div>
                <h1 className='text-6xl font-extrabold mb-7 leading-none text-secondBlack'>We're <span className='text-primary'>Serious</span> For <span className='text-primary'>Food</span> & <span className='text-secondary'>Delivery</span>.</h1>
                <p className='text-2xl tracking-tight mb-7'>Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.</p>
                <div className='border border-firstBlack'>
                    <input type="text" />
                </div>
            </div>
            <div></div>
        </section>
    )
}
