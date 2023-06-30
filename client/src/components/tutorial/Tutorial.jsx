import React from 'react';
import ReactPlayer from 'react-player';
import "./Tutorial.css"

const YouTubeVideo = () => {
    return (
        <div className='videoBox'>
            <div className='center'>
                <h1 className='text'>YouTube Video</h1>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=GactPNDK2b0"
                    width="640px"
                    height="360px"
                    controls={true}
                    playing={true}
                />
            </div>
        </div>
    );
};

export default YouTubeVideo;

