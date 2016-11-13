import React from 'react';
import ReactDOM from 'react-dom';
class MessageBody extends React.Component {
    componentDidMount() {}

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
                        return (
                            <li className='media' key={index} ref={(ref) => this['_div' + index] = ref}>
                                <div className="media-body">
                                    <div className="media">
                                        <a className="pull-left" href="#">
                                            <img className="media-object img-circle " src="img/placeholder.svg"/>
                                        </a>
                                        <div className="media-body">
                                            {data.message}
                                            <br/>
                                            <small className="text-muted">{data.socketName}
                                                | time zone , update later!</small>
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
