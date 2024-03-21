import React from 'react'
import ProgressCourseItem from './ProgressCourseItem'

const InProgressCourseList = ({ userEnrollCourses }) => {
  return (
    <div className='p-5 bg-white mt-3 rounded-sm'>
      <h2 className='text-primary text-[18px] font-semibold'>Recent Enrolled Courses</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 mt-3 gap-3'>
        {
          userEnrollCourses.map((item, index) => (
            <ProgressCourseItem key={index * 90}
              course={item} />
          ))
        }
      </div>
    </div>
  )
}

export default InProgressCourseList
