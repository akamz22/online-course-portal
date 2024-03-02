'use client'
import React, { useEffect,useState } from 'react'
import CourseVideoDescription from './_components/CourseVideoDescription'
import GlobalApi from '@/app/_utils/GlobalApi'
import CourseContent from './_components/CourseContent'
import CourseEnrollSection from './_components/CourseEnrollSection'
const CoursePreview = ({params}) => {

   const [courseInfo , setCourseinfo] = useState();
  useEffect(() => {
    params && getCourseInfoById();
  },[params])

  //Get course info by slug name
  const getCourseInfoById = () => {
    GlobalApi.getCourseById(params.courseId).then(res => {
      // console.log(res.courseList);
      setCourseinfo(res?.courseList);
    });
  }

  return courseInfo && (
    <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>
      {/* Video Description and title */}
      <div className='col-span-2 p-3 rounded-md bg-white'>
        <CourseVideoDescription courseInfo = {courseInfo} />
      </div>
      {/* Course Content */}
      <div className=''>
        <CourseEnrollSection/>
        <CourseContent courseInfo={courseInfo}/>
        </div>
    </div>
  )
}

export default CoursePreview