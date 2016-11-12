const initialState = '';

export default (state=initialState, action) => {
    let newState = [].concat(state);
    switch (action.type) {
        case 'USER_LOGIN':
            return action.user;
            break;
        default:
            return state;
    }
}
