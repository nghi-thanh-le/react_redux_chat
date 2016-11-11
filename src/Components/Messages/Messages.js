import React from 'react';
import MessageHeading from './MessageHeading';
import MessageBody from './MessageBody';
import MessageInput from './MessageInput';


class Messages extends React.Component {
    render() {
        return (
            <div className='col-xs-8 col-sm-8 col-md-8'>
                <div className='panel panel-info'>
                    <MessageHeading />
                    <MessageBody />
                    <MessageInput />
                </div>
            </div>
        );
    }
}

export default Messages;
