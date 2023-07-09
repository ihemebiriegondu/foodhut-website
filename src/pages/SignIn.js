import React, { useState } from 'react'
import loginImg2 from '../assests/images/top-view-table-full-delicious-food-composition.jpg'
import logo from '../assests/little-decors/Logo.png'
import Buttons from '../components/loginSigninComponents/buttons'
import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/SupabaseAuth'

export default function SignIn() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { signIn } = useUserAuth();

  const signInUserFunction = async (e) => {
    e.preventDefault();

    if (username === '') {
      setError("Invalid Username")
    } else {
      try {
        const { data, err } = await signIn(username, email, password)
        if (data && !err) {
          navigate("/login")
          e.target.reset()
          //setShowSuccess(true);
          console.log(data)
          console.log(err)
        }
      }
      catch (err) {
        console.log(err)
        setError('Error in creating account')
        console.log(error)
      }
    }
  }


  return (
    <div className='bg-loginBg bg-cover bg-no-repeat h-full absolute top-0 bottom-0 w-full flex flex-col justify-center py-4 px-2 xsm:px-4'>
      <div className='sm:flex rounded-mini overflow-x-hidden bg-white/10 dark:bg-black/20 shadow-md foodswiper'>
        <div className='basis-3/5 h-[800px] hidden sm:block'>
          <div className='w-full h-full overflow-hidden'>
            <img src={loginImg2} alt='login img' className='w-full h-full object-cover' />
            <div className='w-[4.875rem] h-[7.563rem] absolute z-40 top-0 left-10'>
              <a href="/"><img src={logo} alt="food hut logo" className='w-full h-full object-contain' /></a>
            </div>
          </div>
        </div>
        <div className='xsm:basis-2/5 px-6 xsm:px-8 sm:px-12 lg:px-16 pb-16 sm:py-8 lg:py-16'>
          <div className='w-[4.875rem] h-[7.563rem] -mt-3 block sm:hidden'>
            <a href="/"><img src={logo} alt="food hut logo" className='w-full h-full object-contain' /></a>
          </div>
          <div className='flex items-center justify-center gap-x-7 mb-10'>
            <Link to={'/login'}><Buttons content={'Login'} background={''} textColor={'text-thirdBlack'} darkTextColor={'dark:text-white'} /></Link>
            <Buttons content={'Register'} background={'bg-primary'} textColor={'text-white'} darkTextColor={'dark:text-darkModeBlack'} />
          </div>
          <div className='mb-16'>
            <h1 className='text-4xl font-bold dark:text-white'>Welcome</h1>
            <p className='text-thirdBlack dark:text-slate-300 text-sm'>Create an account with us today!</p>
          </div>
          <form onSubmit={(e) => { signInUserFunction(e) }}>
            <div className='mb-8'>
              <p className='text-firstBlack dark:text-zinc-200 mb-2'>Username</p>
              <input onChange={(e) => { setUserName(e.target.value) }} type='text' className='w-full bg-transparent outline-0 border-0 border-b-2 border-b-firstBlack dark:border-b-zinc-200 dark:text-white' />
            </div>
            <div className='mb-8'>
              <p className='text-firstBlack dark:text-zinc-200 mb-2'>Email</p>
              <input onChange={(e) => { setEmail(e.target.value) }} type='email' className='w-full bg-transparent outline-0 border-0 border-b-2 border-b-firstBlack dark:border-b-zinc-200 dark:text-white' />
            </div>
            <div className='mb-8'>
              <p className='text-firstBlack dark:text-zinc-200 mb-2'>Password</p>
              <input onChange={(e) => { setPassword(e.target.value) }} type='password' className='w-full bg-transparent outline-0 border-0 border-b-2 border-b-firstBlack dark:border-b-zinc-200 dark:text-white' />
            </div>
            <div className='flex items-center justify-end mb-7'>
              <Buttons content={'Create'} background={'bg-primary'} textColor={'text-white'} darkTextColor={'dark:text-darkModeBlack'} />
            </div>
          </form>
          <p className='text-xs text-center text-slate-900 dark:text-slate-300 mb-5'>Terms and Conditions & Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}
