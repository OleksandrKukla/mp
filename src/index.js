import React from 'react';
import {render} from 'react-dom';
import * as Router from 'react-router-dom';

import App from './components/App'

render(
    <Router.BrowserRouter>
        <App/>
    </Router.BrowserRouter>,
    document.getElementById('root')
);
