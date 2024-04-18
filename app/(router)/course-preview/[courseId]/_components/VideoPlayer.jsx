import React from 'react';
const VideoPlayer = ({ videoUrl, poster, demoUrl, totalChapters ,chapter}) => {

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
    // console.log("Tot : ",  demoUrl);
    // console.log("Chapters : ",chapter);
    if (chapter?.length == 0) {
        return (
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
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
