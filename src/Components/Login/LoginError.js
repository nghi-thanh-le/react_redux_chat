import React from 'react';

export default class LoginHeader extends React.Component {
    render() {
        return (
            <div className="alert alert-dismissible alert-danger">
                Can not be null user name!!!
            </div>
        );
    }
};
