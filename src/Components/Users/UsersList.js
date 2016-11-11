import React from 'react';
import UsersHeading from './UsersHeading';
import UsersBody from './UsersBody';
import io from 'socket.io-client';

export default class UsersList extends React.Component {
    componentDidMount() {}

    render() {
        return (
            <div className='col-xs-4 col-sm-4 col-md-4'>
                <div className="panel panel-primary">
                    <UsersHeading />
                    <UsersBody users={this.props.users}/>
                </div>
            </div>
        );
    }
}
