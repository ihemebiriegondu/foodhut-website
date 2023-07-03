import React from 'react'
import loginImg from '../assests/images/yellowFood.jpg'
import loginImg2 from '../assests/images/top-view-table-full-delicious-food-composition.jpg'
import Buttons from '../components/loginSigninComponents/buttons'
import { Link } from 'react-router-dom'

export default function SignIn() {
  return (
    <div className='dark:bg-darkModeBlack h-screen flex flex-col justify-center px-4'>
      <div className='flex rounded-mini overflow-x-hidden bg-white/10 shadow-md dark:shadow-md dark:shadow-zinc-800'>
        <div className='basis-3/5'>
          <div className='w-full h-full overflow-hidden'>
            <img src={loginImg2} alt='' className='w-full h-full object-cover' />
          </div>
        </div>
        <div className='basis-2/5 p-16'>
          <div className='flex items-center justify-center gap-x-7 mb-10'>
            <Link to={'/login'}><Buttons content={'Login'} background={''} textColor={'text-thirdBlack'} darkTextColor={'dark:text-white'} /></Link>
            <Buttons content={'Register'} background={'bg-primary'} textColor={'text-white'} darkTextColor={'dark:text-darkModeBlack'} />
          </div>
          <div className='mb-16'>
            <h1 className='text-4xl font-bold dark:text-white'>Welcome</h1>
            <p className='text-thirdBlack dark:text-slate-300 text-sm'>Create an account with us today!</p>
          </div>
          <form>
            <div className='mb-8'>
              <p className='text-zinc-400 dark:text-zinc-200 mb-2'>Username</p>
              <input type='text' className='w-full bg-transparent outline-0 border-0 border-b-2 border-b-zinc-400 dark:border-b-zinc-200 dark:text-white' />
            </div>
            <div className='mb-8'>
              <p className='text-zinc-400 dark:text-zinc-200 mb-2'>Email</p>
              <input type='text' className='w-full bg-transparent outline-0 border-0 border-b-2 border-b-zinc-400 dark:border-b-zinc-200 dark:text-white' />
            </div>
            <div className='mb-8'>
              <p className='text-zinc-400 dark:text-zinc-200 mb-2'>Password</p>
              <input type='password' className='w-full bg-transparent outline-0 border-0 border-b-2 border-b-zinc-400 dark:border-b-zinc-200 dark:text-white' />
            </div>
            <div className='flex items-center justify-end mb-8'>
              <Buttons content={'Create'} background={'bg-primary'} textColor={'text-white'} darkTextColor={'dark:text-darkModeBlack'} />
            </div>
          </form>
          <p className='text-xs text-center text-slate-400'>Terms and Conditions & Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}
