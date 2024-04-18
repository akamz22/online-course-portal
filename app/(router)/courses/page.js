'use client'
import React, { useState,useEffect } from 'react'
import GlobalApi from '@/app/_utils/GlobalApi'
import CourseList from './_components/CourseList'
import SideBanners from './_components/SideBanners'
import WelcomeBanner from './_components/WelcomeBanner'
import FilterData from './_components/FilterData'
const Courses = () => {
  const [courseList, setCourseList] = useState([])
  const [filteredCourseList, setFilteredCourseList] = useState([]);

  // Update filteredCourseList when courseList changes
  useEffect(() => {
    setFilteredCourseList(courseList);
  }, [courseList]);
  useEffect(() => {
    getAllCourses()
    // console.log(courseList);
  }, [])

  const getAllCourses = () => {
    GlobalApi.getAllCourseList().then(res => {
      const data = res?.courseLists;
      setCourseList(data);
    })
  }
  const handleSearch = (query) => {
    const filtered = courseList.filter(course =>
      course.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCourseList(filtered);
  };

  return (
    <div className='grid p-5 grid-cols-1 md:grid-cols-4'>
      <div className='col-span-3'>
        {/* Banner */}
        <FilterData handleSearch={handleSearch}/>
        <WelcomeBanner />
        <CourseList courseList = {filteredCourseList} />
      </div>
      <div className='mt-4 md:m-0 border rounded-xl'>
        <SideBanners />
      </div>
    </div>
  )
}

export default Courses