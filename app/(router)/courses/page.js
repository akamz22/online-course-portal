import React from 'react'
import CourseList from './_components/CourseList'
import WelcomeBanner from './_components/WelcomeBanner'
const Courses = () => {
  return (
    <div className='grid p-5  grid-cols-1 md:grid-cols-4'>
      <div className='col-span-3'>
        {/* Banner */}
         <WelcomeBanner/>
         <CourseList/>
      </div>
      <div>
          Right Section
      </div>
    </div>
  )
}

export default Courses