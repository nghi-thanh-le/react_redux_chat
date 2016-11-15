import React from 'react';
import YouTube from 'react-youtube'

class YouTubeTemplate extends React.Component {
    render() {
        return (
            <div className={'embed-responsive embed-responsive-4by3 '.concat(this.props.classCheck)}>
                <YouTube videoId={this.props.videoId} className='embed-responsive-item'/>
            </div>
        );
    }
};

export default YouTubeTemplate;
