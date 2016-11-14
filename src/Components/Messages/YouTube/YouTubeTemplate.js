import React from 'react';
import YouTube from 'react-youtube'

class YouTubeTemplate extends React.Component {
    render() {
        return (
            <YouTube videoId={this.props.videoId} className='youtube-video'/>
        );
    }
};

export default YouTubeTemplate;
