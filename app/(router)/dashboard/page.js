'use client'
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import WelcomeBannerDashboard from './_components/WelcomeBannerDashboard'
import InProgressCourseList from './_components/InProgressCourseList'
import GlobalApi from '@/app/_utils/GlobalApi'
const Dashboard = () => {
  const { user } = useUser();
 const [userEnrollCourses , setUserEnrollCourses] = useState([]);
  // Get All user enroll course list
  const getAllUserEnrolledCourses = () => {
    GlobalApi.getUserAllEnrollCourseList(user?.primaryEmailAddress.emailAddress).then(res => {
      // console.log("Print enrolled courses : ", res);
      setUserEnrollCourses(res?.userEnrollCourses)
      console.log("Data : ", userEnrollCourses);
    })
  }
  useEffect(() => {
    user && getAllUserEnrolledCourses();
  }, [user])
  return (
    <div className='grid p-5 grid-cols-2 md:grid-cols-4'>
      <div className='col-span-3'>
        {/* Banner */}
        <WelcomeBannerDashboard user={user} />
        {/*In Progress CourseList*/}
        <InProgressCourseList userEnrollCourses={userEnrollCourses} />
      </div>
      <div className='m-4 border rounded-xl'>
        {/* <SideBanners /> */}
      </div>
    </div>
  )
}

export default Dashboard