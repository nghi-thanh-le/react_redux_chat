import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './ReduxArea/store';
import {bindActionCreators, connect} from 'react-redux';
import io from 'socket.io-client';
import {Router, Route, hashHistory } from 'react-router';

// Components import
import UsersList from './Components/Users/UsersList';
import Messages from './Components/Messages/Messages';

store.subscribe(() => {
    console.log('store changed!!!!!');
    console.log(store.getState());
    console.log('-------------------');
});

class ChatApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            socket: io('localhost:3000')
        };
    }

    componentDidMount() {
        this.state.socket.on('NEW_USER', data => {
            this.props.newUser(data.socketArray);
        });
        this.state.socket.on('UPDATE_USERS', users => {
            this.props.updateUsers(users);
        });
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <h3 className='text-center'>Chat Example</h3>
                    <br/><br/>
                    <Messages socket={this.state.socket} messages={this.props.messages}/>
                    <UsersList socket={this.state.socket} users={this.props.users}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = function(state) {
    return {
        messages: state.messages,
        users: state.users
    };
};

const mapDispatchToProps = function(dispatch) {
    return {
        newUser: function(users) {
            dispatch({type: 'NEW_USER', users});
        },
        updateUsers: function(users) {
            dispatch({type: 'UPDATE_USERS', users});
        }
    };
};

ChatApp = connect(mapStateToProps, mapDispatchToProps)(ChatApp);

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/'>
                <Route path='/chat' component={ChatApp} />
            </Route>
        </Router>
    </Provider>, document.getElementById('app'));
