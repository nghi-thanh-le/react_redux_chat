import React from 'react';
import { Tweet } from 'react-twitter-widgets'

class TwitterWidget extends React.Component {
    render() {
        return (
            <Tweet tweetId={this.props.tweetId} />
        );
    }
};

export default TwitterWidget;
