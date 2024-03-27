'use client'
import React from 'react'
import { Search, BellDot } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'
const Header = () => {
  const { user, isLoaded } = useUser();
  return (
    <div className='md:p-4 sticky top-0 p-2 w-full bg-white flex justify-between items-center'>
      <div className='flex md:gap-2 p-2 md:border md:rounded-md'>
        <h1 className='font-bold md:hidden block text-primary text-[1.5em]'>Coursery</h1>
        <Search className='h-5 w-5 hidden md:block' />
        <input className='outline-none hidden md:block w-28 md:w-full pl-2' type="text" placeholder='Search...' />
      </div>
      <div className='flex gap-2 items-center'>
        <BellDot className='text-gray-500' />
        {isLoaded && user ? (
          <UserButton afterSignOutUrl='/courses' />
        ) : (
          <Link href={'/sign-in'}>
            <Button>Get Started</Button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Header
