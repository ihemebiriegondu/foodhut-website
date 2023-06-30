import React, { useEffect, useState } from 'react'
import FancyNavButton from '../fancyNavButton'
import kebab from '../../assests/images/unsplash_UC0HZdUitWY.png'
import reviewImg1 from '../../assests/images/unsplash_7Sz71zuuW4k.png'
import FoodCards from '../foodCards'

export default function FoodTabs() {

    const [foodTab, setFoodTab] = useState('ramen');

    useEffect(() => {
        const showTabs = (menu) => {
            //setting the visibility of the tabs
            const tabs = document.querySelectorAll('.tabs');
            const tab = document.getElementById(menu);

            tabs.forEach(tab => {
                tab.classList.add('hidden');
            });
            tab.classList.remove('hidden');

            //setting active class to the navs
            const navs = document.querySelectorAll('.navButton');
            const nav = document.querySelector(`[data-foods='${menu}']`)

            navs.forEach(nav => {
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active')
                }
            });
    
            nav.classList.add('active')
        }
        showTabs(foodTab);
    }, [foodTab]);

    const foodMenu = [
        {
            category: 'ramen',
            foods: [
                { foodImage: kebab, orderAmount: '105', rating: '4.5', testimonialImage1: reviewImg1, testimonialImage2: reviewImg1, testimonialImage3: reviewImg1, foodName: 'Kebab', foodDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
                { foodImage: kebab, orderAmount: '105', rating: '4.5', testimonialImage1: reviewImg1, testimonialImage2: reviewImg1, testimonialImage3: reviewImg1, foodName: 'Kebab', foodDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
            ]
        },
        {
            category: 'breakfast',
            foods: [
                { foodImage: kebab, orderAmount: '105', rating: '4.5', testimonialImage1: reviewImg1, testimonialImage2: reviewImg1, testimonialImage3: reviewImg1, foodName: 'Chicken Tikka', foodDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
                { foodImage: kebab, orderAmount: '105', rating: '4.5', testimonialImage1: reviewImg1, testimonialImage2: reviewImg1, testimonialImage3: reviewImg1, foodName: 'Chicken Tikka', foodDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
            ]
        },
        {
            category: 'lunch',
            foods: [
                { foodImage: kebab, orderAmount: '105', rating: '4.5', testimonialImage1: reviewImg1, testimonialImage2: reviewImg1, testimonialImage3: reviewImg1, foodName: 'Desi Chowmein', foodDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
                { foodImage: kebab, orderAmount: '105', rating: '4.5', testimonialImage1: reviewImg1, testimonialImage2: reviewImg1, testimonialImage3: reviewImg1, foodName: 'Desi Chowmein', foodDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
            ]
        },
        {
            category: 'dinner',
            foods: [
                { foodImage: kebab, orderAmount: '105', rating: '4.5', testimonialImage1: reviewImg1, testimonialImage2: reviewImg1, testimonialImage3: reviewImg1, foodName: 'Chicken Chargha', foodDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
                { foodImage: kebab, orderAmount: '105', rating: '4.5', testimonialImage1: reviewImg1, testimonialImage2: reviewImg1, testimonialImage3: reviewImg1, foodName: 'Chicken Chargha', foodDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
            ]
        },
        {
            category: 'drinks',
            foods: [
                { foodImage: kebab, orderAmount: '105', rating: '4.5', testimonialImage1: reviewImg1, testimonialImage2: reviewImg1, testimonialImage3: reviewImg1, foodName: 'Fanta', foodDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
                { foodImage: kebab, orderAmount: '105', rating: '4.5', testimonialImage1: reviewImg1, testimonialImage2: reviewImg1, testimonialImage3: reviewImg1, foodName: 'Pepsi', foodDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
            ]
        }
    ]

    return (
        <article>
            <div className='flex items-center justify-center gap-x-7 mb-24'>
                {
                    //mapping the category names on the buttons
                    foodMenu.map((menu) => (
                        <FancyNavButton datatype={menu.category} key={menu.category} content={menu.category}
                            clickEvent={(e) => { setFoodTab(menu.category); }}
                        />
                    ))
                }
            </div>

            <div>
                {
                    //mapping the foodMenu, first map the categories, then each food in the category
                    foodMenu.map((menu) => (
                        <div key={menu.category} id={menu.category} className='flex gap-x-5 tabs'>
                            {
                                menu.foods.map((food, id) => (
                                    <div>
                                        <FoodCards key={id} foodImage={food.foodImage} orderAmount={food.orderAmount} rating={food.rating} testimonialImage1={food.testimonialImage1} testimonialImage2={food.testimonialImage2} testimonialImage3={food.testimonialImage3} foodName={food.foodName} foodDescription={food.foodDescription} />
                                    </div>
                                ))
                            }
                        </div>

                    ))
                }
            </div>

        </article>
    )
}
