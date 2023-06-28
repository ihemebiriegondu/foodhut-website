import React from 'react'
import { BiSolidStar } from 'react-icons/bi'

import FancyButton from './fancyButton'

export default function FoodCards({foodImage, orderAmount, rating, testimonialImage1, testimonialImage2, testimonialImage3, foodName, foodDescription}) {
    return (
        <div className='w-72 xsm:w-80 flex flex-col items-center'>
            <div className='bg-cardEllipseBg rotate-17.5 p-4 rounded-full mb-2'>
                <div className='-rotate-17.5 bg-white rounded-full p-3 relative'>
                    <div className='w-48 h-48 overflow-hidden rounded-full'>
                        <img src={foodImage} alt="foods images" className='w-full h-full object-cover rounded-full' />
                    </div>
                    <div className='absolute bottom-0 right-0 text-white border-4 border-white bg-yellow-300 px-4 py-4 rounded-full'>
                        <p>{orderAmount}</p>
                    </div>
                </div>
            </div>
            <div className='bg-cardBg flex flex-col items-center rounded-mini px-8'>
                <div className='flex items-center mb-7'>
                    <div className='flex me-2.5'>
                        <div className='w-9 rounded-full overflow-hidden h-9'>
                            <img src={testimonialImage1} alt="testimonials" className='w-full h-full object-cover' />
                        </div>
                        <div className='w-9 rounded-full overflow-hidden h-9 -ms-5'>
                            <img src={testimonialImage2} alt="testimonials" className='w-full h-full object-cover' />
                        </div>
                        <div className='w-9 rounded-full overflow-hidden h-9 -ms-5'>
                            <img src={testimonialImage3} alt="testimonials" className='w-full h-full object-cover' />
                        </div>
                    </div>
                    <BiSolidStar className='text-2xl text-yellow-400' />
                    <p className='text-lg ms-1.5'>({rating})</p>
                </div>
                <div className='text-center mb-6'>
                    <h6 className='text-2xl text-primary font-bold mb-4'>{foodName}</h6>
                    <p className='capitalize'>{foodDescription}</p>
                </div>
                <div className='-mb-5'>
                    <FancyButton content={'Order Now'} background={'bg-primary'} color={'text-white'} />
                </div>
            </div>
        </div>
    )
}
