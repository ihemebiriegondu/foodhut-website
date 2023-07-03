import React from 'react'
import loginImg from '../assests/images/yellowFood.jpg'
import loginImg2 from '../assests/images/top-view-table-full-delicious-food-composition.jpg'
import { FcGoogle } from 'react-icons/fc'
import Buttons from '../components/loginSigninComponents/buttons'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className='dark:bg-darkModeBlack h-full xsm:h-screen xsm:flex flex-col justify-center xsm:px-4'>
            <div className='flex justify-center xsm:justify-start rounded-mini overflow-x-hidden xsm:bg-white/10 xsm:shadow-md dark:shadow-md dark:shadow-zinc-800'>
                <div className='basis-3/5 h-full hidden xsm:block'>
                    <div className='w-full h-full overflow-hidden'>
                        <img src={loginImg} alt='' className='w-full h-full object-cover' />
                    </div>
                </div>
                <div className='xsm:basis-2/5 px-6 xsm:px-8 sm:px-12 lg:px-16 py-16'>
                    <div className='flex items-center justify-center gap-x-7 mb-10'>
                        <Buttons content={'Login'} background={'bg-primary'} textColor={'text-white'} darkTextColor={'dark:text-darkModeBlack'} />
                        <Link to={'/sign in'}><Buttons content={'Register'} background={''} textColor={'text-thirdBlack'} darkTextColor={'dark:text-white'} /></Link>
                    </div>
                    <div className='mb-16'>
                        <h1 className='text-4xl font-bold dark:text-white'>Welcome</h1>
                        <p className='text-thirdBlack dark:text-slate-300 text-sm'>Please login to your account</p>
                    </div>
                    <form>
                        <div className='mb-8'>
                            <p className='text-zinc-400 dark:text-zinc-200 mb-2'>Username or Email</p>
                            <input type='text' className='w-full bg-transparent outline-0 border-0 border-b-2 border-b-zinc-400 dark:border-b-zinc-200 dark:text-white' />
                        </div>
                        <div className='mb-8'>
                            <p className='text-zinc-400 dark:text-zinc-200 mb-2'>Password</p>
                            <input type='password' className='w-full bg-transparent outline-0 border-0 border-b-2 border-b-zinc-400 dark:border-b-zinc-200 dark:text-white' />
                        </div>
                        <div className='flex items-center justify-between mb-8'>
                            <p className='text-sm underline dark:text-white'>Forgot Password</p>
                            <Buttons content={'GO'} background={'bg-primary'} textColor={'text-white'} darkTextColor={'dark:text-darkModeBlack'} />
                        </div>
                    </form>
                    <div className='mb-7'>
                        <button className='bg-gray-100 dark:bg-gray-300 w-full flex items-center gap-x-2 justify-center text-thirdBlack dark:text-darkModeBlack py-2.5 px-5 
                        rounded-micro animation duration-300 ease-in-out'><FcGoogle /> Login with Google</button>
                    </div>
                    <p className='text-xs text-center text-slate-400'>Terms and Conditions & Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}
