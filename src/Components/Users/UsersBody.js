import React from 'react';

export default class UsersBody extends React.Component {
    render() {
        return (
            <div>
                {this.props.users.map((user, index) => {
                    return (
                        <li key={index}>
                            <a href="">{user}</a>
                        </li>
                    );
                })}
            </div>
        );
    }
}
