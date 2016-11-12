import {combineReducers} from 'redux';

import messages from './messagesReducer';
import users from './usersReducer';
import userLogin from './userLoginReducer'

export default combineReducers({
    messages,
    users,
    userLogin
});
