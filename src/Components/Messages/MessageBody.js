import React from 'react';
import ReactDOM from 'react-dom';
import TweetIdExtract from '../../libs/tweetIdExtract';
import UrlDetector from '../../libs/UrlDetector';
import YoutubeVideoIdExtract from '../../libs/YoutubeVideoIdExtract';
import TwitterWidget from './Twitter/TwitterWidget';
import YouTube from 'react-youtube';

class MessageBody extends React.Component {
    componentWillUpdate() {
        let node = ReactDOM.findDOMNode(this);
        this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight;
    }
    componentDidUpdate() {
        if (this.shouldScrollBottom) {
            let node = ReactDOM.findDOMNode(this);
            node.scrollTop = node.scrollHeight
        }
    }
    render() {
        return (
            <div className='panel-body messageBody'>
                <ul className='media-list'>
                    {this.props.messagesToOutput.map((data, index) => {
                        const detectedUrl = UrlDetector(data.message);
                        let twitterWidget = false;
                        let youtubeVideoId = false;
                        if(detectedUrl) {
                            twitterWidget = TweetIdExtract(detectedUrl);
                            youtubeVideoId = YoutubeVideoIdExtract(detectedUrl);
                        }
                        return (
                            <li className='media' key={index}>
                                <div className='media-body'>
                                    <div className='media'>
                                        <a className='pull-right' href='#'>
                                            <img className='media-object img-circle ' src='img/placeholder.svg'/>
                                        </a>
                                        <div className='media-body'>
                                            <p className='pull-right'>{data.message}</p>
                                            <br/>
                                            { twitterWidget ? <TwitterWidget tweetId={twitterWidget.tweetId} /> : null }
                                            { youtubeVideoId ? <YouTube videoId={youtubeVideoId.videoId} /> : null }
                                            <br/>
                                            <small className='text-muted pull-right'>{data.socketName} | time zone , update later!</small>
                                            <hr/>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default MessageBody;
