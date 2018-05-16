import React from 'react';
import {render} from 'react-dom';

import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './redux/reducers';

import App from './components/App';
import {REDUX_DEVTOOLS_EXTENSION} from './constants';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window[REDUX_DEVTOOLS_EXTENSION] && window[REDUX_DEVTOOLS_EXTENSION]()
    )
);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);