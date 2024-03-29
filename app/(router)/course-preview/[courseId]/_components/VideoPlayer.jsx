// 'use client'
// import React from 'react'
// const VideoPlayer = ({ videoUrl, poster , demoUrl , totalChapters }) => {
//     // console.log(videoUrl);

//     {console.log("Url" , demoUrl , " " , "totalChapters : ", totalChapters)}
//     return (
//         <video
//             className='rounded-sm'
//             key={videoUrl}
//             // autoPlay
//             controls
//             poster={poster}
//             width={1000}
//             height={250}>
//             <source src={videoUrl} type='video/mp4' />
//         </video>
//     )
// }

// export default VideoPlayer
import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({ videoUrl, poster, demoUrl, totalChapters }) => {

    const extractVideoId = (videoU) => {
        // Regular expression to extract the video ID from YouTube URLs
        const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = videoU.match(regExp);
        
        if (match && match[1]) {
            return match[1];
        } else {
            // Handle invalid or unsupported URL formats
            console.error('Invalid or unsupported YouTube URL format');
            return null;
        }
    };

    const videoId = extractVideoId(demoUrl);
    if (totalChapters === null || totalChapters === 0) {
        return (
            <YouTube videoId={videoId} />
        );
    } else {
        return (
            <video
                className='rounded-sm'
                key={videoUrl}
                // autoPlay
                controls
                poster={poster}
                width={1000}
                height={250}
            >
                <source src={videoUrl} type='video/mp4' />
            </video>
        );
    }
}

export default VideoPlayer;
