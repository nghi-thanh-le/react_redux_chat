import React from 'react';
import {render} from 'react-dom';
import {Link, hashHistory} from 'react-router';
import LoginHeader from './LoginHeader';
import LoginError from './LoginError';
import store from '../../ReduxArea/store';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errorShow: false
        };
    }

    handleSubmit(event) {
        var userInput = this.refs.userInputField.value;
        var _this = this;
        if(!userInput) {
            event.preventDefault();
            this.setState({
                errorShow: true
            });

            setTimeout(() => {
                _this.setState({
                    errorShow: false
                });
            }, 2000);
        } else {
            store.dispatch({
                type: 'USER_LOGIN',
                user: userInput
            });
            hashHistory.push('/chat');
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='form-signin'>
                    <LoginHeader/>
                    {this.state.errorShow ? <LoginError /> : null}

                    <label className='sr-only'>User name:</label>
                    <input type='text' className='form-control' placeholder='Your chat nickname' ref='userInputField'/>
                    <br/>
                    <button className='btn btn-lg btn-primary btn-block' type='button' onClick={this.handleSubmit.bind(this)}>Sign in</button>
                </div>
            </div>
        );
    }
}

export default Login;

// <Link to='/chat' className='link-nav'>
//     <button className='btn btn-lg btn-primary btn-block' type='button' onClick={this.handleSubmit.bind(this)}>Sign in</button>
// </Link>
