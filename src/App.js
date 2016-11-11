import React from 'react';
import { render } from 'react-dom';
import ChatApp from './ChatApp';
import {Provider} from 'react-redux';
import store from './ReduxArea/store';

// store.subscribe(() => {
//     console.log('store changed!!!!!');
//     console.log(store.getState());
//     console.log('-------------------');
// });

render(<Provider store={store}>
    <ChatApp />
</Provider>, document.getElementById('app'));
