import React from 'react';
import {bindActionCreators, connect} from 'react-redux';
import io from 'socket.io-client';

// Components import
import UsersList from './Components/Users/UsersList';
import Messages from './Components/Messages/Messages';

class ChatApp extends React.Component {
    componentDidMount() {
        let whoWroteTheMessage = "";
        this.socket = io('localhost:3000');
        this.socket.on('NEW_MESSAGE_RETURN', data => {
            this.props.newMessage(data);
        });
        this.socket.on('NEW_USER', data => {
            this.props.newUser(data.socketArray);
        });
        this.socket.on('UPDATE_USERS', userArray => {
            this.props.updateUsers(userArray);
        });
    }

    handleSubmit = (event) => {
        const body = event.target.value;
        if (event.keyCode === 13 && body) {
            this.socket.emit('NEW_MESSAGE', body);
            event.target.value = '';
        }
    }

    render() {
        const messages = this.props.messages.map((value, index) => {
            return <li key={index}>
                <b>{value.socketName}:
                </b>{value.message}
            </li>;
        });
        return (
            <div className='container'>
                <div className='row'>
                    <h3 className='text-center'>Chat Example</h3>
                    <br/><br/>
                    <Messages />
                    <UsersList />
                </div>
            </div>
        );
    }
}

const mapStateToProps = function(state) {
    return {messages: state.messages, users: state.users};
};

const mapDispatchToProps = function(dispatch) {
    return {
        newMessage: function(data) {
            dispatch({type: 'NEW_MESSAGE', data});
        },
        newUser: function(users) {
            dispatch({type: 'NEW_USER', users})
        },
        updateUsers: function(users) {
            dispatch({type: 'UPDATE_USERS', users});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatApp);
