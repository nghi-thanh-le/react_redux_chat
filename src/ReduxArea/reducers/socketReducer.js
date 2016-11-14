import io from 'socket.io-client';

const initialState = io('localhost:3000');

export default function (state=initialState, action) {
    return state;
}
