import React from 'react'
import chefImage from '../assests/images/Group 8480.png'
import onlineOrderIcon from '../assests/images/image 15.png'
import timerangeIcon from '../assests/images/image 17.png'
import bookingIcon from '../assests/images/image 18.png'
import FancyButton from './fancyButton'
import ArrowVector from './section3Components/arrowVector'

export default function ThirdSection() {
    return (
        <section className='pe-6 md:pe-10 lg:pe-12 xlg:pe-16 relative flex flex-col lg:flex-row gap-x-16'>
            <div className='absolute left-[425px] -top-2 z-20'>
                <ArrowVector />
            </div>
            <div className='basis-2/5'>
                <div className='-mt-72 me:0 lg:-me-60'>
                    <img src={chefImage} alt="chef img" />
                </div>
            </div>
            <div className='basis-3/5 pt-32'>
                <div className='w-3/4'>
                    <h2 className='text-5xl xlg:text-6xl font-bold text-black mb-5 flex flex-wrap gap-x-3 gap-y-2'>We are <span className='text-primary'>more</span> than <span className='text-secondary'>multiple</span> service</h2>
                </div>
                <p className='text-lg opacity-80 mb-7'>This is a type of resturent which typically serves food and drink, in addition to light refreshments such as baked goods or snacks. The term comes frome the rench word meaning food</p>
                <div className='flex gap-x-20'>
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
                    <FancyButton content={'About Us'} color={'text-white'} background={'bg-primary'} />
                </div>
            </div>
        </section>
    )
}
