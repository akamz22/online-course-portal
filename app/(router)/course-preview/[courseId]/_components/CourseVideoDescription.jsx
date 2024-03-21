import React from 'react'
import Markdown from 'react-markdown'
import { Button } from '@/components/ui/button';
import VideoPlayer from './VideoPlayer';
const CourseVideoDescription = ({ courseInfo, activeChapterIndex, watchMode = false, setChapterCompleted }) => {
  // console.log("Course Info : ", courseInfo);
  // console.log(courseInfo);
  // console.log(activeChapterIndex)
  return (
    <div>
      <h2 className='text-[20px] font-semibold'>{courseInfo?.name}</h2>
      <h2 className='text-[14px] text-gray-500 mb-3'>{courseInfo?.author}</h2>
      {/* VideoPlayer */}
      <VideoPlayer poster={!watchMode ? courseInfo?.banner?.url : null} videoUrl={courseInfo?.chapter[activeChapterIndex]?.video?.url} />
      {/* Descriiption */}
      <h2 className='mt-5 text-[17px] font-semibold'>
        {watchMode ?
          <span className='flex justify-between items-center'>
            {courseInfo?.chapter[activeChapterIndex].name}
            <Button onClick={() => setChapterCompleted(courseInfo?.chapter[activeChapterIndex]?.id)}>Mark Completed</Button>
          </span> :
          <span>
            About the Course
          </span>}
      </h2>
      {watchMode ?
        <Markdown className='text-[15px]  mt-2 leading-6 font-light'>{courseInfo?.shortDesc || courseInfo?.description}</Markdown>
        :
        <Markdown className='text-[15px]  mt-2 leading-6 font-light'>{courseInfo?.description}</Markdown>
      }
    </div>
  )
}

export default CourseVideoDescription