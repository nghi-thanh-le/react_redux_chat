import React from 'react';
import MessageBody from './MessageBody';
import MessageInput from './MessageInput';
import MessageEvent from './MessageEvent';
import {connect} from 'react-redux';

class Messages extends React.Component {
    componentDidMount() {
        this.props.socket.on('NEW_MESSAGE_RETURN', data => {
            this.props.newMessage(data);
        });
    }

    handleSubmit = (event) => {
        const body = event.target.value;
        if (event.keyCode === 13) {
            if (event.shiftKey) {
                event.preventDefault();
            } else if (body) {
                this.props.socket.emit('NEW_MESSAGE', body);
                event.target.value = '';
            }
        }
    }

    render() {
        return (
            <div id="page-content-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 pre-panel-style">
                            <div className="panel panel-extra">
                                <MessageBody messagesToOutput={this.props.messages} userName={this.props.userName}/>
                                <MessageEvent socket={this.props.socket} />
                                <MessageInput socket={this.props.socket} handleSubmit={this.handleSubmit}/>
                            </div>
                        </div>
                    </div>
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
