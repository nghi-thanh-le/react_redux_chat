const initialState = [];

export default (state=initialState, action) => {
    let newState = [].concat(state);
    switch (action.type) {
        case 'UPDATE_USERS':
            return action.users;
            break;
        default:
            return state;
    }
}
