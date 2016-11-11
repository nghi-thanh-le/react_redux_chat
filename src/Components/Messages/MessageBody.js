import React from 'react';

class MessageBody extends React.Component {
    render() {
        return (
            <div className='panel-body'>
                <ul className='media-list'>
                    {this.props.messagesToOutput.map((data, index) => {
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
