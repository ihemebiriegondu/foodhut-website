import React from 'react'

export default function FancyNavButton({ content, clickEvent, datatype }) {
    return (
        <button onClick={(e) => { clickEvent(e) }} data-foods={`${datatype}`}
            className={`navButton text-sm xlg:text-base bg-white text-firstBlack/80 py-1.5 md:py-2.5 px-3 md:px-5 rounded-large border-2 border-firstBlack/60 capitalize animation duration-300 ease-in-out hover:bg-primary hover:text-white hover:border-primary active:bg-primary active:text-white active:border-primary`}>{content}</button>
    )
}
