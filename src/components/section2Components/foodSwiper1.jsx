import React, { useState, useEffect } from 'react'
import FoodCards from '../foodCards'
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi'

import kebab from '../../assests/images/unsplash_UC0HZdUitWY.png'
import reviewImg1 from '../../assests/images/unsplash_7Sz71zuuW4k.png'

export default function FoodSwiper1() {

    const [foodCardWidth, setfoodCardWidth] = useState(340)
    useEffect(() => {

        //function to set the scroll width movement in the moveSwiper function
        let setfoodCardWidthFunction = (screen) => {
            if (screen.matches) {
                setfoodCardWidth(308);
            } else {
                setfoodCardWidth(340)
            }
        }
        let screen = window.matchMedia('(max-width: 440px)')
        setfoodCardWidthFunction(screen);
        screen.addListener(setfoodCardWidthFunction)
    }, [])


    const todayOffers = [
        { foodImage: kebab, orderAmount: '105', rating: '4.5', testimonialImage1: reviewImg1, testimonialImage2: reviewImg1, testimonialImage3: reviewImg1, foodName: 'Kebab', foodDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
        { foodImage: kebab, orderAmount: '105', rating: '4.5', testimonialImage1: reviewImg1, testimonialImage2: reviewImg1, testimonialImage3: reviewImg1, foodName: 'Kebab', foodDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
        { foodImage: kebab, orderAmount: '105', rating: '4.5', testimonialImage1: reviewImg1, testimonialImage2: reviewImg1, testimonialImage3: reviewImg1, foodName: 'Kebab', foodDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
        { foodImage: kebab, orderAmount: '105', rating: '4.5', testimonialImage1: reviewImg1, testimonialImage2: reviewImg1, testimonialImage3: reviewImg1, foodName: 'Kebab', foodDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
        { foodImage: kebab, orderAmount: '105', rating: '4.5', testimonialImage1: reviewImg1, testimonialImage2: reviewImg1, testimonialImage3: reviewImg1, foodName: 'Kebab', foodDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
        { foodImage: kebab, orderAmount: '105', rating: '4.5', testimonialImage1: reviewImg1, testimonialImage2: reviewImg1, testimonialImage3: reviewImg1, foodName: 'Kebab', foodDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
    ]

    const moveSwiper = (direction) => {
        const foodSwiper = document.getElementById('firstFoodSwiper');

        let scrollCompleted = 0;
        let slideVar = setInterval(function () {
            if (direction === 'left') {
                foodSwiper.scrollLeft -= foodCardWidth;
                foodSwiper.style.scrollBehavior = "smooth"
            } else {
                foodSwiper.scrollLeft += foodCardWidth;
                foodSwiper.style.scrollBehavior = "smooth"
            }
            scrollCompleted += foodCardWidth;
            if (scrollCompleted >= foodCardWidth) {
                window.clearInterval(slideVar);
                foodSwiper.style.scrollBehavior = "smooth"
            }
        }, 30);
    }

    return (
        <div className='overflow-x-scroll pb-6 scroll-smooth foodswiper' id='firstFoodSwiper'>
            <div className='flex gap-x-5'>
                {
                    todayOffers.map((offer, id) => (
                        <div className='basis-1/4'>
                            <FoodCards key={id} foodImage={offer.foodImage} orderAmount={offer.orderAmount} rating={offer.rating} testimonialImage1={offer.testimonialImage1} testimonialImage2={offer.testimonialImage2} testimonialImage3={offer.testimonialImage3} foodName={offer.foodName} foodDescription={offer.foodDescription} />
                        </div>
                    ))
                }
            </div>

            <div onClick={() => { moveSwiper('left') }} className='absolute left-1 lg:left-2 xlg:left-6 bottom-64 xlg:bottom-72 bg-white shadow-lg hover:shadow-xl shadow-secondary hover:shadow-secondary animation duration-300 p-2.5 md:p-3 rounded-full cursor-pointer'>
                <HiChevronLeft className='text-primary text-xl md:text-2xl' />
            </div>
            <div onClick={() => { moveSwiper('right') }} className='absolute right-1 lg:right-2 xlg:right-6 bottom-64 xlg:bottom-72 bg-white shadow-lg hover:shadow-xl shadow-secondary hover:shadow-secondary animation duration-300 p-2.5 md:p-3 rounded-full cursor-pointer'>
                <HiChevronRight className='text-primary text-xl md:text-2xl' />
            </div>
        </div>
    )
}