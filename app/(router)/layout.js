'use client'
import React, { useContext } from 'react'
import SideNav from './_components/SideNav'
import Header from './_components/Header'
import { useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import GlobalApi from '../_utils/GlobalApi'
import { UsermemberContext } from '../_context/UserMemberContext'
import MobileBottomMenu from './_components/MobileBottomMenu'
const layout = ({ children }) => {

  const { user } = useUser();



  const { isMember, setIsMember } = useContext(UsermemberContext)
  useEffect(() => {
    user && checkUserMembership();
  }, [user])


  const checkUserMembership = () => {
    console.log("called checkUserMembership");
    GlobalApi.checkForMembership(user.primaryEmailAddress.emailAddress).then((res) => {
      console.log("User is a member : ", res);
    })
  }
  return (
    <div className='mb-20 md:mb-10'>
      <div className='sm:w-64 md:block fixed  hidden bg-gray-400'>
        <SideNav />
      </div>
      <div className='md:ml-64'>
        <Header />
        {children}
        <MobileBottomMenu className='mt-20'/>
      </div>

    </div>
  )
}

export default layout