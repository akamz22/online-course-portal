import React from 'react'
import Image from 'next/image'
import { Progress } from "@/components/ui/progress"
import Link from 'next/link'

const ProgressCourseItem = ({ course }) => {

    const getTotalCompletedChapterPerc = (item) => {
        console.log("item", item);
        //perc = ( totalCompletedChapter / totalChapter)*100
        const perc = (item?.completedChapter?.length) / (item?.courseList?.totalChapters) * 100
        return perc;
    }

    return (
        <Link href={"/course-preview/"+course?.courseList?.slug}>
        <div className='border rounded-xl
        hover:shadow-md hover:shadow-purple-200 cursor-pointer'>
            {/* {console.log(course)} */}
            <Image className='md:h-[150px] rounded-t-xl' src={course?.courseList?.banner?.url} alt="Banner" height={150} width={700} />
            <div className='flex flex-col gap-0 p-2'>
                <h2 className='text-[20px] font-semibold'>
                    {course?.courseList.name}
                </h2>
                <h2 className='text-[15px] text-gray-400'>
                    {course?.courseList.author}
                </h2>
                <h2 className='text-[12px] text-gray-400 mt-3 '>{getTotalCompletedChapterPerc(course)}% <span className='float-right'> {course?.completedChapter?.length} / {course?.courseList?.totalChapters}
                    Chapters</span></h2>
                <Progress value={getTotalCompletedChapterPerc(course)} className='h-[7px]' />

            </div>
        </div>
        </Link>
    )
}

export default ProgressCourseItem