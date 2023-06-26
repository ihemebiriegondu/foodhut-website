import React from 'react'
import chefImage from '../assests/images/Group 8480.png'

export default function ThirdSection() {
    return (
        <section className='pe-6 md:pe-10 lg:pe-12 xlg:pe-16 relative flex gap-x-16'>
            <div className='basis-2/5'>
                <div className='-mt-72 -me-60'>
                    <img src={chefImage} alt="chef img" />
                </div>
            </div>
            <div className='basis-3/5 pt-32'>
                <div className='w-3/4'>
                    <h2 className='text-5xl xlg:text-6xl font-bold text-black mb-5 flex flex-wrap gap-x-3 gap-y-2'>We are <span className='text-primary'>more</span> than <span className='text-secondary'>multiple</span> service</h2>
                </div>
                <p className='text-lg opacity-80 mb-7'>This is a type of resturent which typically serves food and drink, in addition to light refreshments such as baked goods or snacks. The term comes frome the rench word meaning food</p>
                <div>
                    
                </div>
            </div>
        </section>
    )
}
