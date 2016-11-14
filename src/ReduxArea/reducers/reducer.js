import {combineReducers} from 'redux';

import socket from './socketReducer';
import messages from './messagesReducer';
import users from './usersReducer';

export default combineReducers({
    socket,
    messages,
    users
});
