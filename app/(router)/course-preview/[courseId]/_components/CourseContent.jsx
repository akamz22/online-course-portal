import React, { useState } from 'react'
import { Lock, PlayCircleIcon,Play, PlayCircle } from 'lucide-react';
const CourseContent = ({courseInfo,isUserAlreadytEnrolled,watchMode=false,setActiveChapterIndex,completedChapter}) => {
    // console.log("Content", courseInfo);
    // courseInfo = courseInfo.courseInfo;
    const [activeIndex, setActiveIndex] = useState(0)

    
    //Use to check chapter completion
    const checkIsChapterCompleted = (chapterId) =>{
        // console.log(completedChapter);
        return completedChapter?.find(item=> item.chapterId === chapterId)
    }


    return (
        <div className='p-3 mt-4 bg-white rounded-md'>
            <h2 className=''>Content</h2>
            {courseInfo?.chapter?.map((item, index) => (
                <div key={index*96}>
                    <h2 className={`p-2 text-[14px] 
                    flex items-center justify-between
                    rounded-sm px-4 border
                     cursor-pointer m-2
                     hover:bg-gray-200
                     hover:text-gray-500
                     ${watchMode && checkIsChapterCompleted(item?.id) && 'border-green-500 bg-green-200'}
                     ${isUserAlreadytEnrolled && 'hover:bg-primary hover:text-white'}
                     ${activeIndex == index && 'bg-primary text-white'}`}
                     onClick={()=>{
                        watchMode && setActiveChapterIndex(index)
                        watchMode && setActiveIndex(index)
                     }}>
                        {index + 1}. {item.name}
                        {activeIndex == index || isUserAlreadytEnrolled ? <PlayCircle className='h-4 w-4' /> :
                            <Lock  className='h-4 w-4' />
                        }
                    </h2>
                </div>
            ))}
        </div>
    )
}

export default CourseContent



