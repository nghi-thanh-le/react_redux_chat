import {combineReducers} from 'redux';

import messages from './messagesReducer';
import users from './usersReducer';

export default combineReducers({
    messages,
    users
});
