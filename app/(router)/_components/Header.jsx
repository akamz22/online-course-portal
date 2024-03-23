'use client'
import React from 'react'
import { Search, BellDot } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'
const Header = () => {
  const { user, isLoaded } = useUser();
  return (
    <div className='md:p-4 bg-white flex justify-between'>
      <div className='flex gap-2 border rounded-md p-2'>
        <Search className='h-5 w-5' />
        <input className='outline-none' type="text" placeholder='Search...' />
      </div>
      <div className='flex bg-white gap-4 items-center'>
        <BellDot className='text-gray-500' />
        {isLoaded && user ? <UserButton afterSignOutUrl='/courses' /> : <Link href={'/sign-in'}>
          <Button>Get Started</Button>
        </Link>}
      </div>
    </div>
  )
}

export default Header
