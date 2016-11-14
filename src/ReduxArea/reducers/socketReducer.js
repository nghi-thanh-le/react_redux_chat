import io from 'socket.io-client';

const initialState = {
    socket: io('localhost:3000'),
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
