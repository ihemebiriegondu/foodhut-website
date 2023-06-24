import React from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'

export default function TopDottedLine() {
    //#f547480f

    return (
        <div className='relative'>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="135" height="142" viewBox="0 0 135 142" enable-background="new 0 0 612 792" stroke="#F54748" stroke-width="2" stroke-dasharray="8 8" >
                <path className="path" fill="none" stroke="#F54748" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" opacity="0.5" d="M1 1.5C54.8333 6.5 108.7 15.5 133.5 141.5" />

                <path className="dashed" fill="none" stroke="white" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M1 1.5C54.8333 6.5 108.7 15.5 133.5 141.5" />
            </svg>
            <div className='absolute -right-4 top-arrow-head'>
                <RiArrowDropDownLine className='text-primary opacity-50 text-3xl' />
            </div>


            {
                /*
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="612px" height="792px" viewBox="0 0 612 792" enable-background="new 0 0 612 792" >
                <path class="path" fill="none" stroke="#F54748" stroke-linejoin="round" stroke-miterlimit="10" d="M23.742,10.709
    c-2.305,23.611-8.81,46.563-9.021,70.829c-0.252,28.966,22.237,43.666,47.06,55.482c23.642,11.255,42.368,15.766,68.461,16.631
    c19.993,0.663,40.08,2.97,59.853-1.723c23.301-5.531,45.542-17.598,66.978-27.933c19.248-9.281,38.831-21.86,41.946-45.201
    c5.539-41.51-54.993-47.073-81.885-42.17C159.05,47.212,89.37,104.633,77.387,164.629c-5.896,29.522-4.312,60.884,12.703,86.354
    c19.17,28.697,49.512,49.927,78.596,67.591"/>

                <path class="dashed" fill="none" stroke="white" stroke-width="4" stroke-linejoin="round" stroke-miterlimit="10" d="M23.742,10.709
    c-2.305,23.611-8.81,46.563-9.021,70.829c-0.252,28.966,22.237,43.666,47.06,55.482c23.642,11.255,42.368,15.766,68.461,16.631
    c19.993,0.663,40.08,2.97,59.853-1.723c23.301-5.531,45.542-17.598,66.978-27.933c19.248-9.281,38.831-21.86,41.946-45.201
    c5.539-41.51-54.993-47.073-81.885-42.17C159.05,47.212,89.37,104.633,77.387,164.629c-5.896,29.522-4.312,60.884,12.703,86.354
    c19.17,28.697,49.512,49.927,78.596,67.591"/>
            </svg>
                */
            }
        </div>
    )
}
