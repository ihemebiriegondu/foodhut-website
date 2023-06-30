import React from 'react'

export default function FancyButton({ content }) {
    return (
        <button className={`bg-primary text-white dark:text-darkModeBlack py-2.5 px-5 rounded-large capitalize animation duration-300 ease-in-out hover:bg-primary hover:text-white hover:border-primary `}>{content}</button>
    )
}
