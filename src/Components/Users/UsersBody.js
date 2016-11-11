import React from 'react';

export default class UsersBody extends React.Component {
    render() {
        return (
            <div className="panel-body">
                <ul className="media-list">
                    <li className="media">
                        <div className="media-body">
                            <div className="media">
                                <a className="pull-left" href="#">
                                    <img className="media-object img-circle userImg" src="img/placeholder.svg"/>
                                </a>
                                <div className="media-body">
                                    <h5>Alex Deo | User
                                    </h5>

                                    <small className="text-muted">Active From 3 hours</small>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}
