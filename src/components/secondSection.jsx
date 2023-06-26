import React from 'react'
import FoodCards from './foodCards'

import dotIcon from '../assests/little-decors/Group (1).png'
import rosemary from '../assests/little-decors/rosemary.png'
import kebab from '../assests/images/unsplash_UC0HZdUitWY.png'
import reviewImg1 from '../assests/images/unsplash_7Sz71zuuW4k.png'

export default function SecondSection() {

    const todayOffers = [
        { foodImage: kebab, orderAmount: '105', rating: '4.5', testimonialImage1: reviewImg1, testimonialImage2: reviewImg1, testimonialImage3: reviewImg1, foodName: 'Kebab', foodDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
        { foodImage: kebab, orderAmount: '105', rating: '4.5', testimonialImage1: reviewImg1, testimonialImage2: reviewImg1, testimonialImage3: reviewImg1, foodName: 'Kebab', foodDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
        { foodImage: kebab, orderAmount: '105', rating: '4.5', testimonialImage1: reviewImg1, testimonialImage2: reviewImg1, testimonialImage3: reviewImg1, foodName: 'Kebab', foodDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
        { foodImage: kebab, orderAmount: '105', rating: '4.5', testimonialImage1: reviewImg1, testimonialImage2: reviewImg1, testimonialImage3: reviewImg1, foodName: 'Kebab', foodDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
    ]

    return (
        <section className='px-6 md:px-10 lg:px-12 xlg:px-16 mb-64 relative'>
            <div className='absolute left-0 top-12'>
                <img src={dotIcon} alt="dots" />
            </div>
            <div className='text-center mb-16'>
                <h2 className='text-5xl xlg:text-6xl font-bold text-firstBlack mb-6 capitalize flex flex-wrap gap-x-3 gap-y-2 justify-center'>Today <span className='text-primary'>special</span> offers</h2>
                <p className='text-lg w-full sm:w-11/12 md:w-5/6 lg:w-3/4 xl:w-2/3 mx-auto capitalize'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
            <div>
                <div className='flex justify-between'>
                    {
                        todayOffers.map((offer, id) => (
                            <FoodCards key={id} foodImage={offer.foodImage} orderAmount={offer.orderAmount} rating={offer.rating} testimonialImage1={offer.testimonialImage1} testimonialImage2={offer.testimonialImage2} testimonialImage3={offer.testimonialImage3} foodName={offer.foodName} foodDescription={offer.foodDescription} />
                        ))
                    }
                </div>
            </div>
            <div className='absolute right-0 -bottom-32'>
                <img src={rosemary} alt="rosemary decor" />
            </div>
        </section>
    )
}
