import {combineReducer} from 'redux';

// import messages from './messagesReducer';
// import users from './usersReducer';

// export default combineReducer({
//     messages,
//     users
// });

let initialState = {
    messages: []
};

export default function (state=initialState, action) {
    switch (action.type) {
        case 'NEW_MESSAGE':
            let newState = Object.assign({}, state);
            newState.messages= newState.messages.concat(action.message);
            return newState;
            break;
        default:
            return state;
    }
}
