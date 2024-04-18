'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import CourseItem from './CourseItem'

const CourseList = ({courseList}) => {

    // Fetch list
    // const [courseList, setCourseList] = useState(courseList)
    const [filteredCourseList, setFilteredCourseList] = useState(courseList)
    const [filterOption, setFilterOption] = useState('all');

    // useEffect(() => {
    //     getAllCourses()
    // }, [])

    // const getAllCourses = () => {
    //     GlobalApi.getAllCourseList().then(res => {
    //         const data = res?.courseLists;
    //         setCourseList(data);
    //         applyFilter(data);
    //     })
    // }

    const applyFilter = (data) => {
        // console.log("Data  : " , data);
        if (filterOption === 'all') {
            setFilteredCourseList(data);
        } else {
            const filteredData = data.filter(item => {
                if (filterOption === 'paid') {
                    return !item.free; // Filter paid courses
                } else if (filterOption === 'free') {
                    return item.free; // Filter free courses
                }
            });
            setFilteredCourseList(filteredData);
            // console.log("filter : ",filteredData);
        }
    }


    const handleFilterChange = (event) => {
        // event.preventDefault();
        // console.log("Val : ",event.target.value);
        const selectedValue = event.target.value;
        setFilterOption(selectedValue);
        // applyFilter(courseList);
    }
    useEffect(() => {
        // console.log("Crrrr : ",courseList);
        applyFilter(courseList);
    }, [filterOption,courseList]);
    return (
        <div className='p-5 bg-white rounded-lg mt-5'>
            {/* Title and filter */}
            <div className='flex items-center justify-between'>
                <h2 className='md:text-[20px] text-[0.9em] font-bold text-primary'>All Courses</h2>
                <select
                    value={filterOption}
                    onChange={handleFilterChange}
                    className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline md:w-[180px] w-[120px]"
                >
                    <option value="all">All</option>
                    <option value="paid">Paid</option>
                    <option value="free">Free</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.707a1 1 0 0 0 1.414 0l4-4a1 1 0 1 0-1.414-1.414L10 10.586l-3.293-3.293a1 1 0 0 0-1.414 1.414l4 4z" /></svg>
                </div>
            </div>

            {/* Display course list */}
            <div className='grid mt-4 grid-cols-1 gap-3 md:grid-cols-3'>
                {filteredCourseList && filteredCourseList.length > 0 ? filteredCourseList.map((item, index) => (
                    <Link href={`/course-preview/${item?.slug}`} key={index * 433}>
                        <div>
                            <CourseItem course={item} />
                        </div>
                    </Link>
                ))
                    :
                    Array(10).fill(null).map((item, index) => (
                        <div key={index * 8} className='flex flex-col space-y-3'>
                            <div className='animate-pulse rounded-md bg-slate-200 w-full h-[200px]'>

                            </div>
                            <div className='space-y-1'>

                                <div className='animate-pulse rounded bg-slate-200 w-full h-[15px]'>

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
