import React from 'react'
import chefImage from '../assests/images/Group 8480.png'
import darkChefImage from '../assests/images/Group 8483.png'
import mobileChefImage from '../assests/images/Group 8472 (1).png'
import darkMobileChefImage from '../assests/images/Group 8472.png'
import onlineOrderIcon from '../assests/images/image 15.png'
import timerangeIcon from '../assests/images/image 17.png'
import bookingIcon from '../assests/images/image 18.png'
import FancyButton from './fancyButton'
import ArrowVector from './section3Components/arrowVector'

export default function ThirdSection() {
    return (
        <section className='bg-lastSectionBg md:pe-10 lg:pe-12 xlg:pe-16 relative dark:text-white flex flex-col md:flex-row lg:gap-x-16 pb-16 md:pb-24'>
            <div className='hidden md:block absolute md:left-[240px] md:-top-12 lg:left-[340px] lg:-top-20 xlg:left-[370px] xlg:-top-14 xl:left-[425px] xl:-top-2 lg:z-20'>
                <ArrowVector />
            </div>
            <div className='md:basis-2/5' id='chef'>
                <div className='-mt-72 me-0 lg:-me-60 -mb-80 hidden lg:block'>
                    <img src={chefImage} alt="chef img" className='dark:hidden' />
                    <img src={darkChefImage} alt="chef img" className='hidden dark:block' />
                </div>
                <div className='-mt-56 sm:-mt-72 me-0 -mb-72 block lg:hidden'>
                    <img src={mobileChefImage} alt="chef img" className='-me-20 md:me-0 dark:hidden' />
                    <img src={darkMobileChefImage} alt="chef img" className='-me-20 md:me-0 hidden dark:block' />
                </div>
            </div>
            <div className='md:basis-3/5 md:pt-16 xlg:pt-24 xl:pt-32 md:px-0 px-6'>
                <div className='w-full xl:w-3/4'>
                    <h2 className='text-5xl xlg:text-6xl font-bold text-black dark:text-white mb-5 flex flex-wrap gap-x-3 gap-y-2'>We are <span className='text-primary'>more</span> than <span className='text-secondary'>multiple</span> service</h2>
                </div>
                <p className='text-lg opacity-80 mb-7'>This is a type of resturent which typically serves food and drink, in addition to light refreshments such as baked goods or snacks. The term comes frome the rench word meaning food</p>
                <div className='flex flex-col sm:flex-row gap-y-6 gap-x-20'>
                    <div className='flex flex-col gap-y-7'>
                        <div className='flex items-center gap-x-2.5'>
                            <img src={onlineOrderIcon} alt="online order icon" />
                            <p>Online Order</p>
                        </div>
                        <div className='flex items-center gap-x-2.5'>
                            <img src={bookingIcon} alt="online order icon" />
                            <p>Pre-Reservation</p>
                        </div>
                        <div className='flex items-center gap-x-2.5'>
                            <img src={bookingIcon} alt="online order icon" />
                            <p>Super Chef</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-7'>
                        <div className='flex items-center gap-x-2.5'>
                            <img src={timerangeIcon} alt="online order icon" />
                            <p>24/7 Service</p>
                        </div>
                        <div className='flex items-center gap-x-2.5'>
                            <img src={bookingIcon} alt="online order icon" />
                            <p>Organized Foodhut Place</p>
                        </div>
                        <div className='flex items-center gap-x-2.5'>
                            <img src={bookingIcon} alt="online order icon" />
                            <p>Clean Kitchen</p>
                        </div>
                    </div>
                </div>
                <div className='mt-10'>
                    <FancyButton content={'About Us'} />
                </div>
            </div>
        </section>
    )
}
