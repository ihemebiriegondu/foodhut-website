import React, { useState, useEffect } from 'react'
import supabase from '../../supabaseClient'
import FoodCards from '../foodCards'
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi'

export default function FoodSwiper1() {

    //console.log(supabase)
    const [fetchError, setFetchError] = useState('');
    const [todayOffers, setTodayOffers] = useState('');

    const [foodCardWidth, setfoodCardWidth] = useState(340);
    useEffect(() => {
        //function to fetch the foods from supabase database
        const fetchFoodData = async () => {
            const { data, error } = await supabase
                .from('todayOffers')
                .select()
                .order('id')

            if (error) {
                setFetchError(error)
                //console.log(error)
                //incase data has been fetched before, it would be cleared
                setTodayOffers('')
            }
            if (data) {
                setTodayOffers(data);
                //console.log(data)
                setFetchError('');
            }
        }
        fetchFoodData();

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
                    fetchError && (
                        <div>
                            <p>No food available today</p>
                        </div>
                    )
                }
                {
                    todayOffers && (
                        todayOffers.map(offer => (
                            <div className='basis-1/4' key={offer.id}>
                                <FoodCards foodImage={offer.image} orderAmount={offer.price} rating={offer.rating} testimonialImage1={offer.testimg1} testimonialImage2={offer.testimg2} testimonialImage3={offer.testimg3} foodName={offer.name} foodDescription={offer.description} />
                            </div>
                        ))
                    )
                }
            </div>

            <div onClick={() => { moveSwiper('left') }} className='absolute left-1 lg:left-2 xlg:left-6 bottom-64 xlg:bottom-72 bg-white dark:bg-darkModeBlack shadow-lg hover:shadow-xl shadow-secondary hover:shadow-secondary animation duration-300 p-2.5 md:p-3 rounded-full cursor-pointer'>
                <HiChevronLeft className='text-primary text-xl md:text-2xl' />
            </div>
            <div onClick={() => { moveSwiper('right') }} className='absolute right-1 lg:right-2 xlg:right-6 bottom-64 xlg:bottom-72 bg-white dark:bg-darkModeBlack shadow-lg hover:shadow-xl shadow-secondary hover:shadow-secondary animation duration-300 p-2.5 md:p-3 rounded-full cursor-pointer'>
                <HiChevronRight className='text-primary text-xl md:text-2xl' />
            </div>
        </div>
    )
}