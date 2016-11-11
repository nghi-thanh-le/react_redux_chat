import React from 'react';

class MessageInput extends React.Component {
    render() {
        return (
            <div className="panel-footer">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Enter Message"/>
                    <span className="input-group-btn">
                        <button className="btn btn-info" type="button">SEND</button>
                    </span>
                </div>
            </div>
        );
    }
}

export default MessageInput;
