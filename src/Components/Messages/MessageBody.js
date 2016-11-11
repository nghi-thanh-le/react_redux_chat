import React from 'react';

class MessageBody extends React.Component {
    render() {
        return (
            <div className='panel-body'>
                <ul className='media-list'>
                    <li className='media'>
                        <div className="media-body">
                            <div className="media">
                                <a className="pull-left" href="#">
                                    <img className="media-object img-circle " src="img/placeholder.svg"/>
                                </a>
                                <div className="media-body">
                                    Donec sit amet ligula enim. Duis vel condimentum massa. Donec sit amet ligula enim. Duis vel condimentum massa.Donec sit amet ligula enim. Duis vel condimentum massa. Donec sit amet ligula enim. Duis vel condimentum massa.
                                    <br/>
                                    <small className="text-muted">Alex Deo | 23rd June at 5:00pm</small>
                                    <hr/>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default MessageBody;
