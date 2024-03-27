'use client'
import GlobalApi from '@/app/_utils/GlobalApi'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import CourseItem from './CourseItem'

const CourseList = () => {

    //fetch list
    const [courseList, setCourseList] = useState([])
    useEffect(() => {
        getAllCourses()
    }, [])
    const getAllCourses = () => {
        GlobalApi.getAllCourseList().then(res => {
            // console.log(res);
            setCourseList(res?.courseLists);
        })
    }
    // console.log(courseList);
    return (
        <div className='p-5 bg-white rounded-lg mt-5'>
            {/* Title and filter */}
            <div className='flex items-center justify-between'>
                <h2 className='md:text-[20px] text-[0.9em] font-bold text-primary'>All Courses</h2>
                <Select>
                    <SelectTrigger className="md:w-[180px] w-[120px]">
                        <SelectValue placeholder="Filter" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="paid">Paid</SelectItem>
                        <SelectItem value="free">Free</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Display course list */}
            <div className='grid mt-4 grid-cols-1 gap-3 md:grid-cols-3'>
                {courseList?.length > 0 ? courseList.map((item, index) => (
                    <Link href={`/course-preview/${item?.slug}`}>
                        <div key={index*433}>
                            <CourseItem course={item} />
                        </div>
                    </Link>
                ))
                    :
                    Array(10).fill(null).map((item, index) => (
                        <div key={index*8} className='flex flex-col space-y-3'>
                            <div className='animate-pulse rounded-md bg-slate-200 w-full h-[200px]'>

                            </div>
                            <div className='space-y-1'>

                                <div  className='animate-pulse rounded bg-slate-200 w-full h-[15px]'>

                                </div>
                                <div className='animate-pulse rounded bg-slate-200 w-full h-[15px]'>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CourseList