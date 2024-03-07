'use client'
import React, { useEffect, useState } from 'react'
import CourseVideoDescription from './_components/CourseVideoDescription'
import GlobalApi from '@/app/_utils/GlobalApi'
import CourseContent from './_components/CourseContent'
import CourseEnrollSection from './_components/CourseEnrollSection'
import { useUser } from '@clerk/nextjs'
const CoursePreview = ({ params }) => {
  const { user } = useUser();
  const [isUserAlreadytEnrolled, setisUserAlreadytEnrolled] = useState()
  const [courseInfo, setCourseinfo] = useState();
  useEffect(() => {
    params && getCourseInfoById();
  }, [params])

  useEffect(() => {
    courseInfo && user && UserEnrollToCourse();
  }, [courseInfo, user])
  //Get course info by slug name
  const getCourseInfoById = () => {
    GlobalApi.getCourseById(params.courseId).then(res => {
      // console.log(res.courseList);
      setCourseinfo(res?.courseList);

    });
  }
  //To check user already enrolled-----------

  const UserEnrollToCourse = () => {
    // console.log("Course Slug:", courseInfo?.slug);
    // console.log("User Email:", user?.primaryEmailAddress?.emailAddress);

    GlobalApi.checkUserEnrollToCourse(courseInfo?.slug , user?.primaryEmailAddress?.emailAddress).then(res => {
      // console.log("API Response:", res);
      // console.log("Id : ",res?.userEnrollCourses[0]?.id);
      if (res?.userEnrollCourses) {
        // console.log("Inside id res",res);
        setisUserAlreadytEnrolled(res?.userEnrollCourses[0]?.id);
        // console.log("IsUserAlreadytEnrolled Inside Page : ",isUserAlreadytEnrolled);
      }
    });
  };


  return courseInfo && (
    <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>
      {/* Video Description and title */}
      <div className='col-span-2 p-3 rounded-md bg-white'>
        <CourseVideoDescription courseInfo={courseInfo} />
      </div>
      {/* Course Content */}
      <div className=''>
        <CourseEnrollSection isUserAlreadytEnrolled={isUserAlreadytEnrolled} courseInfo={courseInfo} />
        <CourseContent isUserAlreadytEnrolled={isUserAlreadytEnrolled} courseInfo={courseInfo} />
      </div>
    </div>
  )
}

export default CoursePreview