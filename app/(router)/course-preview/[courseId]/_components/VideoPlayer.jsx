import React from 'react'

const VideoPlayer = ({ videoUrl, poster }) => {
    // console.log(videoUrl);

    return (
        <video
            className='rounded-sm'
            key={videoUrl}
            // autoPlay
            controls
            poster={poster}
            width={1000}
            height={250}>
            <source src={videoUrl} type='video/mp4' />
        </video>
    )
}

export default VideoPlayer