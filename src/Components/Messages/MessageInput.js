import React from 'react';

class MessageInput extends React.Component {
    render() {
        return (
            <div className="panel-footer">
                <div className="input-group">
                    <textarea className="form-control" rows='3' onKeyUp={this.props.handleSubmit} placeholder='Enter Message'></textarea>
                    <span className="input-group-btn">
                        <button className="btn btn-info" type="button">&#43;</button>
                    </span>
                </div>
            </div>
        );
    }
}

export default MessageInput;
