import React from 'react'
import FancyButton from '../fancyButton'

export default function Foodspin() {
    return (
        <div className='dark:text-white flex items-center pb-10'>
            <div className='basis-1/4'>
                <h1 className='text-4.5xl font-semibold text-primary'>$35</h1>
                <h3 className='text-4xl font-medium mb-3'>Asian Cucumber Salad</h3>
                <p className='text-sm mb-7'>Asian Cucumber Salad Recipe made with crunchy cucumber, onion, rice wine vinegar, and a few secret ingredients!</p>
                <FancyButton content={'ORDER NOW'} />
            </div>
            <div className='basis-3/4'>

            </div>
        </div>
    )
}
