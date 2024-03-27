import React from 'react'
import Image from 'next/image'
const WelcomeBanner = () => {
  return (
    <div className='flex gap-5 p-8 items-center bg-white rounded-xl'>
      <Image src="/panda.webp" alt="Not found" width={100} height={150} />
      <div>
        <h2 className='font-bold text-[0.8em] md:text-[27px]'>
          Welcome to <span className='text-primary'>coursery</span> academy
        </h2>
        <h2 className='text-gray-500 text-[10px] md:text-[25px]'>Explore, Learn and Build Real World Projects</h2>
      </div>
    </div>
  )
}

export default WelcomeBanner