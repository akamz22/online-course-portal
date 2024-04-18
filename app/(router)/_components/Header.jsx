'use client'
import React, { useState } from 'react'
import { Search, BellDot } from 'lucide-react'
import NotificationPopup from './NotificationPopup'
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import FilterData from '../courses/_components/FilterData'
const Header = ({ handleSearch }) => {
  const { user, isLoaded } = useUser();
  const [search, setSearch] = useState('');
  const handleChange = (e) => {
    const query = event.target.value;
    setSearch(query);
    handleSearch(query);
  }
  return (
    <div className='md:p-4 sticky top-0 p-2 w-full bg-white flex justify-between items-center'>
      <div className='md:flex text-primary hidden md:gap-2 p-2 md:border md:rounded-md cursor-pointer hover:bg-primary hover:text-white'>
        <p className=''>My Favourites❤️</p>
        {/* <Search className='h-5 w-5 hidden md:block' /> */}
        {/* <input className='outline-none hidden md:block w-28 md:w-full pl-2' value={search} onChange={handleChange} type="text" placeholder='Search...' /> */}
      </div>
      <h1 className='font-bold md:hidden block text-primary text-[1.5em]'>Coursery</h1>
      <div className='flex gap-2 items-center'>
        <NotificationPopup />
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
