'use client'

import { GlobeAltIcon } from '@heroicons/react/20/solid'
import { useForm } from "react-hook-form";
import Logo from '../../public/images/Vector.svg'
import Link from 'next/link';

const PasswordRecovery = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <div className="bg-[url('/images/bg-recovery.jpg')] inset-0 brightness-50 absolute z-0 h-[1030px]" />
                <div className='flex justify-between mx-12 my-8'>
                    <Logo className="scale-125"/>
                    <Link href={"/signin"} className='text-red-600 relative font-bold text-lg'>Sign in</Link> 
                </div>
            <div className='bg-neutral-200 relative z-10 m-auto w-[470px] h-[400px] rounded p-16'>
                <h2 className='text-3xl font-semibold mb-7'>Forgot Email/Password</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
                    <p>We will send you and email with instruction on how to reset your password.</p>
                    <input
                        placeholder="name@example.com"
                        className='bg-white h-12 rounded px-4 border border-gray-400 valid:border-red-950'
                        type='email' {...register("email", {
                            required: "Email is mandatory.",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Please enter a valid email.',
                            },
                        })}
                    />
                    {errors.email && <span className='text-red-400 text-xs'>{errors.email?.message}</span>}
                    <button type='submit' className='bg-blue-500 text-white font-semibold h-12 rounded mt-5 mb-4'>Email Me</button>
                </form>
                <div className='flex items-center justify-between'>
                    <span className='text-blue-500 text-base'>I don't remember my email or phone</span>
                </div>
            </div>
            <div className='relative z-10 m-auto w-[470px] mt-5'>
                <p className='text-stone-400 text-base'>This page is protected by Google reCAPTCHA to ensure you're not a bot.<span className='text-blue-500 text-base hover:underline'> Learn more.</span></p>
            </div>
            <footer className='bg-black/70 h-[100px] w-full absolute z-10 mt-56 px-32'>
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

export default PasswordRecovery