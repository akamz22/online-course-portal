import React from 'react'
import Image from 'next/image'
const CourseItem = (course) => {
    console.log(course)
    course = course.course;
    return (
        <div className='border rounded-xl'>
            {console.log(course)}
            <Image className='md:h-[150px] rounded-t-xl' src={course?.banner?.url} alt="Banner" height={150} width={500} />
            <div className='flex flex-col gap-0 p-2'>
                <h2 className='text-[20px] font-semibold'>
                    {course.name}
                </h2>
                <h2 className='text-[15px] text-gray-400'>
                    {course.author}
                </h2>
                <div className='flex gap-2'>
                    <Image src={'/youtube.png'} alt="youtube" width={20} height={20} />
                    <h2 className='text-[14px] text-gray-400'>Watch on Youtube</h2>
                </div>
                <h2 className='text-[15px]'>{course.free ? 'Free' : 'Paid'}</h2>
            </div>
        </div>
    )
}

export default CourseItem