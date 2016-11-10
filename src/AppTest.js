import React from 'react';
import { bindActionCreators, connect } from 'react-redux';
import io from 'socket.io-client';

// class AppTest extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             messages: []
//         };
//     }
//
//     componentDidMount() {
//         this.socket = io('localhost:3000');
//         // this.socket.emit('new-user', )
//         this.socket.on('message', message => {
//             this.setState({
//                 messages: [message, ...this.state.messages]
//             });
//         });
//
//         console.log(this.props);
//     }
//
//     handleSubmit = (event) => {
//         const body = event.target.value;
//         if(event.keyCode === 13 && body) {
//             const message = {
//                 body,
//                 from: 'LazyMies'
//             };
//             this.setState({
//                 messages: [message, ...this.state.messages]
//             });
//             this.socket.emit('message', body);
//             event.target.value = '';
//         }
//     }
//
//     render() {
//         const messages = this.state.messages.map((message, index) => {
//             return <li key={index}>
//                 <b>{message.from}: </b>{message.body}
//             </li>;
//         });
//         return (
//             <div className='container'>
//                 <div className='row'>
//                     <div className='col-xs-4 col-sm-4 col-md-4 userArea'>
//                         UserList here
//                     </div>
//                     <div className='col-xs-4 col-sm-8 col-md-8 messageArea'>
//                         <h1>Chat app react redux</h1>
//                         <input type='text' placeholder='Enter a message' onKeyUp={this.handleSubmit.bind(this)}/>
//                         {messages}
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

class AppTest extends React.Component {
    componentDidMount() {
        console.log(this.props);
        this.socket = io('localhost:3000');
    }

    handleSubmit(event) {
        this.props.action(event.target.value);
    }

    render() {
        return(
            <div className='container'>
                <h1>Hello World!</h1>
                <input type='text' placeholder='Where the thing begins' />
                <button onClick={this.handleSubmit.bind(this)}>Click me!!!</button>
                {this.props.messages.map((message, index) => {
                    return <li key={index}>{message}</li>;
                })}
            </div>
        );
    }
}

const mapStateToProps = function (state) {
    return {
        messages: state.messages
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        action: function (message) {
            dispatch({
                type: 'NEW_MESSAGE',
                message: message
            });
        },
        logger: function () {
            console.log('I am from dispatch');
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppTest);
