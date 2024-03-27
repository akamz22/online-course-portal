import React from 'react'
import Image from 'next/image'
const WelcomeBannerDashboard = ({ user }) => {
    return (

        <div className='flex gap-5 p-8 items-center bg-white rounded-xl'>
            <Image src="/panda.webp" alt="Not found" width={100} height={150} />
            <div>
                <h2 className='font-light md:text-[1.688em] text-[1em]'>
                    Welcome back,
                    <span className='text-[0.938em] md:ml-2  font-bold bg-gradient-to-r from-purple-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'> {user?.fullName}</span>
                </h2>
                <h2 className='text-gray-500 text-[0.8em] md:text-[15px]'>Let's begin learning where you left off</h2>
                <h2 className='text-gray-500 text-[0.8em]  md:text-[15px]'>Keep it up and improve your progress</h2>
            </div>
        </div>

    )
}

export default WelcomeBannerDashboard