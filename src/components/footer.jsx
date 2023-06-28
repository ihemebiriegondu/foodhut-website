import React from 'react'
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from 'react-icons/bi'
import FancyButton from './fancyButton'

export default function Footer() {
    return (
        <footer className='px-6 md:px-10 lg:px-12 xlg:px-16 xl:px-32 pb-9'>
            <div className='flex flex-col sm:grid sm:grid-cols-2 xlg:flex xlg:flex-row xlg:justify-between gap-x-10 gap-y-8 pb-24'>
                <div className='basis-1/3'>
                    <h5 className='text-primary text-3xl font-semibold mb-2.5'>Foodhut</h5>
                    <p className='text-lg mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                    <div className='flex gap-x-4 text-secondary text-xl'>
                        <a href="/"><BiLogoFacebook /></a>
                        <a href="/"><BiLogoInstagram /></a>
                        <a href="/"><BiLogoTwitter /></a>
                    </div>
                </div>
                <div className='flex justify-between sm:justify-around xlg:justify-between xl:justify-around gap-x-4 basis-1/3'>
                    <div>
                        <h6 className='text-2xl text-primary font-semibold mb-4'>About Us</h6>
                        <div className='flex flex-col gap-y-3.5'>
                            <a href="/">About Us</a>
                            <a href="/">Service Us</a>
                            <a href="/">Contact</a>
                            <a href="/">Company</a>
                        </div>
                    </div>
                    <div>
                        <h6 className='text-2xl text-primary font-semibold mb-4'>Company</h6>
                        <div className='flex flex-col gap-y-3.5'>
                            <a href="/">Partnership</a>
                            <a href="/">Terms of Use</a>
                            <a href="/">Privacy</a>
                            <a href="/">Sitemap</a>
                        </div>
                    </div>
                </div>
                <div className='xlg:basis-1/3 col-span-2 xlg:mt-0'>
                    <h6 className='text-2xl text-primary font-semibold mb-4 xlg:mb-9'>Get in touch</h6>
                    <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    <div className='flex gap-x-2 md:gap-x-3.5 mt-7'>
                        <input type="email" placeholder='Email' className='outline-0 border-0 bg-black/10 px-6 py-4 rounded-large xlg:w-auto sm:w-1/2 w-3/4'/>
                        <FancyButton content={'Subscribe'} color={'text-white'} background={'bg-primary'} />
                    </div>
                </div>
            </div>
            <div>
                <p className='font-inter text-center'>Copyright © 2022 Foodhut.</p>
            </div>
        </footer>
    )
}
