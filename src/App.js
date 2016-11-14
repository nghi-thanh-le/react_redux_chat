import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './ReduxArea/store';
import {bindActionCreators, connect} from 'react-redux';
import {Router, Route, hashHistory} from 'react-router';
import YouTube from 'react-youtube';

// Components import
import UsersList from './Components/Users/UsersList';
import Messages from './Components/Messages/Messages';
import Login from './Components/Login/Login';

class ChatApp extends React.Component {
    componentDidMount() {
        const socketIO = this.props.socketIO;
        socketIO.socket.emit('USER_LOGIN', socketIO.userName);
        socketIO.socket.on('UPDATE_USERS', users => {
            this.props.updateUsers(users);
        });
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <h3 className='text-center'>Chat Example</h3>
                    <br/><br/>
                    <Messages socket={this.props.socketIO.socket} messages={this.props.messages} userName={this.props.socketIO.userName}/>
                    <UsersList socket={this.props.socketIO.socket} users={this.props.users}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = function(state) {
    return {
        socketIO: state.socket,
        messages: state.messages,
        users: state.users
    };
};

const mapDispatchToProps = function(dispatch) {
    return {
        updateUsers: function(users) {
            dispatch({type: 'UPDATE_USERS', users});
        }
    };
};

ChatApp = connect(mapStateToProps, mapDispatchToProps)(ChatApp);

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={Login} />
            <Route path='/chat' component={ChatApp} />
        </Router>
    </Provider>, document.getElementById('app'));
