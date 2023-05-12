'use client'

import { GlobeAltIcon } from '@heroicons/react/20/solid'
import { useForm } from "react-hook-form";
import Logo from '../../public/images/Vector.svg'
import Link from 'next/link';

const SignUp = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <div className="bg-[url('/images/bg-netflix.jpg')] inset-0 brightness-50 absolute z-0 h-[1160px]" />
            <Logo className="scale-125 mx-12 my-8" />
            <div className='bg-black/70 relative z-10 m-auto w-[450px] h-[550px] rounded p-16'>
                <h2 className='text-white text-3xl font-semibold mb-7'>Sign Up</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
                    <input
                        placeholder="Email"
                        className='bg-neutral-700 h-12 rounded px-4 border-b-2 border-b-orange-400 valid:border-none'
                        type='email' {...register("email", {
                            required: "Email is mandatory.",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Please enter a valid email.',
                            },
                        })}
                    />
                    {errors.email && <span className='text-orange-400 text-xs'>{errors.email?.message}</span>}
                    <input
                        placeholder="Add a password"
                        className='bg-neutral-700 h-12 rounded px-4 border-b-2 border-b-orange-400 valid:border-none'
                        type='password' {...register("password", {
                            required: "Password is mandatory.",
                            pattern: {
                                value: /^(?=.{4,60}$)/,
                                message: "Your password must contain between 4 and 60 characters.",
                            },
                        })}
                    />
                    {errors.password && <span className='text-orange-400 text-xs'>{errors.password?.message}</span>}
                    
                    <div className='flex items-center justify-between'>
                        <input
                            type='checkbox'
                            className='w-5 h-4 checked:accent-neutral-700'
                        />
                        <span className='text-gray-300 text-sm font-extralight ml-2'>Please do not email me Netflix special offers.</span>
                    </div>
                    <div className='mt-3'>
                        <span className='text-neutral-500 mr-2'>Already in Netflix?</span>
                        <Link href={"/signin"} className='text-white mb-4 hover:underline'>Sign in now.</Link>
                    </div>
                    <button type='submit' className='bg-red-600 text-white font-semibold h-12 rounded mt-5 mb-4'>Next</button>
                </form>
                <div className='mt-3'>
                    <p className='text-neutral-500 text-xs font-semibold'>This page is protected by Google reCAPTCHA to ensure you're not a bot.
                        <span className='text-blue-500 text-xs'> Learn more.</span></p>
                </div>
            </div>
            <footer className='bg-black/70 h-[300px] w-full absolute z-10 mt-52 px-32 pt-6'>
                <span className='text-neutral-500'>Questions? Call 900-759-105</span>
                <ul className='grid grid-cols-4 text-neutral-500 text-[13px] py-6 gap-3'>
                    <li><a><span>FAQ</span></a></li>
                    <li><a><span>Help Center</span></a></li>
                    <li><a><span>Terms of Use</span></a></li>
                    <li><a><span>Privacity</span></a></li>
                    <li><a><span>Cookie Preferences</span></a></li>
                    <li><a><span>Corporate Information</span></a></li>
                </ul>
                <div className='flex gap-3 items-center justify-center rounded border-[0.5pt] border-neutral-700 h-12 w-32 px-2'>
                    <GlobeAltIcon className='text-neutral-500 h-5' />
                    <select className='text-neutral-500 text-[13px] bg-transparent'>
                        <option>Español</option>
                        <option>English</option>
                    </select>
                </div>
            </footer>
        </>
    )
}

export default SignUp