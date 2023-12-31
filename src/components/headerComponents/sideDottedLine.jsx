import React from 'react'
import '../../assests/animationstyles.css'

export default function SideDottedLine() {
    return (
        <div>
            <div className='absolute arrowhead2'>
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.202201 3.44144C-0.095256 1.15128 2.19801 -0.602085 4.33008 0.285391L13.9244 4.27904C16.0565 5.16651 16.4283 8.02922 14.5937 9.4319L6.33792 15.744C4.5033 17.1467 1.83822 16.0373 1.54076 13.7472L0.202201 3.44144Z" fill="#F54748" />
                </svg>
            </div>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="119" height="317" viewBox="0 0 119 317" enableBackground="new 0 0 612 792" stroke="#FDC55E" strokeWidth="2" strokeLinejoin="round" strokeDasharray="8 8" >
                <path className="path2 stroke-secondary" fill="none" strokeWidth="2" strokeLinejoin="round" strokeMiterlimit="10" d="M1 316C29.5 302.167 95.2491 252.452 59 223C27 197 -18.5 289.5 59 291C136.5 292.5 138 107.5 59 1" />
                <path className="dashed2 stroke-white dark:stroke-darkModeBlack" fill="none" strokeWidth="2" strokeLinejoin="round" strokeMiterlimit="10" d="M1 316C29.5 302.167 95.2491 252.452 59 223C27 197 -18.5 289.5 59 291C136.5 292.5 138 107.5 59 1" />
            </svg>
        </div>
    )
}
