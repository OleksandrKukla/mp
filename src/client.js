import 'babel-polyfill';
import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import configureStore from './redux/configureStore';

import App from './components/App';

const store = configureStore(window.PRELOADED_STATE);

hydrate(
    <App
        Router={BrowserRouter}
        store={store}
    />,
    document.getElementById('root'),
);