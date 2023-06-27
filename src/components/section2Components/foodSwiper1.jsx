import React from 'react'
import { Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import FoodCards from '../foodCards'

import kebab from '../../assests/images/unsplash_UC0HZdUitWY.png'
import reviewImg1 from '../../assests/images/unsplash_7Sz71zuuW4k.png'

export default function FoodSwiper1() {

    const todayOffers = [
        { foodImage: kebab, orderAmount: '105', rating: '4.5', testimonialImage1: reviewImg1, testimonialImage2: reviewImg1, testimonialImage3: reviewImg1, foodName: 'Kebab', foodDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
        { foodImage: kebab, orderAmount: '105', rating: '4.5', testimonialImage1: reviewImg1, testimonialImage2: reviewImg1, testimonialImage3: reviewImg1, foodName: 'Kebab', foodDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
        { foodImage: kebab, orderAmount: '105', rating: '4.5', testimonialImage1: reviewImg1, testimonialImage2: reviewImg1, testimonialImage3: reviewImg1, foodName: 'Kebab', foodDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
        { foodImage: kebab, orderAmount: '105', rating: '4.5', testimonialImage1: reviewImg1, testimonialImage2: reviewImg1, testimonialImage3: reviewImg1, foodName: 'Kebab', foodDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
        { foodImage: kebab, orderAmount: '105', rating: '4.5', testimonialImage1: reviewImg1, testimonialImage2: reviewImg1, testimonialImage3: reviewImg1, foodName: 'Kebab', foodDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
        { foodImage: kebab, orderAmount: '105', rating: '4.5', testimonialImage1: reviewImg1, testimonialImage2: reviewImg1, testimonialImage3: reviewImg1, foodName: 'Kebab', foodDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
    ]


    return (
        <div>
            <Swiper
                modules={[Pagination, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                loop={true}
                breakpoints={{
                    1460: {
                        slidesPerView: 4
                    },
                    1280: {
                        slidesPerView: 3.5
                    },
                    1090: {
                        slidesPerView: 3
                    },
                    920: {
                        slidesPerView: 2.5
                    },
                    768: {
                        slidesPerView: 2
                    },
                    640: {
                        slidesPerView: 1.5
                    }
                }}
                className='pb-8 scroll-smooth'
            >
                <div className='grid grid-cols-4 gap-2'>
                    {
                        todayOffers.map((offer, id) => (
                            <SwiperSlide className='m-0 p-0'><FoodCards key={id} foodImage={offer.foodImage} orderAmount={offer.orderAmount} rating={offer.rating} testimonialImage1={offer.testimonialImage1} testimonialImage2={offer.testimonialImage2} testimonialImage3={offer.testimonialImage3} foodName={offer.foodName} foodDescription={offer.foodDescription} /></SwiperSlide>
                        ))
                    }
                </div>
            </Swiper>
        </div>
    )
}