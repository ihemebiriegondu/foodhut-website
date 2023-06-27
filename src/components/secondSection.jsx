import React from 'react'

import dotIcon from '../assests/little-decors/Group (1).png'
import rosemary from '../assests/little-decors/rosemary.png'
import FoodSwiper1 from './section2Components/foodSwiper1'

export default function SecondSection() {

    return (
        <section className='px-6 md:px-10 lg:px-12 xlg:px-16 mb-24 md:mb-40 lg:mb-64 relative'>
            <div className='absolute left-0 top-12'>
                <img src={dotIcon} alt="dots" />
            </div>
            <div className='text-center mb-16'>
                <h2 className='text-5xl xlg:text-6xl font-bold text-firstBlack mb-6 capitalize flex flex-wrap gap-x-3 gap-y-2 justify-center'>Today <span className='text-primary'>special</span> offers</h2>
                <p className='text-lg w-full sm:w-11/12 md:w-5/6 lg:w-3/4 xl:w-2/3 mx-auto capitalize'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
            <FoodSwiper1 />
            <div className='absolute right-0 -bottom-32'>
                <div className='w-20 sm:w-28'>
                    <img src={rosemary} alt="rosemary decor" className='me-0' />
                </div>
            </div>
        </section>
    )
}
