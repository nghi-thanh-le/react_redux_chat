import React from 'react';

export default class UsersBody extends React.Component {
    render() {
        return (
            <div className="panel-body">
                <ul className="media-list">
                    {
                        this.props.users.map((user, index) => {
                            return (
                                <li className="media" key={index}>
                                    <div className="media-body">
                                        <div className="media">
                                            <a className="pull-left" href="#">
                                                <img className="media-object img-circle userImg" src="img/placeholder.svg"/>
                                            </a>
                                            <div className="media-body">
                                                <h5>{user}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            );
                        })
                    }

                </ul>
            </div>
        );
    }
}
