import React from 'react';

class IsTypingComponent extends React.Component {
    render() {
        return (
            <p className='typingText'>Friend is typing...</p>
        );
    }
};

class MessageInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        };
    }

    componentDidMount() {
        this.props.socket.on('USER_WRITING_SERVER', () => {
            this.setState({
                show: true
            });
        });
        this.props.socket.on('NEW_MESSAGE_RETURN', data => {
            this.setState({
                show: false
            });
        });
    }

    onWriting() {
        this.props.socket.emit('USER_WRITING_CLIENT', {});
    }

    render() {
        return (
            <div className="panel-footer">
                { this.state.show ? <IsTypingComponent /> : null }

                <div className="form-group">
                    <textarea
                        className="form-control"
                        rows='3'
                        onKeyUp={this.props.handleSubmit}
                        placeholder='Enter Message'
                        onChange={this.onWriting.bind(this)}></textarea>
                </div>
            </div>
        );
    }
}

export default MessageInput;
