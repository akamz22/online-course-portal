import React from 'react'

const VideoPlayer = ({videoUrl,poster}) => {
    // console.log(videoUrl);
    return (
        <video
            className='rounded-sm'
            src={videoUrl?.videoUrl}
            // autoPlay
            type='video/mp4'
            controls
            poster={poster}
            width={1000}
            height={250}>
        </video>
    )
}

export default VideoPlayer