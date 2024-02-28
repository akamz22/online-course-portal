'use client'
import GlobalApi from '@/app/_utils/GlobalApi'
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
    console.log(courseList);
    return (
        <div className='p-5 bg-white rounded-lg mt-5'>
            {/* Title and filter */}
            <div className='flex items-center justify-between'>
                <h2 className='text-[20px] font-bold text-primary'>All Courses</h2>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">All</SelectItem>
                        <SelectItem value="dark">Paid</SelectItem>
                        <SelectItem value="system">Free</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Display course list */}
            <div className='grid grid-cols-2 gap-3 md:grid-cols-3'>
                {
                    courseList.map((item, index) => (
                        // console.log(item);
                        <CourseItem key={index} course={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default CourseList