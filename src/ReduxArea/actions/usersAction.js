export function newUser() {
    return {
        type: 'NEW_USER'
    };
};

export function deleteUser() {
    return {
        type: 'DELETE_USER'
    };
};

export function leavingUser() {
    return {
        type: 'LEAVING_USER'
    };
};
