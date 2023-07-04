import React from 'react'
import FancyButton from '../fancyButton'
import { AiOutlineArrowDown } from 'react-icons/ai'

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
        }
    }


    return (
        <div className='dark:text-white flex items-center gap-x-9 py-32'>
            <div className='absolute z-20 -right-44 bottom-64 w-[1177px] h-[1177px] bg-primary/10 rounded-full '>
                <div className='absolute left-auto right-68 top-auto bottom-12 z-20'>
                    <img src={foodEllipse} alt="food spin img" className='w-full h-full object-cover' />
                </div>
                <div>
                    <div className='spinFood w-24 h-24 animation-all duration-500 ease rounded-full overflow-hidden absolute left-auto right-56 top-auto bottom-12 z-30'>
                        <img src={food3} alt="food spin img" className='w-full h-full object-cover' />
                    </div>
                    <div className='spinFood w-24 h-24 animation-all duration-500 ease rounded-full overflow-hidden absolute left-auto right-82 top-auto bottom-54 z-30'>
                        <img src={food4} alt="food spin img" className='w-full h-full object-cover' />
                    </div>
                    <div className='spinFood w-24 h-24 animation-all duration-500 ease rounded-full overflow-hidden absolute left-2/5 right-3/5 top-auto bottom-70 z-30'>
                        <img src={food1} alt="food spin img" className='w-full h-full object-cover' />
                    </div>
                    <div className='spinFood w-24 h-24 animation-all duration-500 ease rounded-full overflow-hidden absolute rigth-auto left-96 top-auto bottom-48 z-30'>
                        <img src={food5} alt="food spin img" className='w-full h-full object-cover' />
                    </div>
                    <div className='spinFood w-24 h-24 animation-all duration-500 ease rounded-full overflow-hidden absolute left-80 right-auto top-auto bottom-4 z-30'>
                        <img src={food6} alt="food spin img" className='w-full h-full object-cover' />
                    </div>
                    <div className='spinFood w-24 h-24 animation-all duration-500 ease rounded-full overflow-hidden absolute rigth-auto left-96 top-auto -bottom-40 z-30'>
                        <img src={food7} alt="food spin img" className='w-full h-full object-cover' />
                    </div>
                    <div className='spinFood w-24 h-24 animation-all duration-500 ease rounded-full overflow-hidden absolute left-2/5 right-3/5 top-auto -bottom-70 z-30'>
                        <img src={food8} alt="food spin img" className='w-full h-full object-cover' />
                    </div>
                    <div className='spinFood w-24 h-24 animation-all duration-500 ease rounded-full overflow-hidden absolute left-auto right-82 top-auto -bottom-54 z-30'>
                        <img src={food9} alt="food spin img" className='w-full h-full object-cover' />
                    </div>
                </div>
            </div>
            <div className='basis-1/4'>
                <h1 className='text-4.5xl font-semibold text-primary'>$35</h1>
                <h3 className='text-4xl font-medium mb-3'>Asian Cucumber Salad</h3>
                <p className='text-sm mb-7'>Asian Cucumber Salad Recipe made with crunchy cucumber, onion, rice wine vinegar, and a few secret ingredients!</p>
                <FancyButton content={'ORDER NOW'} />
            </div>
            <div className='basis-3/4 pt-44 relative z-30'>

                <div className='flex items-end justify-end gap-x-24'>
                    <div onClick={() => { spinFood('back') }} className='w-fit bg-white dark:bg-darkModeBlack shadow-sm hover:shadow-md shadow-secondary hover:shadow-secondary animation duration-300 p-2.5 md:p-3 rounded-full cursor-pointer'>
                        <AiOutlineArrowDown className='text-primary text-xl md:text-2xl' />
                    </div>
                    <div className='w-72 h-72'>
                        <img src={food1} alt="food spin img" className='w-full h-full object-cover' />
                    </div>
                    <div onClick={() => { spinFood('front') }} className='w-fit bg-white dark:bg-darkModeBlack shadow-sm hover:shadow-md shadow-secondary hover:shadow-secondary animation duration-300 p-2.5 md:p-3 rounded-full cursor-pointer'>
                        <AiOutlineArrowDown className='text-primary text-xl md:text-2xl' />
                    </div>
                </div>
            </div>
        </div>
    )
}
