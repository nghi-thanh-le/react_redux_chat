import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
// import reducer from './reducers/reducer';

const middleware = applyMiddleware(logger());

const initialState = {
    messages: []
};

const reducer = function (state=initialState, action) {
    console.log('I am triggerd!!! from ', action.type);
    if(action.type === 'NEW_MESSAGE') {
        let newState = Object.assign({}, state);
        newState.messages= newState.messages.concat(action.message);
        return newState;
    }
    return state;
}

export default createStore(reducer, middleware);
