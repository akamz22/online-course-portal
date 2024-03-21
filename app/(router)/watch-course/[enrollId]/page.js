'use client'
import GlobalApi from '@/app/_utils/GlobalApi'
import { useUser } from '@clerk/nextjs'
import CourseContent from '../../course-preview/[courseId]/_components/CourseContent';
import React, { useEffect, useState } from 'react'
import CourseVideoDescription from '../../course-preview/[courseId]/_components/CourseVideoDescription'
import { toast } from 'sonner';
const WatchCourse = ({ params }) => {
    // console.log("Param : ", params);
    const { user } = useUser();
    const [completedChapter, setChapterCompleted] = useState([]);
    const [activeChapterIndex, setActiveChapterIndex] = useState(0);
    const [courseInfo, setCourseInfo] = useState();

    useEffect(() => {
        params && user && getUserEnrolledCourseDetail();
    }, [params && user])


    //get user enrolled course details------------------
    const getUserEnrolledCourseDetail = () => {
        GlobalApi.getUserEnrolledCourseDetails(params?.enrollId, user?.primaryEmailAddress?.emailAddress).then(res => {
            // console.log(res.userEnrollCourses[0].completedChapter);
            setChapterCompleted(res.userEnrollCourses[0].completedChapter);
            setCourseInfo(res?.userEnrollCourses[0]?.courseList);
        })
    }
    //Save chapter completed id
    const onChapterComplete = (chapterId) => {
        GlobalApi.markCompletedChapter(params.enrollId, chapterId).then(res => {
            if (res) {
                toast('Chapter Marked as completed ✅')
                getUserEnrolledCourseDetail()
            }
            console.log("Enrolled Chapter : ", res.userEnrollCourses[0].completedChapter);
        })
    }

    return courseInfo?.name && (
        <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>
            {/* Video Description and title */}
            <div className='col-span-2 p-3 rounded-md bg-white'>
                <CourseVideoDescription
                    courseInfo={courseInfo}
                    activeChapterIndex={activeChapterIndex}
                    watchMode={true}
                    setChapterCompleted={(chapterId) => onChapterComplete(chapterId)} />
            </div>
            {/* Course Content */}
            <div className=''>
                <CourseContent
                    completedChapter={completedChapter}
                    isUserAlreadytEnrolled={true}
                    courseInfo={courseInfo}
                    watchMode={true}
                    setActiveChapterIndex={(index) => setActiveChapterIndex(index)} />
            </div>
        </div>
    )
}

export default WatchCourse
