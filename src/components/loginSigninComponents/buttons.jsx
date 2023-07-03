import React from 'react'

export default function Buttons({content, background, textColor, darkTextColor}) {
    return (
        <button className={`${background} ${textColor} ${darkTextColor} py-3 px-10 rounded-micro capitalize animation duration-300 ease-in-out hover:bg-primary hover:text-white hover:border-primary `}>{content}</button>
    )
}
