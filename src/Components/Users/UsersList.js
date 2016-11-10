import React from 'react';

export default class UserList extends React.Component {
    render() {
        return (
            <div className='col-xs-4 col-sm-4 col-md-4 userArea'>
                <ul>
                    {this.props.users.map((user, index) => {
                        return <li key={index} className='list-unstyled'>{user}</li>;
                    })}
                </ul>
            </div>
        );
    }
}
