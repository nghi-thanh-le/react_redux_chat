// import { newMessage } from '../actions/messagesAction';

import moment from 'moment';

const initialState = [{
    socketName: 'lazy',
    message: 'Welcome to the simple chat app writen in react-redux!!! Have look and have fun :D',
    timeZone: moment()
}];

const messagesReducer = function (state=initialState, action) {
    switch (action.type) {
        case 'NEW_MESSAGE':
            let newState = [].concat(state);
            newState = newState.concat({
                socketName: action.data.socketName,
                message: action.data.message,
                timeZone: action.data.timeZone
            });
            return newState;
            break;
        default:
            return state;
    }
}

export default messagesReducer;
