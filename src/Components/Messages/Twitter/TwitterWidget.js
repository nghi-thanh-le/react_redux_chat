import React from 'react';
import { Tweet } from 'react-twitter-widgets'

class TwitterWidget extends React.Component {
    render() {
        return (
            <div className={this.props.classCheck}>
                <Tweet tweetId={this.props.tweetId} />
            </div>
        );
    }
};

export default TwitterWidget;
