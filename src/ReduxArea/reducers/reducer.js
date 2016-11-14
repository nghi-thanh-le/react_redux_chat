import {combineReducers} from 'redux';

import socket from './socketReducer';
import messages from './messagesReducer';
import users from './usersReducer';
import userLogin from './userLoginReducer';

export default combineReducers({
    socket,
    messages,
    users,
    userLogin
});
