'use client'
import React, { useState,useEffect } from 'react'
import GlobalApi from '@/app/_utils/GlobalApi'
import CourseList from './_components/CourseList'
import SideBanners from './_components/SideBanners'
import WelcomeBanner from './_components/WelcomeBanner'
import FilterData from './_components/FilterData'
const Courses = () => {
  const [courseList, setCourseList] = useState([])
  useEffect(() => {
    getAllCourses()
  }, [])

  const getAllCourses = () => {
    GlobalApi.getAllCourseList().then(res => {
      const data = res?.courseLists;
      setCourseList(data);
    })
  }
  return (
    <div className='grid p-5 grid-cols-1 md:grid-cols-4'>
      <div className='col-span-3'>
        {/* Banner */}
        <FilterData courseList = {courseList} setCourseList = {setCourseList}/>
        <WelcomeBanner />
        <CourseList courseList = {courseList} />
      </div>
      <div className='mt-4 md:m-2 border rounded-xl'>
        <SideBanners />
      </div>
    </div>
  )
}

export default Courses