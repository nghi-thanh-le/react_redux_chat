import React from 'react';
import UsersHeading from './UsersHeading';
import UsersBody from './UsersBody';
import io from 'socket.io-client';

export default class UsersList extends React.Component {
    componentDidMount() {}

    render() {
        return (
            <div id="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <UsersHeading />
                    <UsersBody users={this.props.users}/>
                </ul>
            </div>
        );
    }
}
