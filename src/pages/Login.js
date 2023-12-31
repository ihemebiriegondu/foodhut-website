import React, { useState } from 'react'
import loginImg2 from '../assests/images/top-view-table-full-delicious-food-composition.jpg'
import logo from '../assests/little-decors/Logo.png'
import { FcGoogle } from 'react-icons/fc'
import Buttons from '../components/loginSigninComponents/buttons'
import { Link, useNavigate } from 'react-router-dom'

import { useUserAuth } from '../context/SupabaseAuth'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { logIn, googleLogin } = useUserAuth();
    const navigate = useNavigate();

    const loginFormFunction = async (e) => {
        e.preventDefault();

        try {
            await logIn(email, password)
            .then(
                navigate('/dashboard')
            )
        } catch (err) {
            console.log(err)
        }
    }

    const googleLoginFunction = async () => {
        try {
            await googleLogin()
        } catch (err){
            console.log(err)
        }
    }

    return (
        <div className='bg-loginBg bg-cover bg-no-repeat h-full absolute top-0 bottom-0 w-full flex flex-col justify-center py-4 px-2 xsm:px-4'>
            <div className='sm:flex rounded-mini overflow-x-hidden bg-white/10 dark:bg-black/20 shadow-md foodswiper'>
                <div className='basis-3/5 h-[800px] hidden sm:block'>
                    <div className='w-full h-full overflow-hidden'>
                        <img src={loginImg2} alt='' className='w-full h-full object-cover' />
                        <div className='w-[4.875rem] h-[7.563rem] absolute z-40 top-0 left-10'>
                            <a href="/"><img src={logo} alt="food hut logo" className='w-full h-full object-contain' /></a>
                        </div>
                    </div>
                </div>
                <div className='xsm:basis-2/5 px-6 xsm:px-8 sm:px-12 lg:px-16 pb-8 sm:py-16'>
                    <div className='w-[4.875rem] h-[7.563rem] -mt-3 block sm:hidden'>
                        <a href="/"><img src={logo} alt="food hut logo" className='w-full h-full object-contain' /></a>
                    </div>
                    <div className='flex items-center justify-center gap-x-7 mb-10'>
                        <Buttons content={'Login'} background={'bg-primary'} textColor={'text-white'} darkTextColor={'dark:text-darkModeBlack'} />
                        <Link to={'/sign in'}><Buttons content={'Register'} background={''} textColor={'text-thirdBlack'} darkTextColor={'dark:text-white'} /></Link>
                    </div>
                    <div className='mb-16'>
                        <h1 className='text-4xl font-bold dark:text-white'>Welcome</h1>
                        <p className='text-thirdBlack dark:text-slate-300 text-sm'>Please login to your account</p>
                    </div>
                    <form onSubmit={(e) => { loginFormFunction(e) }}>
                        <div className='mb-8'>
                            <p className='text-firstBlack dark:text-zinc-200 mb-2'>Username or Email</p>
                            <input onChange={(e) => { setEmail(e.target.value) }} type='text' className='w-full bg-transparent outline-0 border-0 border-b-2 border-b-firstBlack dark:border-b-zinc-200 dark:text-white' />
                        </div>
                        <div className='mb-8'>
                            <p className='text-firstBlack dark:text-zinc-200 mb-2'>Password</p>
                            <input onChange={(e) => { setPassword(e.target.value) }} type='password' className='w-full bg-transparent outline-0 border-0 border-b-2 border-b-firstBlack dark:border-b-zinc-200 dark:text-white' />
                        </div>
                        <div className='flex items-center justify-between mb-8'>
                            <p className='text-sm underline dark:text-white'>Forgot Password</p>
                            <Buttons content={'GO'} background={'bg-primary'} textColor={'text-white'} darkTextColor={'dark:text-darkModeBlack'} />
                        </div>
                    </form>
                    <div className='mb-7'>
                        <button onClick={() => {googleLoginFunction()}} className='bg-gray-300 dark:bg-gray-200 w-full flex items-center gap-x-2 justify-center text-thirdBlack dark:text-darkModeBlack py-2.5 px-5 
                        rounded-micro animation duration-300 ease-in-out'><FcGoogle className='text-lg' /> Login with Google</button>
                    </div>
                    <p className='text-xs text-center text-slate-900 dark:text-slate-200 mb-5'>Terms and Conditions & Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}
