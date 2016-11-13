import React from 'react';
import ReactDOM from 'react-dom';
import TweetIdExtract from '../../libs/tweetIdExtract';
import TwitterWidget from './Twitter/TwitterWidget';

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
                        const twitterWidget = TweetIdExtract(data.message);
                        return (
                            <li className='media' key={index}>
                                <div className="media-body">
                                    <div className="media">
                                        <a className="pull-left" href="#">
                                            <img className="media-object img-circle " src="img/placeholder.svg"/>
                                        </a>
                                        <div className="media-body">
                                            {data.message}
                                            <br/>
                                            { twitterWidget ? <TwitterWidget tweetId={twitterWidget.tweetId} /> : null }
                                            <br/>
                                            <small className="text-muted">{data.socketName} | time zone , update later!</small>
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
