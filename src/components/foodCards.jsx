import React from 'react'
import { BiSolidStar } from 'react-icons/bi'

import kebab from '../assests/images/unsplash_UC0HZdUitWY.png'
import reviewImg1 from '../assests/images/unsplash_7Sz71zuuW4k.png'
import FancyButton from './fancyButton'

export default function FoodCards() {
    return (
        <div className='w-80 flex flex-col items-center mb-60'>
            <div className='bg-cardEllipseBg rotate-17.5 p-4 rounded-full mb-2'>
                <div className='-rotate-17.5 bg-[#f6ebeb] rounded-full p-3 overflow-hidden'>
                    <div className='w-48 h-48 overflow-hidden rounded-full'>
                        <img src={kebab} alt="foods images" className='w-full h-full object-cover rounded-full' />
                    </div>
                </div>
            </div>
            <div className='bg-cardBg flex flex-col items-center rounded-mini px-8'>
                <div className='flex items-center mb-7'>
                    <div className='flex me-2.5'>
                        <div className='w-9 rounded-full overflow-hidden h-9'>
                            <img src={reviewImg1} alt="testimonials" className='w-full h-full object-cover' />
                        </div>
                        <div className='w-9 rounded-full overflow-hidden h-9 -ms-5'>
                            <img src={reviewImg1} alt="testimonials" className='w-full h-full object-cover' />
                        </div>
                        <div className='w-9 rounded-full overflow-hidden h-9 -ms-5'>
                            <img src={reviewImg1} alt="testimonials" className='w-full h-full object-cover' />
                        </div>
                    </div>
                    <BiSolidStar className='text-2xl text-yellow-400' />
                    <p className='text-lg ms-1.5'>(4.5)</p>
                </div>
                <div className='text-center mb-6'>
                    <h6 className='text-2xl text-primary font-bold mb-4'>Kebab</h6>
                    <p className='capitalize'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
                <div className='-mb-5'>
                    <FancyButton content={'Order Now'} background={'bg-primary'} color={'text-white'} />
                </div>
            </div>
        </div>
    )
}
