import React from 'react';
import ReactDOM from 'react-dom';
import TweetIdExtract from '../../libs/tweetIdExtract';
import UrlDetector from '../../libs/UrlDetector';
import YoutubeVideoIdExtract from '../../libs/YoutubeVideoIdExtract';
import TwitterWidget from './Twitter/TwitterWidget';
import YouTube from 'react-youtube';
import moment from 'moment';

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

    validateClass(name, nameToCheck, extraStyle) {
        if(name == nameToCheck) {
            return extraStyle ? 'pull-right '.concat(extraStyle) : 'pull-right';
        } else {
            return extraStyle ? 'pull-left '.concat(extraStyle) : 'pull-left';
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
                                        <a className={this.validateClass(data.socketName, this.props.userName)} href='#'>
                                            <img className='media-object img-circle' src='img/placeholder.svg'/>
                                        </a>
                                        <div className='media-body'>
                                            <p className={this.validateClass(data.socketName, this.props.userName)}>
                                                {data.message}
                                            </p>
                                            <br/>
                                            <div className='clearfix'></div>
                                            <div className={this.validateClass(data.socketName, this.props.userName)}>
                                                { twitterWidget ? <TwitterWidget
                                                    tweetId={twitterWidget.tweetId}
                                                    classCheck=''
                                                    /> : null }
                                                { youtubeVideoId ? <YouTube
                                                    videoId={youtubeVideoId.videoId}
                                                    classCheck=''
                                                    /> : null }
                                            </div>
                                            <div className='clearfix'></div>
                                            <br/>
                                            <small className={this.validateClass(data.socketName, this.props.userName, 'text-muted')}>
                                                {data.socketName} | {moment(data.timeZone).format('MMMM Do YYYY, h:mm:ss a')}
                                            </small>
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
