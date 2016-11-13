import React from 'react';
import MessageHeading from './MessageHeading';
import MessageBody from './MessageBody';
import MessageInput from './MessageInput';
import {connect} from 'react-redux';

class Messages extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.socket.on('NEW_MESSAGE_RETURN', data => {
            this.props.newMessage(data);
        });
    }

    handleSubmit = (event) => {
        const body = event.target.value;
        if (event.keyCode === 13) {
            if (event.shiftKey) {
                // event.target.value = body + '\n';
                event.preventDefault();
            } else if (body) {
                this.props.socket.emit('NEW_MESSAGE', body);
                event.target.value = '';
            }
        }
    }

    render() {
        return (
            <div className='col-xs-8 col-sm-8 col-md-8'>
                <div className='panel panel-info'>
                    <MessageHeading/>
                    <MessageBody messagesToOutput={this.props.messages}/>
                    <MessageInput handleSubmit={this.handleSubmit}/>
                </div>
            </div>
        );
    }
};

const mapStateToProps = function(state) {
    return {messages: state.messages}
}

const mapDispatchToProps = function(dispatch) {
    return {
        newMessage: function(data) {
            dispatch({type: 'NEW_MESSAGE', data});
        }
    };
};

export default connect(null, mapDispatchToProps)(Messages);
