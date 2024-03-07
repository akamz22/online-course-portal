import React from 'react'
import Markdown from 'react-markdown'
import VideoPlayer from './VideoPlayer';
const CourseVideoDescription = ({courseInfo}) => {
  // console.log(courseInfo);
  // console.log(courseInfo);
  // courseInfo = courseInfo.courseInfo;
  return (
    <div>
      <h2 className='text-[20px] font-semibold'>{courseInfo?.name}</h2>
      <h2 className='text-[14px] text-gray-500 mb-3'>{courseInfo?.author}</h2>
      {/* VideoPlayer */}
      <VideoPlayer poster={courseInfo?.banner?.url} videoUrl={courseInfo?.chapter[0]?.video?.url} />
      {/* Descriiption */}
      <h2 className='mt-5 text-[17px] font-semibold'>About the Course</h2>
      <Markdown className='text-[15px]  mt-2 leading-6 font-light'>{courseInfo?.description}</Markdown>
    </div>
  )
}

export default CourseVideoDescription