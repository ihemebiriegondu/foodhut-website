import React, { useState } from 'react'
import '../../assests/animationstyles.css'

import { AiOutlineArrowDown, AiFillCaretDown, AiFillCaretUp, AiOutlineShoppingCart } from 'react-icons/ai'

import foodEllipse from '../../assests/images/Ellipse 4 (1).png'
import food1 from '../../assests/images/pngfind 1.png'
import food3 from '../../assests/images/Meal-PNG-Download-Image 2.png'
import food4 from '../../assests/images/Meal-PNG-Download-Image 1.png'
import food5 from '../../assests/images/unsplash_UC0HZdUitWY (2).png'
import food6 from '../../assests/images/unsplash_UC0HZdUitWY (4).png'
import food7 from '../../assests/images/pngegg.png'
import food8 from '../../assests/images/pngegg (1).png'
import food9 from '../../assests/images/pngegg3.png'

export default function Foodspin() {

    const [focusedImg, setFocusedImg] = useState(food1);
    const [orderNumber, setOrderNumber] = useState(0);

    const focusFood = () => {
        const middleFood = document.querySelector('.mid')
        const focusedImgId = document.getElementById('focusedImg');

        setFocusedImg(middleFood.children[0].src)
        //console.log(focusedImg)

        //this gives the dislay image its shrinking and enlarging animation
        focusedImgId.classList.add('middleImage');
        setTimeout(() => {
            focusedImgId.classList.remove('middleImage');
        }, 500)
    }

    const spinFood = (direction) => {
        //console.log(direction)
        //getting all the food images
        const foods = document.querySelectorAll('.spinFood');
        //console.log(foods)

        //if the direction is back, i got all the food from the first to the last(and also got the food immediately after it) and interchanged them
        //if there is no food after it (when the loop has gotten to the last image), it gives the class of the first image to the last image
        //and the loop continues...
        //i.e food[0] = food[1], 1 = 2, 2 = 3 and so on

        if (direction === 'back') {
            let firstClass = foods[0].className
            for (let i = 0; i < foods.length; i++) {
                if (foods[i + 1] !== undefined) {
                    //console.log(foods[i + 1])
                    foods[i].className = foods[i + 1].className
                } else {
                    //console.log(foods[i])
                    foods[i].className = firstClass
                }
            }
            focusFood();
        }
        //else if the direction is front, i got all the food from the last to the first instead(and also got the food immediately before it) and interchanged them
        //if there is no food before it (when the loop has gotten to the first image), it gives the class of the last image to the first image
        //and the loop continues...
        //i.e food[7] = food[6], 6 = 5, 5 = 4 and so on

        else if (direction === 'front') {
            let lastClass = foods[7].className
            for (let i = foods.length - 1; i >= 0; i--) {
                //console.log(foods[i])
                if (foods[i - 1] !== undefined) {
                    foods[i].className = foods[i - 1].className
                    //console.log(foods[i].className)
                } else {
                    //console.log(foods[i])
                    foods[i].className = lastClass
                }
            }
            focusFood();
        }
    }



    return (
        <div className='dark:text-white flex flex-col-reverse md:flex-row items-center gap-y-14 gap-x-9 pt-16 xlg:pt-32 pb-32'>
            <div className='absolute z-20 bottom-1/2 md:-right-32 md:bottom-64 xlg:-right-44 xlg:bottom-64 md:w-[900px] md:h-[900px] w-full sm:w-11/12 h-full xlg:w-[1177px] xlg:h-[1177px] bg-primary/10 rounded-full overflow-hidden'>
                <div className='flex md:block items-center justify-center'>
                    <div className='mx-auto w-full xsm:w-5/6 sm:w-3/5 md:w-96 xlg:w-auto xlg:h-auto absolute sm:left-auto top-auto left-auto right-auto sm:right-32 bottom-8 xsm:-bottom-2 sm:bottom-12 md:right-50 md:bottom-8 xlg:right-68 xl:bottom-12 z-20'>
                        <img src={foodEllipse} alt="food spin img" className='w-full h-full object-cover' />
                    </div>
                </div>
                <div>
                    <div className='spinFood w-16 h-16 sm:w-20 sm:h-20 xlg:w-24 xlg:h-24 animation-all duration-500 ease rounded-full overflow-hidden absolute left-auto -right-3 xsm:right-8 sm:right-20 md:right-40 xlg:right-56 top-auto bottom-calc1 xsm:bottom-calc11 sm:bottom-6 md:bottom-10 xlg:bottom-12 z-30'>
                        <img src={food3} alt="food spin img" className='w-full h-full object-cover' />
                    </div>
                    <div className='spinFood w-16 h-16 sm:w-20 sm:h-20 xlg:w-24 xlg:h-24 animation-all duration-500 ease rounded-full overflow-hidden absolute left-auto right-16 xsm:right-1/4.5 sm:right-36 smd:right-40 md:right-60 xlg:right-82 top-auto bottom-calc2 xsm:bottom-calc22 sm:bottom-32 smd:bottom-36 xlg:bottom-54 z-30'>
                        <img src={food4} alt="food spin img" className='w-full h-full object-cover' />
                    </div>
                    <div className='mid spinFood w-16 h-16 sm:w-20 sm:h-20 xlg:w-24 xlg:h-24 animation-all duration-500 ease rounded-full overflow-hidden absolute left-auto right-twoForth sm:right-64 smd:left-twoForth md:right-threeForth md:left-1/2 md:right-1/2 xlg:left-2/5 xlg:right-3/5 top-auto bottom-calcTop xsm:bottom-calcTop1 sm:bottom-1/5 smd:bottom-52 md:bottom-44 xlg:bottom-70 z-30'>
                        <img src={food1} alt="food spin img" className='w-full h-full object-cover' />
                    </div>
                    <div className='spinFood w-16 h-16 sm:w-20 sm:h-20 xlg:w-24 xlg:h-24 animation-all duration-500 ease rounded-full overflow-hidden absolute right-auto left-12 xsm:left-1/4.5 sm:left-36 smd:left-40 md:left-80 xlg:left-96 top-auto bottom-calc4 xsm:bottom-calc22 sm:bottom-36 md:bottom-28 xlg:bottom-48 z-30'>
                        <img src={food5} alt="food spin img" className='w-full h-full object-cover' />
                    </div>
                    <div className='spinFood w-16 h-16 sm:w-20 sm:h-20 xlg:w-24 xlg:h-24 animation-all duration-500 ease rounded-full overflow-hidden absolute -left-3 xsm:left-8 sm:left-20 smd:left-24 md:left-68 xlg:left-80 right-auto top-auto bottom-calc1 xsm:bottom-calc11 sm:bottom-6 smd:bottom-3 md:-bottom-4 xlg:bottom-4 z-30'>
                        <img src={food6} alt="food spin img" className='w-full h-full object-cover' />
                    </div>
                    <div className='hidden spinFood w-16 h-16 sm:w-20 sm:h-20 xlg:w-24 xlg:h-24 animation-all duration-500 ease rounded-full overflow-hidden absolute rigth-auto left-96 top-auto -bottom-40 z-30'>
                        <img src={food7} alt="food spin img" className='w-full h-full object-cover' />
                    </div>
                    <div className='hidden spinFood w-16 h-16 sm:w-20 sm:h-20 xlg:w-24 xlg:h-24 animation-all duration-500 ease rounded-full overflow-hidden absolute left-2/5 right-3/5 top-auto -bottom-70 z-30'>
                        <img src={food8} alt="food spin img" className='w-full h-full object-cover' />
                    </div>
                    <div className='hidden spinFood w-16 h-16 sm:w-20 sm:h-20 xlg:w-24 xlg:h-24 animation-all duration-500 ease rounded-full overflow-hidden absolute left-auto right-82 top-auto -bottom-54 z-30'>
                        <img src={food9} alt="food spin img" className='w-full h-full object-cover' />
                    </div>
                </div>
            </div>
            <div className='lg:basis-2/5 xl:basis-1/3 1xl:basis-1/4'>
                <h1 className='text-4xl lg:text-4.5xl font-semibold text-primary'>$35</h1>
                <h3 className='text-3xl lg:text-4xl font-medium mb-3'>Asian Cucumber Salad</h3>
                <p className='text-sm mb-7'>Asian Cucumber Salad Recipe made with crunchy cucumber, onion, rice wine vinegar, and a few secret ingredients!</p>

                <div className='flex items-center gap-x-4'>
                    <div className='flex items-center px-4 py-1.5 border-2 border-primary rounded-large outline-0'>
                        <AiFillCaretDown className='text-2xl border-e pe-2 border-black/50 dark:border-white/50 cursor-pointer'
                            onClick={() => {
                                if (orderNumber > 0) {
                                    setOrderNumber(orderNumber - 1)
                                }
                            }}
                        />
                        <p className='text-2xl px-4'>{orderNumber}</p>
                        <AiFillCaretUp className='text-2xl border-s ps-2 border-black/50 dark:border-white/50 cursor-pointer'
                            onClick={() => {
                                setOrderNumber(orderNumber + 1)
                            }}
                        />
                    </div>
                    <button className={`bg-primary flex items-center gap-x-2 text-white dark:text-darkModeBlack py-1 ps-1 pe-5 rounded-large capitalize animation duration-300 ease-in-out hover:bg-primary hover:text-white hover:border-primary`}>
                        <p className='bg-secondary py-2.5 px-2 rounded-full'><AiOutlineShoppingCart className='me-1 text-xl' /></p>
                        <p className='text-sm'>Add to cart</p>
                    </button>
                </div>
            </div>
            <div className='lg:basis-3/5 xl:basis-2/3 1xl:basis-3/4 w-full md:w-auto pt-44 relative z-30'>

                <div className='flex items-end justify-between md:justify-end md:gap-x-14 xlg:gap-x-24 mx-auto w-full sm:w-3/4 md:w-full'>
                    <div onClick={() => { spinFood('back') }} className='w-fit bg-white dark:bg-darkModeBlack shadow-sm hover:shadow-md shadow-secondary hover:shadow-secondary animation duration-300 p-2.5 md:p-3 rounded-full cursor-pointer'>
                        <AiOutlineArrowDown className='text-primary text-xl md:text-2xl' />
                    </div>
                    <div className='w-48 sm:w-60 xlg:w-72 h-48 sm:h-60 xlg:h-72'>
                        <img src={focusedImg} id='focusedImg' alt="food spin img" className='w-full h-full object-cover' />
                    </div>
                    <div onClick={() => { spinFood('front') }} className='w-fit bg-white dark:bg-darkModeBlack shadow-sm hover:shadow-md shadow-secondary hover:shadow-secondary animation duration-300 p-2.5 md:p-3 rounded-full cursor-pointer'>
                        <AiOutlineArrowDown className='text-primary text-xl md:text-2xl' />
                    </div>
                </div>
            </div>
        </div>
    )
}
