// import { newMessage } from '../actions/messagesAction';

const initialState = [];

const messagesReducer = function (state=initialState, action) {
    switch (action.type) {
        case 'NEW_MESSAGE':
            let newState = [].concat(state);
            newState = newState.concat({
                socketName: action.data.socketName,
                message: action.data.message
            });
            return newState;
            break;
        default:
            return state;
    }
}

export default messagesReducer;
