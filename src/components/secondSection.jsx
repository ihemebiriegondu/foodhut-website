import React from 'react'
import dotIcon from '../assests/little-icons/Group (1).png'
import FoodCards from './foodCards'

export default function SecondSection() {
    return (
        <section className='px-6 md:px-10 lg:px-12 xlg:px-16'>
            <div className='text-center mb-16'>
                <h1 className='text-5xl xlg:text-6xl font-bold text-firstBlack mb-6 capitalize'>Today <span className='text-primary'>special</span> offers</h1>
                <p className='text-lg w-full sm:w-11/12 md:w-5/6 lg:w-3/4 xl:w-2/3 mx-auto capitalize'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
            <div>
                <FoodCards />
            </div>
        </section>
    )
}
