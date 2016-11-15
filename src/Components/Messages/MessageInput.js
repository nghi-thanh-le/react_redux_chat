import React from 'react';

class MessageInput extends React.Component {
    render() {
        return (
            <div className="panel-footer">
                <div className="form-group">
                    <textarea className="form-control" rows='3' onKeyUp={this.props.handleSubmit} placeholder='Enter Message'></textarea>
                </div>
            </div>
        );
    }
}

export default MessageInput;

// <span className="input-group-btn">
//     <button className="btn btn-info" type="button">&#43;</button>
// </span>
