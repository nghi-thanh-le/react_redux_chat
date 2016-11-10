const initialState = [];

export default (state=initialState, action) => {
    let newState = [].concat(state);
    switch (action.type) {
        case 'NEW_USER':
            return action.users;
            break;
        case 'UPDATE_USERS':
            return action.users;
            break;
        default:
            return state;
    }
}
