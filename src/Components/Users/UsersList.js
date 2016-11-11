import React from 'react';
import UsersHeading from './UsersHeading';
import UsersBody from './UsersBody';

export default class UsersList extends React.Component {
    render() {
        return (
            <div className='col-xs-4 col-sm-4 col-md-4'>
                <div className="panel panel-primary">
                    <UsersHeading />
                    <UsersBody />
                </div>
            </div>
        );
    }
}
