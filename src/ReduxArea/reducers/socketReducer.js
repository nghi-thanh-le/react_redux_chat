import io from 'socket.io-client';

const initialState = {
    socket: io(window.location.hostname),
    userName: ''
};

export default function (state=initialState, action) {
    if(action.type === 'USER_LOGIN') {
        let newState = Object.assign({}, state);
        newState.userName = ''.concat(action.user);
        return newState;
    }
    return state;
}
