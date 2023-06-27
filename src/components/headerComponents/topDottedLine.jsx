import React from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import '../../assests/animationstyles.css'

export default function TopDottedLine() {
    //#f547480f

    return (
        <div className='relative'>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="135" height="142" viewBox="0 0 135 142" enableBackground="new 0 0 612 792" stroke="#F54748" strokeWidth="2" strokeDasharray="8 8" >
                <path className="path" fill="none" stroke="#F54748" strokeWidth="2" strokeLinejoin="round" strokeMiterlimit="10" opacity="0.5" d="M1 1.5C54.8333 6.5 108.7 15.5 133.5 141.5" />

                <path className="dashed" fill="none" stroke="white" strokeWidth="2" strokeLinejoin="round" strokeMiterlimit="10" d="M1 1.5C54.8333 6.5 108.7 15.5 133.5 141.5" />
            </svg>
            <div className='absolute -right-4 top-arrow-head'>
                <RiArrowDropDownLine className='text-primary opacity-50 text-3xl' />
            </div>
        </div>
    )
}
