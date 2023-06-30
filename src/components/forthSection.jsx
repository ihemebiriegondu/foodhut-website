import React from 'react'
import FoodTabs from './section4Components/foodTabs'

export default function ForthSection() {
    return (
        <section className='px-8 lg:px-16 pb-24 md:pb-48 lg:pb-72'>
            <div className='w-full md:w-5/6 lg:w-3/4 mx-auto'>
                <h2 className='leading-10 xsm:leading-[4rem] xlg:leading-[5rem] text-4xl xsm:text-5xl xlg:text-6xl font-bold text-black mb-12 text-center capitalize'><span className='text-primary'>Menu</span> that <span className='text-secondary'>always</span> make you fall in <span className='text-primary'>love</span></h2>
            </div>
            <div>
                <FoodTabs />
            </div>
        </section>
    )
}
